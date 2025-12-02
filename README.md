# SAIFE Toolkit

A SvelteKit-based toolkit for data processing, indexing, and frontend
utilities.\
The project uses Vite, Svelte 4, TypeScript, TailwindCSS, and a set of
Node-based tools for transforming and validating structured datasets.

## Tech Stack

-   **SvelteKit 1.27**
-   **Svelte 4**
-   **Vite 4**
-   **TypeScript 5**
-   **TailwindCSS 3**
-   **PostCSS** (autoprefixer, cssnano)
-   **Google APIs**
-   **Cheerio** for HTML/XML parsing
-   **CSV parsing utilities**
-   **Husky + lint-staged**
-   **ESLint + Prettier + Svelte Check**

## Requirements

-   **Node.js 18 or newer**
-   **npm 9 or newer**

## Installation

``` bash
npm install
```

## Development

``` bash
npm start
```

App runs at:

    http://localhost:5173/saife

## Building

``` bash
npm run compile
```

Build only Svelte:

``` bash
npm run compile:svelte
```

## Linting

``` bash
npm run lint
npm run fix
npm run watch
```

## Data Tools

``` bash
npm run data
npm run data:google
npm run indexctl -- <arguments>
```

## Project Structure

    .
    ├── src/
    │   ├── lib/
    │   ├── routes/
    │   ├── data/
    │   └── indexctl.ts
    ├── static/
    ├── build/
    ├── package.json
    ├── svelte.config.js
    ├── tailwind.config.cjs
    ├── tsconfig.json
    └── vite.config.ts

## License

GPL-3.0

## Contributors

-   Christo Buschek
