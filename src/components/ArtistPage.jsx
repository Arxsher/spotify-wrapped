import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, ArrowLeft, Users, Music, Disc } from 'lucide-react';
import { getArtistById, getArtistTopTracks, getAlbumsByArtistId, formatNumber } from '../data/spotifyMockData';
import { useSpotifyData } from '../contexts/SpotifyDataContext';
import './ArtistPage.css';

const ArtistPage = () => {
  const { id } = useParams();
  const { apiFetch, authenticated } = useSpotifyData();
  const [artist, setArtist] = useState(null);
  const [topTracks, setTopTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (authenticated) {
          const [artistData, tracksData, albumsData] = await Promise.all([
            apiFetch(`artists/${id}`),
            apiFetch(`artists/${id}/top-tracks?market=from_token`),
            apiFetch(`artists/${id}/albums?include_groups=album,single&limit=50`)
          ]);
          
          setArtist(artistData);
          setTopTracks(tracksData.tracks || []);
          setAlbums(albumsData.items || []);
        } else {
          // Fallback to mock
          setArtist(getArtistById(id));
          setTopTracks(getArtistTopTracks(id));
          setAlbums(getAlbumsByArtistId(id));
        }
      } catch (err) {
        console.error('Error fetching artist details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [id, authenticated, apiFetch]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading artist...</p>
      </div>
    );
  }

  if (!artist) {
    return <div className="error-state">Artist not found</div>;
  }

  const followersCount = artist.followers?.total || artist.followers || 0;
  const monthlyListeners = artist.monthly_listeners || (followersCount * 1.5); // Estimate if not available

  return (
    <div className="artist-page">
      <div className="artist-header">
        <Link to="/" className="back-button">
          <ArrowLeft size={24} />
        </Link>
        <div className="artist-header-content">
          <div className="artist-image-container">
            <img src={artist.images?.[0]?.url} alt={artist.name} className="artist-hero-image" />
          </div>
          <div className="artist-details">
            <span className="verified-badge">Verified Artist</span>
            <h1 className="artist-name-large">{artist.name}</h1>
            <div className="artist-stats">
              <span className="stat-item">
                <Users size={16} />
                {formatNumber(followersCount)} followers
              </span>
              <span className="dot-separator">•</span>
              <span className="stat-item">
                <Music size={16} />
                {formatNumber(monthlyListeners)} monthly listeners
              </span>
            </div>
            <div className="artist-actions">
              <button className="play-button-large">
                <Play size={28} fill="black" />
              </button>
              <button className="follow-button">Follow</button>
            </div>
          </div>
        </div>
      </div>

      <div className="artist-content">
        <section className="artist-section">
          <h2 className="section-title">Popular</h2>
          <div className="popular-tracks-list">
            {topTracks.length > 0 ? (
              topTracks.map((track, index) => (
                <div key={track.id} className="popular-track-row">
                  <span className="track-index">{index + 1}</span>
                  <img src={track.album?.images?.[0]?.url} className="track-mini-img" alt="" />
                  <span className="track-title-simple">{track.name}</span>
                  <span className="track-plays">{formatNumber(track.plays || track.popularity * 1000000)} plays</span>
                </div>
              ))
            ) : (
              <p className="no-data">No popular tracks available</p>
            )}
          </div>
        </section>

        <section className="artist-section">
          <h2 className="section-title">Discography</h2>
          <div className="albums-grid">
            {albums.map(album => (
              <Link to={`/album/${album.id}`} key={album.id} className="album-card">
                <div className="album-image-wrapper">
                  <img src={album.images?.[0]?.url} alt={album.name} className="album-image" />
                  <div className="play-overlay">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>
                <div className="album-info">
                  <h3 className="album-name">{album.name}</h3>
                  <div className="album-meta">
                    <span>{new Date(album.release_date).getFullYear()}</span>
                    <span className="dot-separator">•</span>
                    <span>{album.album_type || 'Album'}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ArtistPage;
