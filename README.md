## Installation

```bash
npm install
```

## Development

```bash
npm run start
```

App runs at:

    http://localhost:5173/

## Building

Clean previous build artifacts:

```bash
rm -rf build .svelte-kit
```

Compile Svelte app:

```bash
npm run compile:svelte
```

## Production Build

Serve the production build locally:

```bash
npx serve build
```

````md
## Data Tools

Scripts for fetching and indexing external data sources:

```bash
npm run data
npm run data:google
npm run indexctl -- <arguments>
```
````

## License

GPL-3.0

## Author

- Christo Buschek
