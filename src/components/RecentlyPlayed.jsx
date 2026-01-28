import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Clock, Heart } from 'lucide-react';
import { useSpotifyData } from '../contexts/SpotifyDataContext';
import { formatDuration, getRelativeTime } from '../data/spotifyMockData';
import './RecentlyPlayed.css';

const RecentlyPlayed = ({ limit = 10 }) => {
  const { recentlyPlayed, currentTrack, isPlaying, playTrack, pauseTrack } = useSpotifyData();
  const [hoveredRow, setHoveredRow] = useState(null);
  const displayTracks = limit ? recentlyPlayed.slice(0, limit) : recentlyPlayed;

  const handlePlayClick = (e, track) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentTrack?.id === track.id && isPlaying) {
      pauseTrack();
    } else {
      playTrack(track);
    }
  };

  return (
    <div className="recent-list-container">
      <table className="recent-table">
        <thead>
          <tr>
            <th className="th-num">#</th>
            <th className="th-title">Title</th>
            <th className="th-time"><Clock size={16} /></th>
          </tr>
        </thead>
        <tbody>
          {displayTracks.map((item, index) => {
            const track = item.track;
            const isCurrentTrack = currentTrack?.id === track.id;
            const isTrackPlaying = isCurrentTrack && isPlaying;
            const isHovered = hoveredRow === index;

            return (
              <tr 
                key={`${track.id}-${index}`}
                className={`recent-row ${isCurrentTrack ? 'playing' : ''}`}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td className="td-num">
                  {isHovered || isCurrentTrack ? (
                    <button className="recent-play-btn" onClick={(e) => handlePlayClick(e, track)}>
                      {isTrackPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
                    </button>
                  ) : (
                    <span className={isCurrentTrack ? 'text-primary' : 'num-text'}>{index + 1}</span>
                  )}
                </td>
                <td className="td-title">
                  <Link to={`/track/${track.id}`} className="recent-track-info">
                    <img src={track.album.images[0]?.url} alt={track.album.name} className="recent-thumb" />
                    <div className="recent-track-details">
                      <span className={`recent-track-name ${isCurrentTrack ? 'text-primary' : ''}`}>
                        {track.name}
                      </span>
                      <span className="recent-track-artist">
                        {track.explicit && <span className="explicit-tag">E</span>}
                        {track.artists.map(a => a.name).join(', ')}
                      </span>
                    </div>
                  </Link>
                </td>
                <td className="td-time">{formatDuration(track.duration_ms)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RecentlyPlayed;
