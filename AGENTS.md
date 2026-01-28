# Agent Guidelines for Spotify Analytics App

This document provides comprehensive guidelines for agentic coding assistants working on the Spotify Analytics application. Follow these conventions to maintain code quality, consistency, and best practices.

## Build/Test Commands

### Development & Build
```bash
npm run dev          # Start development server with hot reload (Vite)
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint on all files
```

### Testing
**Current Status**: No test framework is configured. Runtime testing is done via `npm run dev`.

**Recommended Test Setup** (when implementing):
```bash
# Install testing framework
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom

# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run a single test file
npm run test -- src/components/Dashboard.test.jsx

# Run tests for a specific component
npm run test -- --grep "Dashboard"
```

### Linting & Code Quality
```bash
# Lint all files
npm run lint

# Lint and auto-fix (if configured)
npm run lint:fix
```

## Code Style Guidelines

### Project Architecture
- **Framework**: React 19 with Vite build system
- **Language**: JavaScript (ES2020+) with JSX
- **Styling**: CSS modules with CSS variables for theming
- **State Management**: React Context API (no external libraries)
- **Icons**: Lucide React (preferred over custom SVGs)

### Imports & Dependencies

#### Import Order
```jsx
// 1. React imports first
import React, { useState, useEffect } from 'react';

// 2. Third-party libraries
import { Play, Pause } from 'lucide-react';

// 3. Local imports (contexts, components, utils)
import { useSpotifyData } from '../contexts/SpotifyDataContext';
import TracksTable from './TracksTable';

// 4. CSS imports last
import './Dashboard.css';
```

#### Import Patterns
- **Explicit React import**: Always include `import React from 'react';` for JSX
- **Icon imports**: Import specific icons: `import { Play, Heart } from 'lucide-react';`
- **Relative paths**: Use relative imports for local files (`./`, `../`)
- **No wildcard imports**: Avoid `import * as Utils from './utils';`
- **Named exports**: Use named exports for utilities and hooks

### Component Structure

#### Function Components
```jsx
const Dashboard = ({ user, stats }) => {
  // 1. Hooks at the top
  const { user, stats } = useSpotifyData();
  const [activeTab, setActiveTab] = useState('overview');

  // 2. Helper functions
  const formatMinutes = (mins) => mins / 60;

  // 3. Event handlers
  const handleTabChange = (tab) => setActiveTab(tab);

  // 4. Effects
  useEffect(() => {
    // Side effects
  }, []);

  // 5. JSX return
  return (
    <div className="dashboard">
      {/* JSX content */}
    </div>
  );
};

export default Dashboard;
```

#### Component Patterns
- **Arrow functions**: Use arrow function syntax for components
- **Default exports**: Export components as default
- **Props destructuring**: Destructure props in function parameters
- **Early returns**: Use early returns for conditional rendering

### Code Formatting

#### JavaScript/JSX
- **Semicolons**: Required at end of statements
- **Quotes**: Single quotes for JS strings, double for JSX attributes
- **Indentation**: 2 spaces (no tabs)
- **Line length**: Max 100 characters per line
- **Trailing commas**: Include in multi-line arrays/objects
- **ESLint rules**: `no-unused-vars` with pattern `^[A-Z_]` (ignores uppercase vars)

#### CSS
- **Property order**: Logical grouping (position, display, colors, etc.)
- **CSS variables**: Use predefined variables from `src/index.css`
- **No magic numbers**: Use variables for spacing, colors
- **Responsive**: Mobile-first approach with media queries

### Naming Conventions

#### Variables & Functions
- **camelCase**: Regular variables and functions (`userData`, `handleClick`)
- **PascalCase**: Components and constructors
- **UPPER_SNAKE_CASE**: Constants (`API_BASE_URL`)
- **Descriptive names**: Avoid abbreviations (`userDisplayName` not `usrDispNm`)

#### CSS Classes
- **kebab-case**: Standard CSS classes (`nav-item`, `user-profile`)
- **BEM methodology**: For complex components (`card__title`, `card--active`)

#### Event Handlers
```jsx
// Good
const handlePlayClick = () => playTrack(track);
const handleTabSwitch = (newTab) => setActiveTab(newTab);

// Bad - unclear or generic
const click = () => {};
const onChange = () => {};
```

### CSS Variables (from src/index.css)
```css
/* Background colors */
--bg-app: #000000;
--bg-sidebar: #000000;
--bg-card: #121212;
--bg-card-hover: #1a1a1a;
--bg-elevated: #181818;
--bg-highlight: #282828;

/* Primary colors */
--primary: #1db954;
--primary-hover: #1ed760;
--primary-dark: #169c46;

/* Text colors */
--text-main: #ffffff;
--text-secondary: #b3b3b3;
--text-muted: #6a6a6a;

/* Borders and radius */
--border: #282828;
--border-light: #333333;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;

/* Transitions */
--transition-fast: 0.15s ease;
--transition-normal: 0.25s ease;
--transition-slow: 0.4s ease;
```

### React Best Practices

#### Hooks Usage
```jsx
// Correct hook usage
const Dashboard = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Effect logic
  }, []); // Dependencies array

  return <div>{count}</div>;
};
```

#### State Management
- **Local state**: `useState` for component-specific state
- **Global state**: Context API for app-wide state
- **Derived state**: `useMemo` for computed values
- **Side effects**: `useEffect` for async operations

### Development Workflow

#### Git Workflow
```bash
# Feature development
git checkout -b feature/add-playlist-support
# Make changes
npm run lint
git add .
git commit -m "feat: add playlist creation functionality"
git push origin feature/add-playlist-support

# Pull request process
# 1. Create PR with descriptive title
# 2. Add reviewers
# 3. Ensure CI passes (linting)
# 4. Merge to main
```

#### Commit Messages
- **Conventional commits**: "feat:", "fix:", "docs:", "refactor:"
- **Imperative mood**: "Add user authentication" not "Added user authentication"
- **Descriptive**: Include what and why

### Testing Strategy (Future Implementation)

#### Component Testing
```jsx
// Example test structure (when Vitest is added)
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Dashboard from './Dashboard';

test('renders dashboard with user data', () => {
  render(<Dashboard />);
  expect(screen.getByText('Good morning')).toBeInTheDocument();
});
```

#### Testing Guidelines
- **Unit tests**: Test individual functions and components
- **Integration tests**: Test component interactions
- **Coverage**: Aim for 80%+ coverage when implemented

### Project-Specific Patterns

#### File Structure
```
src/
├── components/          # UI components (PascalCase)
│   ├── Dashboard.jsx
│   ├── Dashboard.css
│   └── Sidebar.jsx
├── contexts/           # React contexts
│   └── SpotifyDataContext.jsx
├── data/              # Mock data and utilities
│   └── spotifyMockData.js
├── assets/            # Static assets
├── index.css          # Global styles
└── main.jsx           # App entry point
```

#### Data Handling
- **Mock data**: Use `spotifyMockData.js` for development
- **Data transformation**: Keep business logic in utility functions
- **Type safety**: Add TypeScript interfaces when scaling

#### Component Communication
- **Props drilling**: Avoid deep prop passing - use context
- **Custom hooks**: Extract reusable logic into custom hooks
- **Event callbacks**: Use callback props for child-to-parent communication

This document should be updated as the project evolves. Always refer to it before making changes to maintain consistency across the codebase.</content>
<parameter name="filePath">/home/archer/OpenCode/spotify/AGENTS.md