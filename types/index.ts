export interface Team {
  id: string;
  name: string;
  shortName: string;
  logo?: string;
}

export interface Venue {
  name: string;
  city: string;
}

export interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  venue: Venue;
  date: string;
  time: string;
  status: 'upcoming' | 'live' | 'completed';
  result?: string;
  matchNumber?: number;
}

export interface PointsTableEntry {
  position: number;
  team: Team;
  matchesPlayed: number;
  wins: number;
  losses: number;
  draws: number;
  nrr: number;
  points: number;
}

export interface ScrapedData {
  liveMatch?: Match;
  upcomingMatches: Match[];
  pointsTable: PointsTableEntry[];
  fullSchedule: Match[];
}

export interface ApiResponse {
  success: boolean;
  data?: ScrapedData;
  error?: string;
  timestamp: number;
  source: 'scraped' | 'fallback';
} 