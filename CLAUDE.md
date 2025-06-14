# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
bun run dev          # Start development server with hot reload
bun run build        # Build for production (static site generation)
bun run preview      # Preview production build locally

# Code Quality
bun run lint         # Lint code with Biome (strict rules)
bun run format       # Format code with Biome
```

## Architecture Overview

This is a modern React portfolio website built with:

- **Vike** (full-stack React framework) for SSR/SSG with prerendering enabled
- **React 19** with React Compiler enabled for optimal performance
- **TailwindCSS v4** for utility-first styling 
- **TypeScript** with strict configuration
- **Biome** for fast linting/formatting with import organization
- **Bun** as package manager
- **Vite** as build tool with SVGR plugin for SVG components

## Key Structure

- `/pages/` - Vike-based routing with `+config.ts`, `+Page.tsx`, `+data.ts` pattern
- `/src/` - Application source code
  - `Layout/` - Main layout component with header/footer and font loading optimization
  - `components/` - Reusable UI components (Card, Container)
  - `pages/` - Page-specific components (HomePage, WorksPage, NotesPage, ErrorPage)
- Font loading uses `useFontLoaded` hook for performance optimization

## Important Notes

- Uses ES modules (`"type": "module"` in package.json)
- Biome enforces strict import organization and blocks console statements
- React 19 with React Compiler enabled in Vite config
- Prerendering generates static pages for better performance
- SVGR configured for importing SVGs as React components

## Testing & Validation

Always run `bun run lint` after making changes - Biome has strict rules including:
- Import sorting and organization
- No unused variables/imports (treated as errors)
- CSS class sorting enforcement

## Git Hooks

Pre-commit hooks are configured via Husky to run lint-staged automatically on commit.

## Vike Configuration

- Global configuration in `/pages/+config.ts` sets default layout, metadata, and enables prerendering
- Each page can override configuration with its own `+config.ts`
- Data fetching pattern uses `+data.ts` files for server-side data loading