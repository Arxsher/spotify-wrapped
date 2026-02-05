import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Mic2,
  ListMusic, 
  Plus, 
  Sparkles,
  Gift,
  Music
} from 'lucide-react';
import { useSpotifyData } from '../contexts/SpotifyDataContext';
import './Sidebar.css';

const HistoryItem = ({ item }) => {
  const [imgError, setImgError] = useState(false);
  // Support both mock and real API structure
  const track = item.track || item;
  const imageUrl = track.album?.images?.[0]?.url;

  return (
    <Link to={`/track/${track.id}`} className="history-item">
      {imageUrl && !imgError ? (
        <img 
          src={imageUrl} 
          alt={track.name} 
          className="history-img"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="history-img-placeholder">
          <Music size={24} color="#b3b3b3" />
        </div>
      )}
      <div className="history-info">
        <span className="history-name">{track.name}</span>
        <span className="history-artist">{track.artists?.[0]?.name}</span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const { recentlyPlayed, authenticated } = useSpotifyData();
  
  // Filter and limit history
  const recentHistory = recentlyPlayed
    .filter(item => {
      const track = item.track || item;
      return track.name !== 'Levitating';
    })
    .slice(0, 4);

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Link to="/" className="logo-container">
          <img src="/logo.png" alt="tune.fm" className="app-logo" />
          <span className="logo-text">tune.fm</span>
        </Link>
      </div>

      <div className="sidebar-nav-block">
        <Link to="/" className="nav-item active">
          <Home size={24} />
          <span>Home</span>
        </Link>
        <Link to="/" className="nav-item">
          <Mic2 size={24} />
          <span>Lyrics</span>
        </Link>
      </div>

      <div className="sidebar-library-block">
        <div className="library-header">
          <span className="library-title">{authenticated ? 'Your History' : 'Recent Mix'}</span>
          <button className="library-show-more-btn">
            Show more
          </button>
        </div>

        <div className="history-list">
          {recentHistory.length > 0 ? (
            recentHistory.map((item, index) => (
              <HistoryItem key={`${(item.track || item).id}-${index}`} item={item} />
            ))
          ) : (
            <div className="empty-history">
              <p>No history yet.</p>
            </div>
          )}
        </div>
      </div>

      <div className="sidebar-actions-block">
        <div className="action-item">
          <div className="action-icon-container">
            <ListMusic size={18} />
          </div>
          <span className="action-text">Create Playlist</span>
        </div>
        <div className="action-item">
          <div className="action-icon-container special">
            <Sparkles size={18} />
          </div>
          <span className="action-text">AI Recommendations</span>
        </div>
      </div>

      <div className="sidebar-wrapped-card">
        <div className="wrapped-icon-container">
          <Gift size={16} color="#fff" />
        </div>
        <div className="wrapped-content">
          <h3 className="wrapped-title">Wrapped Stats</h3>
          <p className="wrapped-subtitle">Unwrap your music journey with insights just for you.</p>
          <button className="wrapped-link">View Now</button>
        </div>
        <div className="wrapped-glow"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
