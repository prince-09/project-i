const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { scrapeIPLData } = require('./scraper');
const fallbackData = require('./fallback');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'IPL Dashboard Backend is running' });
});

// Main API endpoint
app.get('/api/ipl-data', async (req, res) => {
  try {
    console.log('🔄 Scraping IPL data...');
    const data = await scrapeIPLData();
    
    res.json({
      success: true,
      source: 'scraped',
      timestamp: new Date().toISOString(),
      data: data
    });
  } catch (error) {
    console.error('❌ Error scraping IPL data:', error);
    console.log('📦 Using fallback data...');
    
    res.json({
      success: true,
      source: 'fallback',
      timestamp: new Date().toISOString(),
      data: fallbackData
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 IPL Dashboard Backend running on port ${PORT}`);
  console.log(`📊 API available at: http://localhost:${PORT}/api/ipl-data`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
}); 