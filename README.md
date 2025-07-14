# kasho-dev-portfolio

A modern, responsive portfolio website built with Vue 3 and Vite, showcasing professional skills, projects, and expertise.

## Features

- 🎨 Responsive design that works on all devices
- 🚀 Fast loading and smooth animations
- 🎨 Modern and clean UI with dark theme
- 📱 Mobile-first approach
- 📊 Interactive project showcase with overlays
- 📚 Comprehensive services section with expandable content
- 🛠️ Showcase of technical skills and expertise
- 📱 Smooth scrolling and animations using Vue transitions

## Tech Stack

- **Framework**: Vue 3 with Composition API
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide Icons
- **Animations**: Vue Transitions
- **TypeScript**: Full TypeScript support

## Project Structure

```
src/
├── assets/            # Static assets
├── components/        # Reusable Vue components
│   ├── PortfolioSection.vue   # Main portfolio component
│   └── ProjectOverlay.vue     # Project showcase overlay
├── icons/             # Project icons and images
└── App.vue           # Root component
```

## Key Components

### PortfolioSection.vue

The main portfolio component that includes:
- Hero section
- Services section with expandable cards
- Project showcase with overlays
- Skills and expertise section
- Responsive grid layouts
- Interactive animations and transitions

### ProjectOverlay.vue

A reusable component for displaying project details in an overlay, featuring:
- Project images
- Project description
- Technology stack
- Interactive close button
- Smooth animations

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
