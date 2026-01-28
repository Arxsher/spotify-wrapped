import React, { createContext, useContext, useState, useMemo } from 'react';
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

  const filteredData = useMemo(() => {
    return mockTimeRanges[timeRange];
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
    } else if (mockTopTracks.length > 0) {
      playTrack(mockTopTracks[0]);
    }
  };

  const nextTrack = () => {
    if (!currentTrack) {
      playTrack(mockTopTracks[0]);
      return;
    }
    const currentIndex = mockTopTracks.findIndex(t => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % mockTopTracks.length;
    playTrack(mockTopTracks[nextIndex]);
  };

  const previousTrack = () => {
    if (!currentTrack) {
      playTrack(mockTopTracks[0]);
      return;
    }
    const currentIndex = mockTopTracks.findIndex(t => t.id === currentTrack.id);
    const prevIndex = currentIndex === 0 ? mockTopTracks.length - 1 : currentIndex - 1;
    playTrack(mockTopTracks[prevIndex]);
  };

  const value = {
    user: mockUser,
    topTracks: filteredData.topTracks,
    allTopTracks: mockTopTracks,
    topArtists: filteredData.topArtists,
    allTopArtists: mockTopArtists,
    recentlyPlayed: mockRecentlyPlayed,
    playlists: mockPlaylists,
    genreDistribution: mockGenreDistribution,
    audioFeatures: mockAudioFeaturesAverage,
    listeningStats: mockListeningStats,
    monthlyTrend: mockMonthlyTrend,
    timeRange,
    setTimeRange,
    timeRangeLabel: filteredData.label,
    isPlaying,
    currentTrack,
    playTrack,
    pauseTrack,
    togglePlay,
    nextTrack,
    previousTrack
  };

  return (
    <SpotifyDataContext.Provider value={value}>
      {children}
    </SpotifyDataContext.Provider>
  );
};

export default SpotifyDataContext;
