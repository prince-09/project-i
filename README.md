# IPL T20 Dashboard

A complete IPL 2025 dashboard built with Next.js 14 (App Router) and a separate Node.js backend for data scraping.

## 🏏 Features

- **Live IPL 2025 Data**: Real-time points table, match schedule, and upcoming matches
- **Web Scraping**: Automated data collection from official IPL website
- **Modern UI**: ESPNcricinfo-inspired design with Tailwind CSS
- **Responsive Design**: Mobile-first, fully responsive layout
- **Real-time Updates**: Auto-refresh data every 5 minutes
- **Fallback System**: Graceful degradation when scraping fails

## 🏗️ Project Structure

```
ipl-t20-dashboard/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── schedule/          # Schedule page
│   ├── points/            # Points table page
│   └── about/             # About page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer component
│   ├── MatchCard.tsx      # Individual match display
│   ├── PointsTable.tsx    # Points table component
│   ├── ScheduleList.tsx   # Schedule list component
│   ├── LoadingSkeleton.tsx # Loading states
│   └── Providers.tsx      # React Query provider
├── lib/                   # Utility functions
│   ├── query.ts           # React Query hooks
│   └── scraper.ts         # Frontend scraper (legacy)
├── types/                 # TypeScript interfaces
│   └── index.ts           # Data type definitions
├── data/                  # Static data
│   └── fallback.ts        # Fallback data
├── ipl-backend/           # Backend Node.js server
│   ├── src/
│   │   ├── server.js      # Express server
│   │   ├── scraper.js     # Puppeteer scraper
│   │   └── fallback.js    # Backend fallback data
│   ├── package.json       # Backend dependencies
│   └── README.md          # Backend documentation
└── package.json           # Frontend dependencies
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn**
- **Git**

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ipl-t20-dashboard
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd ipl-backend
npm install
cd ..
```

### 4. Start the Backend Server

```bash
# Terminal 1 - Start backend
cd ipl-backend
npm run dev
```

The backend will start on `http://localhost:8080`

### 5. Start the Frontend Development Server

```bash
# Terminal 2 - Start frontend
npm run dev
```

The frontend will start on `http://localhost:3000`

### 6. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080/api/ipl-data
- **Health Check**: http://localhost:8080/health

## 📊 Current IPL 2025 Standings

The dashboard displays accurate IPL 2025 standings:

| Position | Team | Points | Wins | Losses |
|----------|------|--------|------|--------|
| 1 | Punjab Kings (PBKS) | 19 | 9 | 4 |
| 2 | Royal Challengers Bangalore (RCB) | 19 | 9 | 4 |
| 3 | Gujarat Titans (GT) | 18 | 9 | 5 |
| 4 | Mumbai Indians (MI) | 16 | 8 | 6 |
| 5 | Delhi Capitals (DC) | 15 | 7 | 6 |
| 6 | Sunrisers Hyderabad (SRH) | 13 | 6 | 7 |
| 7 | Lucknow Super Giants (LSG) | 12 | 6 | 8 |
| 8 | Chennai Super Kings (CSK) | 10 | 5 | 9 |
| 9 | Rajasthan Royals (RR) | 8 | 4 | 10 |
| 10 | Kolkata Knight Riders (KKR) | 6 | 3 | 11 |

## 🛠️ Development

### Frontend Development

```bash
# Start frontend in development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Backend Development

```bash
# Navigate to backend directory
cd ipl-backend

# Start backend in development mode
npm run dev

# Start production server
npm start
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Frontend Environment Variables
NEXT_PUBLIC_BACKEND_URL=http://localhost:8080

# Backend Environment Variables (in ipl-backend/.env)
PORT=8080
```

## 🏗️ Build for Production

### 1. Build Frontend

```bash
# Build the Next.js application
npm run build

# The built files will be in .next/ directory
```

### 2. Build Backend

```bash
cd ipl-backend
npm install --production
```

### 3. Production Deployment

#### Option A: Separate Deployment

**Frontend (Vercel/Netlify)**:
```bash
# Deploy to Vercel
vercel

# Or build and deploy to any static hosting
npm run build
```

**Backend (Railway/Render/Heroku)**:
```bash
cd ipl-backend
# Deploy to Railway
railway up

# Or deploy to Render/Heroku
# Follow platform-specific instructions
```

#### Option B: Monorepo Deployment

For platforms supporting monorepos:

```bash
# Set environment variables
NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.com

# Deploy both frontend and backend
# Platform-specific deployment commands
```

## 🔧 Configuration

### Frontend Configuration

- **Port**: 3000 (default)
- **Backend URL**: Configurable via `NEXT_PUBLIC_BACKEND_URL`
- **Data Refresh**: Every 5 minutes
- **Cache Duration**: 10 minutes

### Backend Configuration

- **Port**: 8080 (default)
- **CORS**: Enabled for frontend
- **Scraping Cache**: 10 minutes
- **Screenshots**: Debug screenshots saved

## 📱 Pages

### Home (`/`)
- Featured live/upcoming match
- Quick stats overview
- Points table preview
- Upcoming matches preview

### Schedule (`/schedule`)
- Complete IPL 2025 match schedule
- Match details with teams, venues, dates
- Live, upcoming, and completed matches

### Points Table (`/points`)
- Current IPL 2025 standings
- Team statistics (wins, losses, NRR, points)
- Position changes and trends

### About (`/about`)
- Application information
- Data source details
- Disclaimer about unofficial data

## 🎨 UI Components

- **Header**: Navigation with active states
- **Footer**: Copyright and disclaimers
- **MatchCard**: Individual match display with team logos
- **PointsTable**: Standings table with team statistics
- **ScheduleList**: Organized match listings
- **LoadingSkeleton**: Loading states for better UX
- **TeamLogo**: Fallback team initials when logos unavailable

## 🔄 Data Flow

1. **Frontend** requests data from backend API
2. **Backend** checks cache for recent data
3. **Puppeteer** scrapes IPL website if cache expired
4. **Fallback data** used if scraping fails
5. **Frontend** displays data with React Query caching
6. **Auto-refresh** every 5 minutes

## 🐛 Troubleshooting

### Common Issues

**Backend not starting**:
```bash
cd ipl-backend
npm install
npm run dev
```

**Frontend can't connect to backend**:
- Check if backend is running on port 8080
- Verify `NEXT_PUBLIC_BACKEND_URL` environment variable
- Check CORS configuration

**Scraping not working**:
- Check `schedule-debug.png` and `points-debug.png` screenshots
- Verify internet connection
- Check if IPL website is accessible

**Build errors**:
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Debug Mode

Enable detailed logging:

```bash
# Backend debug
cd ipl-backend
DEBUG=* npm run dev

# Frontend debug
NODE_ENV=development npm run dev
```

## 🚀 Deployment Platforms

### Frontend
- ✅ **Vercel**: Recommended for Next.js
- ✅ **Netlify**: Static site hosting
- ✅ **Railway**: Full-stack deployment
- ✅ **Render**: Static site hosting

### Backend
- ✅ **Railway**: Best for Puppeteer
- ✅ **Render**: Requires buildpack
- ✅ **Heroku**: Requires buildpack
- ❌ **Vercel**: Not recommended (serverless limitations)

## 📄 License

This project is for educational purposes. Data is scraped from the official IPL website.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues and questions:
- Check the troubleshooting section
- Review the debug screenshots
- Check the console logs
- Verify environment variables

---

**Note**: This application scrapes data from the official IPL website. Please respect the website's terms of service and implement appropriate rate limiting for production use. 