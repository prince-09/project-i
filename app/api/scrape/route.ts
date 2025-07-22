import { NextRequest, NextResponse } from 'next/server';
import { scrapeIPLData } from '@/lib/scraper';
import { fallbackData } from '@/data/fallback';
import { ApiResponse } from '@/types';

export async function GET(request: NextRequest) {
  try {
    console.log('🔄 Attempting to scrape IPL data...');
    
    // Try to scrape real data first
    const scrapedData = await scrapeIPLData();
    
    console.log('✅ Successfully scraped data:', {
      liveMatch: !!scrapedData.liveMatch,
      upcomingMatches: scrapedData.upcomingMatches?.length || 0,
      pointsTable: scrapedData.pointsTable?.length || 0,
      fullSchedule: scrapedData.fullSchedule?.length || 0
    });
    
    const response: ApiResponse = {
      success: true,
      data: scrapedData,
      timestamp: Date.now(),
      source: 'scraped'
    };
    
    return NextResponse.json(response);

  } catch (error) {
    console.error('❌ Scraping failed, using fallback data:', error);
    
    // Fallback to dummy data if scraping fails
    const response: ApiResponse = {
      success: true,
      data: fallbackData,
      timestamp: Date.now(),
      source: 'fallback'
    };
    
    return NextResponse.json(response);
  }
} 