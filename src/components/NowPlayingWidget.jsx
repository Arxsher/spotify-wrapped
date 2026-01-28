import React from 'react';
import { Play, Pause, Music } from 'lucide-react';
import './NowPlayingWidget.css';

const NowPlayingWidget = ({ track, isPlaying }) => {
  if (!track) return null;

  const artistName = track.artists.map(a => a.name).join(', ');
  const albumImage = track.album.images[0]?.url;

  return (
    <div className="now-playing-widget">
      <div className="np-image-container">
        <img src={albumImage} alt={track.album.name} className="np-album-art" />
      </div>
      
      <div className="np-content">
        <div className="np-header">
          <span className="np-label">NOW PLAYING</span>
          <Music size={16} className="np-icon" />
        </div>
        
        <div className="np-track-info">
          <h3 className="np-track-name">{track.name}</h3>
          <p className="np-artist-name">{artistName}</p>
        </div>

        <button className="np-play-button">
          {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
          <span>{isPlaying ? 'Pause' : 'Play'}</span>
        </button>
      </div>
    </div>
  );
};

export default NowPlayingWidget;
