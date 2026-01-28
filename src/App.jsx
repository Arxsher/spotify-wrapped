import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SpotifyDataProvider } from './contexts/SpotifyDataContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ArtistPage from './components/ArtistPage';
import TrackPage from './components/TrackPage';
import AlbumPage from './components/AlbumPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <SpotifyDataProvider>
        <div className="app-container">
          <Sidebar />
          <main className="main-content">
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/artist/:id" element={<ArtistPage />} />
              <Route path="/track/:id" element={<TrackPage />} />
              <Route path="/album/:id" element={<AlbumPage />} />
            </Routes>
          </main>
        </div>
      </SpotifyDataProvider>
    </BrowserRouter>
  );
}

export default App;