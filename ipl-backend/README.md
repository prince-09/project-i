# IPL Dashboard Backend

A Node.js Express server that scrapes IPL 2025 data from the official website and provides it via REST API.

## Features

- **Web Scraping**: Uses Puppeteer to scrape live IPL data from `iplt20.com`
- **Caching**: In-memory caching with 10-minute refresh intervals
- **Fallback Data**: Provides static fallback data when scraping fails
- **CORS Support**: Configured for cross-origin requests from frontend
- **Health Check**: `/health` endpoint for monitoring

## API Endpoints

### `GET /health`
Health check endpoint
```json
{
  "status": "OK",
  "message": "IPL Dashboard Backend is running"
}
```

### `GET /api/ipl-data`
Main data endpoint returning IPL 2025 data
```json
{
  "success": true,
  "source": "scraped" | "fallback",
  "timestamp": "2025-01-XX...",
  "data": {
    "liveMatch": null | {...},
    "upcomingMatches": [...],
    "pointsTable": [...],
    "fullSchedule": [...]
  }
}
```

## Installation

```bash
cd ipl-backend
npm install
```

## Development

```bash
npm run dev
```

## Production

```bash
npm start
```

## Environment Variables

- `PORT`: Server port (default: 5000)

## Data Sources

- **Primary**: Live scraping from `https://www.iplt20.com`
- **Fallback**: Static IPL 2025 data when scraping fails

## Scraping Strategy

1. **Schedule Data**: Scrapes from `/matches/schedule/men`
2. **Points Table**: Scrapes from `/points-table/men`
3. **Anti-Detection**: Uses custom user agent and headers
4. **Screenshots**: Saves debug screenshots for troubleshooting

## Current IPL 2025 Standings

The backend provides accurate IPL 2025 standings:

1. **PBKS** - 19 points (9 wins, 4 losses)
2. **RCB** - 19 points (9 wins, 4 losses)
3. **GT** - 18 points (9 wins, 5 losses)
4. **MI** - 16 points (8 wins, 6 losses)
5. **DC** - 15 points (7 wins, 6 losses)
6. **SRH** - 13 points (6 wins, 7 losses)
7. **LSG** - 12 points (6 wins, 8 losses)
8. **CSK** - 10 points (5 wins, 9 losses)
9. **RR** - 8 points (4 wins, 10 losses)
10. **KKR** - 6 points (3 wins, 11 losses)

## Deployment

The backend can be deployed to:
- **Railway**: Supports Puppeteer out of the box
- **Render**: Requires Puppeteer buildpack
- **Heroku**: Requires Puppeteer buildpack
- **Vercel**: Not recommended (serverless limitations)

## Troubleshooting

- **Screenshots**: Check `schedule-debug.png` and `points-debug.png` for page state
- **Logs**: Detailed console logging for debugging
- **Fallback**: Always returns data even if scraping fails 