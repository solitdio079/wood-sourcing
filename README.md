# Sahel Sourcing

Vite + React + Tailwind landing page for a Turkiye-to-West-Africa wood panels sourcing business.

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Docker Deployment

This project includes a multi-stage Dockerfile:

- Build stage: installs dependencies with `npm ci` and runs `npm run build`
- Production stage: serves `dist` with Nginx on port `3000`

Coolify Docker deployment:

- Build pack: Dockerfile
- Dockerfile location: `./Dockerfile`
- Exposed port: `3000`
