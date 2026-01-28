import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { useSpotifyData } from '../contexts/SpotifyDataContext';
import './TopTracksGrid.css';

const TopTracksGrid = ({ limit = 14 }) => {
  const { topTracks } = useSpotifyData();
  const displayTracks = limit ? topTracks.slice(0, limit) : topTracks;

  return (
    <div className="tracks-grid">
      {displayTracks.map((track, index) => (
        <Link to={`/track/${track.id}`} key={track.id} className="track-card">
          <div className="track-image-wrapper">
            <img src={track.album.images[0]?.url} alt={track.name} className="track-img" />
            <div className="track-overlay">
              <button className="track-play-icon"><Play size={24} fill="currentColor" /></button>
            </div>
          </div>
          <div className="track-info">
            <div className="track-title-row">
              <span className="track-rank">{index + 1}. </span>
              <span className="track-name">{track.name}</span>
            </div>
            <span className="track-artist">{track.artists.map(a => a.name).join(', ')}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopTracksGrid;
