import React from 'react';
import { Link } from 'react-router-dom';
import { Play, User } from 'lucide-react';
import { useSpotifyData } from '../contexts/SpotifyDataContext';
import { formatNumber } from '../data/spotifyMockData';
import './TopArtistsGrid.css';

const TopArtistsGrid = ({ limit = 6 }) => {
  const { topArtists } = useSpotifyData();
  const displayArtists = limit ? topArtists.slice(0, limit) : topArtists;

  return (
    <div className="artists-grid">
      {displayArtists.map((artist, index) => (
        <Link to={`/artist/${artist.id}`} key={artist.id} className="artist-item">
          <div className="artist-image-wrapper">
            {artist.images?.[0]?.url ? (
              <img src={artist.images[0].url} alt={artist.name} className="artist-img" />
            ) : (
              <div className="artist-placeholder"><User size={32} /></div>
            )}
            <div className="artist-overlay">
              <button className="artist-play-icon"><Play size={24} fill="currentColor" /></button>
            </div>
          </div>
           <div className="artist-label">
             <span className="artist-rank-text">{index + 1}.</span>
             <div className="artist-info">
               <span className="artist-name-text">{artist.name}</span>
               <span className="artist-stats-text">{formatNumber(artist.followers)} followers</span>
             </div>
           </div>
        </Link>
      ))}
    </div>
  );
};

export default TopArtistsGrid;
