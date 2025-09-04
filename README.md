# Astro + Tailwind CSS 4 Project

A clean, modern web project built with:

- **Astro** - Fast, content-focused web framework
- **Tailwind CSS 4** - Utility-first CSS with CSS-based configuration
- **Bun** - Fast JavaScript runtime and package manager
- **TypeScript** - Type safety and better developer experience

## Getting Started

Install dependencies:

```bash
bun install
```

Start the development server:

```bash
bun run dev
```

Build for production:

```bash
bun run build
```

## Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── layouts/     # Astro layouts
│   ├── pages/       # Astro pages (file-based routing)
│   └── styles/      # Global styles with Tailwind config
├── astro.config.mjs # Astro configuration
└── package.json     # Dependencies and scripts
```

## Tailwind CSS 4 Features

This project uses Tailwind CSS 4's new CSS-based configuration in `src/styles/globals.css`:

- Custom theme variables defined with `@theme`
- CSS-native configuration (no separate config file needed)
- Improved performance and smaller bundle sizes
