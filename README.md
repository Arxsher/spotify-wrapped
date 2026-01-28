# Spotify Analytics App

A modern web application that provides comprehensive analytics and insights into your Spotify listening habits. Built with React 19 and Vite, this app visualizes your top tracks, artists, genres, and listening trends with an elegant, Spotify-inspired interface.

## Features

- **User Profile Dashboard**: View your Spotify profile information with a personalized welcome greeting
- **Listening Statistics**: Track your streams, minutes listened, unique artists discovered, and new discoveries
- **Top Artists**: Browse your most-played artists with visual grid layout
- **Top Tracks**: Explore your favorite tracks with detailed performance metrics
- **Genre Breakdown**: Visualize your music preferences by genre
- **Monthly Listening Trends**: See how your listening habits change over time with interactive charts
- **Recently Played**: View your recently played tracks with full history
- **Now Playing Widget**: See what track you're currently listening to (when available)
- **Responsive Design**: Beautiful dark-themed interface that works seamlessly on all screen sizes

## Tech Stack

- **Framework**: React 19 with Vite build system
- **Language**: JavaScript (ES2020+) with JSX
- **Styling**: CSS modules with CSS variables for consistent theming
- **State Management**: React Context API
- **Icons**: Lucide React
- **Build Tool**: Vite for fast development and optimized production builds

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd spotify
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

## Available Scripts

### Development
```bash
npm run dev          # Start development server with hot reload
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint to check code quality
```

## Project Structure

```
src/
├── components/              # UI components
│   ├── Dashboard.jsx        # Main dashboard view
│   ├── Header.jsx           # Top navigation header
│   ├── Sidebar.jsx          # Left sidebar navigation
│   ├── TopArtistsGrid.jsx   # Grid of top artists
│   ├── TopTracksGrid.jsx    # Grid of top tracks
│   ├── TracksTable.jsx      # Detailed tracks table
│   ├── GenreBreakdown.jsx   # Genre distribution visualization
│   ├── MonthlyListeningTrends.jsx  # Listening activity chart
│   ├── RecentlyPlayed.jsx   # Recently played tracks list
│   ├── NowPlayingWidget.jsx # Current playing track display
│   ├── AudioFeaturesChart.jsx # Audio features visualization
│   └── *.css                # Component-specific styles
├── contexts/                # React Context providers
│   └── SpotifyDataContext.jsx # Global state management
├── data/                    # Mock data and utilities
├── assets/                  # Static images and icons
├── App.jsx                  # Root app component
├── App.css                  # App-level styles
├── index.css                # Global styles and CSS variables
└── main.jsx                 # Application entry point
```

## Dashboard Views

The dashboard includes multiple interactive views:

1. **Overview Tab**: Get a quick summary of your listening stats with key metrics and visualizations
2. **Top Artists Tab**: Full list of your most-played artists
3. **Top Tracks Tab**: Complete view of your top tracks with rankings and metrics
4. **Recently Played Tab**: Browse your listening history

## Styling

The app uses CSS modules with predefined CSS variables for consistent theming. All colors, spacing, and transitions follow Spotify's design language:

- **Primary Color**: Spotify Green (#1db954)
- **Background**: Dark theme (#000000)
- **Cards**: Elevated surfaces (#121212)
- **Text**: White on dark backgrounds with secondary text in gray

## State Management

The app uses React Context API for global state management through the `SpotifyDataContext`. This provides:
- User profile information
- Listening statistics
- Top artists and tracks
- Genre distribution
- Monthly trends
- Recently played tracks
- Current playback status

## Code Guidelines

This project follows the guidelines in `AGENTS.md` for:
- Consistent code style and formatting
- Component architecture patterns
- Import organization
- Naming conventions
- Git workflow

See `AGENTS.md` for complete development guidelines.

## Development Tips

- **Hot Reload**: Changes to components automatically refresh in the browser
- **CSS Variables**: Modify `src/index.css` to update app colors and spacing globally
- **Mock Data**: The app uses mock data from `src/data/` for development
- **ESLint**: Run `npm run lint` to check code quality before committing

## Future Enhancements

- Connect to Spotify Web API for real user data
- Add user authentication via Spotify OAuth
- Implement data export features (CSV, JSON)
- Add more detailed audio feature analysis
- Create shareable listening statistics snapshots
- Add testing framework (Vitest + React Testing Library)
- Implement TypeScript for type safety

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Modern mobile browsers

## Performance

- Fast development server with Vite HMR
- Optimized production builds with code splitting
- CSS modules prevent style conflicts
- Efficient React rendering with proper key props

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will use the next available port. Check the terminal output for the correct URL.

### Styles Not Applied
Clear your browser cache or run `npm run build && npm run preview` to test production styles.

### Hot Reload Not Working
Restart the development server with `npm run dev`.

## License

This project is provided as-is for educational and personal use.

## Contributing

When contributing to this project, please:
1. Follow the code style guidelines in `AGENTS.md`
2. Use meaningful commit messages with conventional commit format
3. Test your changes locally before submitting
4. Keep components focused and reusable

## Support

For issues or questions about the app, check the existing documentation or review the component code for implementation details.