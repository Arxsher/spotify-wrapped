import React, { createContext, useContext, useState, useMemo, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  mockUser,
  mockTopTracks,
  mockTopArtists,
  mockRecentlyPlayed,
  mockPlaylists,
  mockGenreDistribution,
  mockAudioFeaturesAverage,
  mockListeningStats,
  mockMonthlyTrend,
  mockTimeRanges
} from '../data/spotifyMockData';

const SpotifyDataContext = createContext(null);

const BACKEND_URI = 'http://localhost:8888';

export const useSpotifyData = () => {
  const context = useContext(SpotifyDataContext);
  if (!context) {
    throw new Error('useSpotifyData must be used within a SpotifyDataProvider');
  }
  return context;
};

export const SpotifyDataProvider = ({ children }) => {
  const [timeRange, setTimeRange] = useState('medium_term');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  
  // Real data state
  const [tokens, setTokens] = useState(() => {
    const saved = localStorage.getItem('spotify_tokens');
    return saved ? JSON.parse(saved) : null;
  });
  const [user, setUser] = useState(mockUser);
  const [topTracks, setTopTracks] = useState(mockTopTracks);
  const [topArtists, setTopArtists] = useState(mockTopArtists);
  const [recentlyPlayed, setRecentlyPlayed] = useState(mockRecentlyPlayed);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Extract tokens from URL hash on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const accessToken = params.get('access_token');
      const refreshToken = params.get('refresh_token');

      if (accessToken && refreshToken) {
        const newTokens = { accessToken, refreshToken };
        setTokens(newTokens);
        localStorage.setItem('spotify_tokens', JSON.stringify(newTokens));
        window.location.hash = ''; // Clear hash
      }
    }
  }, []);

  const refreshAccessToken = useCallback(async () => {
    if (!tokens?.refreshToken) return;
    try {
      const res = await axios.get(`${BACKEND_URI}/refresh_token?refresh_token=${tokens.refreshToken}`);
      const newTokens = { ...tokens, accessToken: res.data.access_token };
      setTokens(newTokens);
      localStorage.setItem('spotify_tokens', JSON.stringify(newTokens));
      return res.data.access_token;
    } catch (err) {
      console.error('Error refreshing token:', err);
      setTokens(null);
      localStorage.removeItem('spotify_tokens');
      throw err;
    }
  }, [tokens]);

  const apiFetch = useCallback(async (endpoint) => {
    if (!tokens) return null;
    try {
      const res = await axios.get(`https://api.spotify.com/v1/${endpoint}`, {
        headers: { Authorization: `Bearer ${tokens.accessToken}` }
      });
      return res.data;
    } catch (err) {
      if (err.response?.status === 401) {
        const newToken = await refreshAccessToken();
        const res = await axios.get(`https://api.spotify.com/v1/${endpoint}`, {
          headers: { Authorization: `Bearer ${newToken}` }
        });
        return res.data;
      }
      throw err;
    }
  }, [tokens, refreshAccessToken]);

  // Fetch real data when tokens change
  useEffect(() => {
    if (!tokens) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const [userRes, tracksRes, artistsRes, recentRes] = await Promise.all([
          apiFetch('me'),
          apiFetch(`me/top/tracks?time_range=${timeRange}&limit=50`),
          apiFetch(`me/top/artists?time_range=${timeRange}&limit=50`),
          apiFetch('me/player/recently-played?limit=50')
        ]);

        if (userRes) setUser(userRes);
        if (tracksRes) setTopTracks(tracksRes.items);
        if (artistsRes) setTopArtists(artistsRes.items);
        if (recentRes) setRecentlyPlayed(recentRes.items);

        setError(null);
      } catch (err) {
        console.error('Error fetching Spotify data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tokens, timeRange, apiFetch]);

  const login = () => {
    window.location.href = `${BACKEND_URI}/login`;
  };

  const logout = () => {
    setTokens(null);
    localStorage.removeItem('spotify_tokens');
    setUser(mockUser);
    setTopTracks(mockTopTracks);
    setTopArtists(mockTopArtists);
    setRecentlyPlayed(mockRecentlyPlayed);
  };

  const genreDistribution = useMemo(() => {
    if (!authenticated || !topArtists.length || topArtists === mockTopArtists) {
      return mockGenreDistribution;
    }
    
    const counts = {};
    topArtists.forEach(artist => {
      artist.genres?.forEach(genre => {
        counts[genre] = (counts[genre] || 0) + 1;
      });
    });
    
    return Object.entries(counts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([genre, count]) => ({
        genre,
        percentage: Math.round((count / topArtists.length) * 100),
        count
      }));
  }, [topArtists, authenticated]);

  const timeRangeLabel = useMemo(() => {
    return timeRange === 'short_term' ? 'Last 4 Weeks' : timeRange === 'medium_term' ? 'Last 6 Months' : 'All Time';
  }, [timeRange]);

  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const pauseTrack = () => {
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseTrack();
    } else if (currentTrack) {
      setIsPlaying(true);
    } else if (topTracks.length > 0) {
      playTrack(topTracks[0]);
    }
  };

  const nextTrack = () => {
    if (!topTracks.length) return;
    if (!currentTrack) {
      playTrack(topTracks[0]);
      return;
    }
    const currentIndex = topTracks.findIndex(t => t.id === (currentTrack.id || currentTrack.track?.id));
    const nextIndex = (currentIndex + 1) % topTracks.length;
    playTrack(topTracks[nextIndex]);
  };

  const previousTrack = () => {
    if (!topTracks.length) return;
    if (!currentTrack) {
      playTrack(topTracks[0]);
      return;
    }
    const currentIndex = topTracks.findIndex(t => t.id === (currentTrack.id || currentTrack.track?.id));
    const prevIndex = currentIndex === 0 ? topTracks.length - 1 : currentIndex - 1;
    playTrack(topTracks[prevIndex]);
  };

  const value = {
    user,
    topTracks,
    allTopTracks: topTracks,
    topArtists,
    allTopArtists: topArtists,
    recentlyPlayed,
    playlists: mockPlaylists,
    genreDistribution,
    audioFeatures: mockAudioFeaturesAverage,
    listeningStats: mockListeningStats,
    monthlyTrend: mockMonthlyTrend,
    timeRange,
    setTimeRange,
    timeRangeLabel,
    isPlaying,
    currentTrack,
    playTrack,
    pauseTrack,
    togglePlay,
    nextTrack,
    previousTrack,
    authenticated: !!tokens,
    login,
    logout,
    loading,
    error,
    apiFetch
  };

  return (
    <SpotifyDataContext.Provider value={value}>
      {children}
    </SpotifyDataContext.Provider>
  );
};

export default SpotifyDataContext;
