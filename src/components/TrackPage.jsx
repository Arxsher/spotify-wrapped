import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Pause, ArrowLeft, Heart, MoreHorizontal, Clock, Calendar, BarChart2 } from 'lucide-react';
import { getTrackById, formatDuration, getRelativeTime, formatNumber } from '../data/spotifyMockData';
import { useSpotifyData } from '../contexts/SpotifyDataContext';
import './TrackPage.css';

const TrackPage = () => {
  const { id } = useParams();
  const [track, setTrack] = useState(null);
  const { currentTrack, isPlaying, playTrack, pauseTrack } = useSpotifyData();

  useEffect(() => {
    const trackData = getTrackById(id);
    setTrack(trackData);
    window.scrollTo(0, 0);
  }, [id]);

  if (!track) {
    return <div className="loading-state">Loading track...</div>;
  }

  const handlePlayClick = () => {
    if (currentTrack?.id === track.id && isPlaying) {
      pauseTrack();
    } else {
      playTrack(track);
    }
  };

  const isCurrentTrack = currentTrack?.id === track.id;
  const isTrackPlaying = isCurrentTrack && isPlaying;
  const features = track.audio_features || {};

  return (
    <div className="track-page">
      <div className="track-header">
        <Link to="/" className="back-button">
          <ArrowLeft size={24} />
        </Link>
        <div className="track-header-content">
          <div className="track-cover-container">
            <img src={track.album.images[0]?.url} alt={track.album.name} className="track-cover-image" />
          </div>
          <div className="track-details">
            <span className="track-type">Song</span>
            <h1 className="track-title-large">{track.name}</h1>
            <div className="track-meta-row">
              <div className="artist-info-mini">
                <div className="artist-icon-fallback">{track.artists[0].name[0]}</div>
                <Link to={`/artist/${track.artists[0].id}`} className="artist-link-bold">
                  {track.artists.map(a => a.name).join(', ')}
                </Link>
              </div>
              <span className="dot-separator">•</span>
              <Link to={`/album/${track.album.id}`} className="album-link-hover">{track.album.name}</Link>
              <span className="dot-separator">•</span>
              <span className="release-year">2023</span> {/* Mock year */}
              <span className="dot-separator">•</span>
              <span className="track-duration">{formatDuration(track.duration_ms)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="track-content">
        <div className="track-actions-bar">
          <button className="play-button-large" onClick={handlePlayClick}>
            {isTrackPlaying ? <Pause size={28} fill="black" /> : <Play size={28} fill="black" />}
          </button>
          <button className="action-icon-btn"><Heart size={32} /></button>
          <button className="action-icon-btn"><MoreHorizontal size={32} /></button>
        </div>

        <div className="track-stats-grid">
          <div className="stats-section">
            <h2 className="section-title">Track Stats</h2>
            <div className="stats-cards">
              <div className="stat-card">
                <div className="stat-value">{formatNumber(track.played_count)}</div>
                <div className="stat-label">Total Plays</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{track.popularity}%</div>
                <div className="stat-label">Popularity</div>
              </div>
            </div>
          </div>

          <div className="audio-features-section">
            <h2 className="section-title">Audio Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-label">Danceability</span>
                <div className="feature-bar-container">
                  <div className="feature-bar" style={{ width: `${features.danceability * 100}%`, backgroundColor: '#e91e63' }}></div>
                </div>
                <span className="feature-value">{Math.round(features.danceability * 100)}%</span>
              </div>
              
              <div className="feature-item">
                <span className="feature-label">Energy</span>
                <div className="feature-bar-container">
                  <div className="feature-bar" style={{ width: `${features.energy * 100}%`, backgroundColor: '#ff9800' }}></div>
                </div>
                <span className="feature-value">{Math.round(features.energy * 100)}%</span>
              </div>
              
              <div className="feature-item">
                <span className="feature-label">Valence (Mood)</span>
                <div className="feature-bar-container">
                  <div className="feature-bar" style={{ width: `${features.valence * 100}%`, backgroundColor: '#2196f3' }}></div>
                </div>
                <span className="feature-value">{Math.round(features.valence * 100)}%</span>
              </div>
              
              <div className="feature-item">
                <span className="feature-label">Tempo</span>
                <div className="feature-value-text">{Math.round(features.tempo)} BPM</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Lyrics Placeholder */}
        <div className="lyrics-section">
          <h2 className="section-title">Lyrics</h2>
          <div className="lyrics-placeholder">
            <p>Lyrics are not available for this track in the demo version.</p>
            <button className="load-lyrics-btn">Load Lyrics from Genius</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackPage;