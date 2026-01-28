import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Heart, MoreHorizontal, Clock } from 'lucide-react';
import { useSpotifyData } from '../contexts/SpotifyDataContext';
import { formatDuration } from '../data/spotifyMockData';
import './TracksTable.css';

const TracksTable = ({ limit = 10 }) => {
  const { topTracks, currentTrack, isPlaying, playTrack, pauseTrack } = useSpotifyData();
  const [hoveredRow, setHoveredRow] = useState(null);
  const [likedTracks, setLikedTracks] = useState(new Set(['t1', 't3', 't5', 't7']));

  const toggleLike = (e, trackId) => {
    e.preventDefault();
    e.stopPropagation();
    const newLiked = new Set(likedTracks);
    if (newLiked.has(trackId)) {
      newLiked.delete(trackId);
    } else {
      newLiked.add(trackId);
    }
    setLikedTracks(newLiked);
  };

  const handlePlayClick = (e, track) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentTrack?.id === track.id && isPlaying) {
      pauseTrack();
    } else {
      playTrack(track);
    }
  };

  const displayTracks = limit ? topTracks.slice(0, limit) : topTracks;

  return (
    <div className="tracks-table-container">
      <table className="tracks-table">
        <thead>
          <tr>
            <th className="th-number">#</th>
            <th className="th-title">TITLE</th>
            <th className="th-album">ALBUM</th>
            <th className="th-plays">PLAYS</th>
            <th className="th-duration"><Clock size={16} /></th>
          </tr>
        </thead>
        <tbody>
          {displayTracks.map((track, index) => {
            const isCurrentTrack = currentTrack?.id === track.id;
            const isTrackPlaying = isCurrentTrack && isPlaying;
            const isHovered = hoveredRow === track.id;
            const isLiked = likedTracks.has(track.id);

            return (
              <tr 
                key={track.id}
                className={`track-row ${isCurrentTrack ? 'playing' : ''}`}
                onMouseEnter={() => setHoveredRow(track.id)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td className="td-number">
                  {isHovered || isCurrentTrack ? (
                    <button className="play-btn" onClick={(e) => handlePlayClick(e, track)}>
                      {isTrackPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
                    </button>
                  ) : (
                    <span className={isCurrentTrack ? 'text-primary' : ''}>{index + 1}</span>
                  )}
                </td>
                <td className="td-title">
                  <Link to={`/track/${track.id}`} className="track-info">
                    <img src={track.album.images[0]?.url} alt={track.album.name} className="track-image" />
                    <div className="track-details">
                      <span className={`track-name ${isCurrentTrack ? 'text-primary' : ''}`}>{track.name}</span>
                      <span className="track-artist">
                        {track.explicit && <span className="explicit-badge">E</span>}
                        {track.artists.map(a => a.name).join(', ')}
                      </span>
                    </div>
                  </Link>
                </td>
                <td className="td-album">
                  <Link to={`/album/${track.album.id}`} className="album-link">{track.album.name}</Link>
                </td>
                <td className="td-plays">{track.played_count.toLocaleString()}</td>
                <td className="td-duration">
                  <div className="duration-cell">
                    <button className={`like-btn ${isLiked ? 'liked' : ''}`} onClick={(e) => toggleLike(e, track.id)}>
                      <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
                    </button>
                    <span className="duration-text">{formatDuration(track.duration_ms)}</span>
                    <button className="more-btn"><MoreHorizontal size={16} /></button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TracksTable;
