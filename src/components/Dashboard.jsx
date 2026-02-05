import React, { useState } from 'react';
import { 
  Clock, 
  TrendingUp, 
  Music, 
  Headphones,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { useSpotifyData } from '../contexts/SpotifyDataContext';
import TracksTable from './TracksTable';
import TopTracksGrid from './TopTracksGrid';
import TopArtistsGrid from './TopArtistsGrid';
import GenreBreakdown from './GenreBreakdown';
import MonthlyListeningTrends from './MonthlyListeningTrends';
import RecentlyPlayed from './RecentlyPlayed';
import NowPlayingWidget from './NowPlayingWidget';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { 
    user, 
    listeningStats, 
    genreDistribution,
    timeRangeLabel,
    monthlyTrend,
    currentTrack,
    recentlyPlayed,
    isPlaying,
    authenticated,
    login,
    loading
  } = useSpotifyData();

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'top_artists', label: 'Top Artists' },
    { id: 'top_tracks', label: 'Top Tracks' },
    { id: 'recently_played', label: 'Recently Played' }
  ];

  const topGenre = genreDistribution[0];
  const currentMonth = monthlyTrend[monthlyTrend.length - 1];
  const previousMonth = monthlyTrend[monthlyTrend.length - 2];
  const monthlyChange = ((currentMonth.minutes - previousMonth.minutes) / previousMonth.minutes * 100).toFixed(1);

  const displayTrack = currentTrack || (recentlyPlayed.length > 0 ? (recentlyPlayed[0].track || recentlyPlayed[0]) : null);
  const displayIsPlaying = currentTrack ? isPlaying : false;

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Syncing your music world...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Login CTA for unauthenticated users */}
      {!authenticated && (
        <div className="login-banner fade-in">
          <div className="login-banner-content">
            <Sparkles className="login-banner-icon" />
            <div className="login-banner-text">
              <h3>Real-time insights are waiting</h3>
              <p>Connect your Spotify account to see your actual top tracks, artists, and listening trends.</p>
            </div>
          </div>
          <button className="login-banner-btn" onClick={login}>Connect Now</button>
        </div>
      )}

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-banner">
          <div className="profile-header-content">
            <div className="profile-left">
              <div className="profile-image-container">
                <img 
                  src={user.images?.[0]?.url || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=256&h=256&fit=crop'} 
                  alt={user.display_name} 
                  className="profile-image"
                />
              </div>
              <div className="profile-info">
                <span className="profile-label">Profile</span>
                <h1 className="profile-name">{user.display_name}.</h1>
                <div className="profile-stats">
                  <span className="stats-dot">•</span>
                  <span className="stats-text">{user.followers?.total || user.followers || 0} Followers</span>
                </div>
              </div>
            </div>
            
            <div className="profile-right">
              <NowPlayingWidget track={displayTrack} isPlaying={displayIsPlaying} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="stats-section">
        <div className="stats-grid">
          {/* Streams Card */}
          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-value">{listeningStats.totalTracksPlayed.toLocaleString()}</span>
              <span className="stat-trend positive">+{listeningStats.percentageChange}%</span>
            </div>
            <span className="stat-label">Streams</span>
          </div>

          {/* Minutes Streamed Card */}
          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-value">{listeningStats.totalMinutesThisMonth.toLocaleString()}</span>
              <span className="stat-trend positive">{monthlyChange > 0 ? '+' : ''}{monthlyChange}%</span>
            </div>
            <span className="stat-label">Minutes Streamed</span>
          </div>

          {/* Different Artists Card */}
          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-value">{listeningStats.uniqueArtists.toLocaleString()}</span>
              <span className="stat-trend positive">+12%</span>
            </div>
            <span className="stat-label">Different Artists</span>
          </div>

          {/* New Discoveries Card */}
          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-value">{listeningStats.newDiscoveriesThisMonth}</span>
              <span className="stat-trend positive">+5%</span>
            </div>
            <span className="stat-label">New Discoveries</span>
          </div>
        </div>
      </section>

      {/* View Selector */}
      <div className="view-selector">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`view-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content Grid */}
      {activeTab === 'overview' && (
        <div className="content-grid">
          {/* Left Column */}
          <div className="content-column left-column">
            {/* Top Artists Section */}
            <section className="dashboard-section">
              <div className="section-header">
                <h2 className="section-title">Top Artists</h2>
                <button className="section-link" onClick={() => setActiveTab('top_artists')}>
                  See all <ArrowUpRight size={16} />
                </button>
              </div>
              <TopArtistsGrid limit={10} />
            </section>

            {/* Top Tracks Table */}
            <section className="dashboard-section">
              <div className="section-header">
                <h2 className="section-title">Top Tracks</h2>
                <button className="section-link" onClick={() => setActiveTab('top_tracks')}>
                  See all <ArrowUpRight size={16} />
                </button>
              </div>
              <TopTracksGrid limit={7} />
            </section>

            {/* Genre Breakdown */}
            <section className="dashboard-section">
              <div className="section-header">
                <h2 className="section-title">Genres</h2>
              </div>
              <GenreBreakdown />
            </section>
          </div>

          {/* Right Column */}
          <div className="content-column right-column">
            {/* Recently Played */}
            <section className="dashboard-section">
              <div className="section-header">
                <h2 className="section-title">Recently Played</h2>
                <button className="section-link" onClick={() => setActiveTab('recently_played')}>
                  See all <ArrowUpRight size={16} />
                </button>
              </div>
              <RecentlyPlayed limit={6} />
            </section>

            {/* Monthly Trends */}
            <section className="dashboard-section">
              <div className="section-header">
                <h2 className="section-title">Listening Activity</h2>
              </div>
              <MonthlyListeningTrends />
            </section>
          </div>
        </div>
      )}

      {activeTab === 'top_artists' && (
        <section className="dashboard-section full-width">
          <div className="section-header">
            <h2 className="section-title">Top Artists</h2>
          </div>
          <TopArtistsGrid limit={50} />
        </section>
      )}

      {activeTab === 'top_tracks' && (
        <section className="dashboard-section full-width">
          <div className="section-header">
            <h2 className="section-title">Top Tracks</h2>
          </div>
          <TopTracksGrid limit={50} />
        </section>
      )}

      {activeTab === 'recently_played' && (
        <section className="dashboard-section full-width">
          <div className="section-header">
            <h2 className="section-title">Recently Played History</h2>
          </div>
          <RecentlyPlayed limit={50} />
        </section>
      )}
    </div>
  );
};

export default Dashboard;
