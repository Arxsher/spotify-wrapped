import React from 'react';
import { 
  Search, 
  Bell, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  User
} from 'lucide-react';
import { useSpotifyData } from '../contexts/SpotifyDataContext';
import './Header.css';

const Header = () => {
  const { 
    user, 
    currentTrack, 
    isPlaying, 
    togglePlay, 
    nextTrack, 
    previousTrack,
    timeRange,
    setTimeRange
  } = useSpotifyData();

  const timeRangeOptions = [
    { value: 'short_term', label: 'Last 4 Weeks' },
    { value: 'medium_term', label: 'Last 6 Months' },
    { value: 'long_term', label: 'All Time' }
  ];

  return (
    <header className="header">
      <div className="header-left">
        <div className="nav-arrows">
          <button className="nav-arrow-btn"><ChevronLeft size={22} /></button>
          <button className="nav-arrow-btn"><ChevronRight size={22} /></button>
        </div>
        <div className="search-bar">
          <Search size={20} className="search-icon" />
          <input type="text" placeholder="Search for songs, artists, or albums" className="search-input" />
        </div>
      </div>

      <div className="header-center">
        {currentTrack && (
          <div className="now-playing">
            <img src={currentTrack.album.images[0]?.url} alt={currentTrack.album.name} className="now-playing-image" />
            <div className="now-playing-info">
              <span className="now-playing-title">{currentTrack.name}</span>
              <span className="now-playing-artist">{currentTrack.artists.map(a => a.name).join(', ')}</span>
            </div>
            <div className="playback-controls">
              <button className="control-btn" onClick={previousTrack}><SkipBack size={18} fill="currentColor" /></button>
              <button className="control-btn play-btn" onClick={togglePlay}>
                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
              </button>
              <button className="control-btn" onClick={nextTrack}><SkipForward size={18} fill="currentColor" /></button>
            </div>
          </div>
        )}
      </div>

      <div className="header-right">
        <div className="time-range-selector">
          <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)} className="time-range-select">
            {timeRangeOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <ChevronDown size={14} className="select-chevron" />
        </div>
        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>
        <div className="user-profile">
          {user.images?.[0]?.url ? (
            <img src={user.images[0].url} alt={user.display_name} className="avatar" />
          ) : (
            <div className="avatar avatar-placeholder"><User size={16} /></div>
          )}
          <span className="user-name">{user.display_name}</span>
          <ChevronDown size={16} className="profile-chevron" />
        </div>
      </div>
    </header>
  );
};

export default Header;
