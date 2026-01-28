import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, ArrowLeft, Clock, Heart, MoreHorizontal, Pause } from 'lucide-react';
import { getAlbumById, formatDuration } from '../data/spotifyMockData';
import { useSpotifyData } from '../contexts/SpotifyDataContext';
import './AlbumPage.css';

const AlbumPage = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const { currentTrack, isPlaying, playTrack, pauseTrack } = useSpotifyData();
  const [hoveredRow, setHoveredRow] = useState(null);

  useEffect(() => {
    const albumData = getAlbumById(id);
    setAlbum(albumData);
    window.scrollTo(0, 0);
  }, [id]);

  if (!album) {
    return <div className="loading-state">Loading album...</div>;
  }

  const handlePlayClick = (e, track) => {
    e.preventDefault();
    if (currentTrack?.id === track.id && isPlaying) {
      pauseTrack();
    } else {
      // Add album context to track object for playback
      const trackWithContext = {
        ...track,
        album: {
          id: album.id,
          name: album.name,
          images: album.images
        },
        artists: [album.artist]
      };
      playTrack(trackWithContext);
    }
  };

  const totalDurationMs = album.tracks.reduce((acc, track) => acc + track.duration_ms, 0);
  const totalDurationFormatted = () => {
    const totalMinutes = Math.floor(totalDurationMs / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    
    if (hours > 0) return `${hours} hr ${minutes} min`;
    return `${minutes} min`;
  };

  return (
    <div className="album-page">
      <div className="album-header">
        <Link to="/" className="back-button">
          <ArrowLeft size={24} />
        </Link>
        <div className="album-header-content">
          <div className="album-cover-container">
            <img src={album.images[0].url} alt={album.name} className="album-cover-image" />
          </div>
          <div className="album-details">
            <span className="album-type">Album</span>
            <h1 className="album-title-large">{album.name}</h1>
            <div className="album-meta-row">
              <div className="artist-info-mini">
                {/* Fallback image for artist */}
                <div className="artist-icon-fallback">{album.artist.name[0]}</div>
                <Link to={`/artist/${album.artist.id}`} className="artist-link-bold">{album.artist.name}</Link>
              </div>
              <span className="dot-separator">•</span>
              <span className="release-year">{new Date(album.release_date).getFullYear()}</span>
              <span className="dot-separator">•</span>
              <span className="track-count">{album.total_tracks} songs,</span>
              <span className="album-duration">{totalDurationFormatted()}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="album-content">
        <div className="album-actions-bar">
          <button className="play-button-large">
            <Play size={28} fill="black" />
          </button>
          <button className="action-icon-btn"><Heart size={32} /></button>
          <button className="action-icon-btn"><MoreHorizontal size={32} /></button>
        </div>

        <div className="tracks-list-container">
          <div className="tracks-header-row">
            <div className="col-num">#</div>
            <div className="col-title">Title</div>
            <div className="col-time"><Clock size={16} /></div>
          </div>
          
          <div className="tracks-list">
            {album.tracks.map((track, index) => {
              const isCurrentTrack = currentTrack?.id === track.id;
              const isTrackPlaying = isCurrentTrack && isPlaying;
              const isHovered = hoveredRow === index;

              return (
                <div 
                  key={track.id} 
                  className={`track-list-row ${isCurrentTrack ? 'playing' : ''}`}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <div className="col-num">
                    {isHovered || isCurrentTrack ? (
                      <button className="row-play-btn" onClick={(e) => handlePlayClick(e, track)}>
                        {isTrackPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
                      </button>
                    ) : (
                      <span className={isCurrentTrack ? 'text-green' : 'num'}>{index + 1}</span>
                    )}
                  </div>
                  <div className="col-title">
                    <span className={`track-name ${isCurrentTrack ? 'text-green' : ''}`}>{track.name}</span>
                    <span className="track-artist-sub">{album.artist.name}</span>
                  </div>
                  <div className="col-time">{formatDuration(track.duration_ms)}</div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="copyright-section">
          <p className="copyright-text">© {new Date(album.release_date).getFullYear()} {album.label}</p>
          <p className="copyright-text">℗ {new Date(album.release_date).getFullYear()} {album.label}</p>
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;