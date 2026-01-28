import React from 'react';
import { useSpotifyData } from '../contexts/SpotifyDataContext';
import './AudioFeaturesChart.css';

const AudioFeaturesChart = () => {
  const { audioFeatures } = useSpotifyData();

  const features = [
    { key: 'danceability', label: 'Danceability', value: audioFeatures.danceability, color: '#1DB954' },
    { key: 'energy', label: 'Energy', value: audioFeatures.energy, color: '#1ed760' },
    { key: 'valence', label: 'Happiness', value: audioFeatures.valence, color: '#169c46' },
    { key: 'acousticness', label: 'Acousticness', value: audioFeatures.acousticness, color: '#14833c' },
    { key: 'instrumentalness', label: 'Instrumental', value: audioFeatures.instrumentalness, color: '#0d5c2a' },
    { key: 'liveness', label: 'Liveness', value: audioFeatures.liveness, color: '#0a471f' }
  ];

  const getDescription = () => {
    const traits = [];
    if (audioFeatures.energy > 0.6) traits.push('energetic');
    if (audioFeatures.danceability > 0.6) traits.push('danceable');
    if (audioFeatures.valence > 0.5) traits.push('upbeat');
    if (audioFeatures.acousticness > 0.4) traits.push('acoustic');
    if (traits.length === 0) return 'Your music taste is balanced and diverse.';
    return `Your music tends to be ${traits.slice(0, -1).join(', ')}${traits.length > 1 ? ' and ' : ''}${traits.slice(-1)}.`;
  };

  return (
    <div className="audio-features">
      <p className="audio-description">{getDescription()}</p>
      <div className="features-list">
        {features.map((feature) => (
          <div key={feature.key} className="feature-item">
            <div className="feature-header">
              <span className="feature-label">{feature.label}</span>
              <span className="feature-value">{Math.round(feature.value * 100)}%</span>
            </div>
            <div className="feature-bar">
              <div className="feature-fill" style={{ width: `${feature.value * 100}%`, backgroundColor: feature.color }} />
            </div>
          </div>
        ))}
      </div>
      <div className="tempo-section">
        <div className="tempo-label">Average Tempo</div>
        <div className="tempo-value">
          <span className="tempo-number">{Math.round(audioFeatures.tempo)}</span>
          <span className="tempo-unit">BPM</span>
        </div>
      </div>
    </div>
  );
};

export default AudioFeaturesChart;
