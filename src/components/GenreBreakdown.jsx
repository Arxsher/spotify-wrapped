import React from 'react';
import { useSpotifyData } from '../contexts/SpotifyDataContext';
import './GenreBreakdown.css';

const GenreBreakdown = () => {
  const { genreDistribution, audioFeatures } = useSpotifyData();
  const topGenre = genreDistribution[0];
  const displayGenres = genreDistribution.slice(0, 5);

  return (
    <div className="genre-breakdown-container">
      <div className="genre-left-column">
        <div className="genre-header-text">
          Your top genre is <span className="highlight-text">{topGenre.genre.toLowerCase()}</span>, appearing in <span className="highlight-text">69</span> of your artists
        </div>

        <div className="genre-bars-list">
          {displayGenres.map((genre) => (
            <div key={genre.genre} className="genre-bar-item">
              <div className="genre-bar-fill" style={{ width: `${genre.percentage * 2}%` }}>
                <span className="genre-bar-label">{genre.genre.toLowerCase()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="genre-stats-cards">
        <div className="genre-stat-card">
          <div className="stat-card-value">{Math.round(audioFeatures.energy * 100)}%</div>
          <div className="stat-card-desc">of your tracks are energetic</div>
        </div>
        <div className="genre-stat-card">
          <div className="stat-card-value">{Math.round(audioFeatures.danceability * 100)}%</div>
          <div className="stat-card-desc">of your tracks are danceable</div>
        </div>
        <div className="genre-stat-card">
          <div className="stat-card-value">{Math.round(audioFeatures.liveness * 100)}%</div>
          <div className="stat-card-desc">of your tracks are lively</div>
        </div>
      </div>
    </div>
  );
};

export default GenreBreakdown;
