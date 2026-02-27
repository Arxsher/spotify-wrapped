# Contributing to Spotify Analytics

Thank you for your interest in improving the Spotify Analytics app! This document provides guidelines and instructions for contributing.

## 🎯 How to Contribute

### Reporting Bugs
- Check existing issues to avoid duplicates
- Use the bug report template
- Include: steps to reproduce, expected vs actual behavior, browser/OS info

### Suggesting Features
- Check the roadmap and existing issues first
- Provide a clear use case and rationale
- Consider if it aligns with the project's scope

### Pull Requests
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Ensure code passes linting (`bun run lint`)
5. Commit with clear, descriptive messages
6. Push and open a pull request against the `jarvis/spotify-integration` branch

## 🛠️ Development Setup

```bash
# Clone and install
git clone https://github.com/Arxsher/spotify-wrapped.git
cd spotify-wrapped
bun install

# Run development server
bun run dev

# Build for production
bun run build

# Run linter
bun run lint
```

## 📝 Code Style

- Use React best practices and functional components
- Follow existing code structure
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components modular and reusable

## 🎨 UI/UX Guidelines

- Maintain the Spotify-inspired aesthetic
- Ensure responsive design
- Use the existing color palette and typography
- Test on multiple screen sizes

## ⚠️ Important Notes

- This project uses Spotify Web API - you'll need your own credentials for development
- Do not commit any API keys or secrets
- The app is configured for GitHub Pages deployment

## ❓ Questions?

Open an issue or reach out to the maintainers.

---

Let's build something amazing together! 🎧🦊
