const fallbackData = {
  liveMatch: null,
  upcomingMatches: [
    {
      id: 'match-1',
      homeTeam: { id: 'mumbaiindians', name: 'Mumbai Indians', shortName: 'MI' },
      awayTeam: { id: 'chennaisuperkings', name: 'Chennai Super Kings', shortName: 'CSK' },
      venue: { name: 'Wankhede Stadium', city: 'Mumbai' },
      date: '2025-04-15',
      time: '19:30',
      status: 'upcoming',
      matchNumber: 1
    },
    {
      id: 'match-2',
      homeTeam: { id: 'royalchallengersbangalore', name: 'Royal Challengers Bangalore', shortName: 'RCB' },
      awayTeam: { id: 'kolkataknightriders', name: 'Kolkata Knight Riders', shortName: 'KKR' },
      venue: { name: 'M. Chinnaswamy Stadium', city: 'Bangalore' },
      date: '2025-04-16',
      time: '19:30',
      status: 'upcoming',
      matchNumber: 2
    },
    {
      id: 'match-3',
      homeTeam: { id: 'delhicapitals', name: 'Delhi Capitals', shortName: 'DC' },
      awayTeam: { id: 'punjabkings', name: 'Punjab Kings', shortName: 'PBKS' },
      venue: { name: 'Arun Jaitley Stadium', city: 'Delhi' },
      date: '2025-04-17',
      time: '19:30',
      status: 'upcoming',
      matchNumber: 3
    }
  ],
  pointsTable: [
    {
      position: 1,
      team: { id: 'punjabkings', name: 'Punjab Kings', shortName: 'PBKS' },
      matchesPlayed: 14,
      wins: 9,
      losses: 4,
      draws: 0,
      nrr: 0.372,
      points: 19
    },
    {
      position: 2,
      team: { id: 'royalchallengersbangalore', name: 'Royal Challengers Bangalore', shortName: 'RCB' },
      matchesPlayed: 14,
      wins: 9,
      losses: 4,
      draws: 0,
      nrr: 0.301,
      points: 19
    },
    {
      position: 3,
      team: { id: 'gujarattitans', name: 'Gujarat Titans', shortName: 'GT' },
      matchesPlayed: 14,
      wins: 9,
      losses: 5,
      draws: 0,
      nrr: 0.254,
      points: 18
    },
    {
      position: 4,
      team: { id: 'mumbaiindians', name: 'Mumbai Indians', shortName: 'MI' },
      matchesPlayed: 14,
      wins: 8,
      losses: 6,
      draws: 0,
      nrr: 1.142,
      points: 16
    },
    {
      position: 5,
      team: { id: 'delhicapitals', name: 'Delhi Capitals', shortName: 'DC' },
      matchesPlayed: 14,
      wins: 7,
      losses: 6,
      draws: 0,
      nrr: 0.011,
      points: 15
    },
    {
      position: 6,
      team: { id: 'sunrisershyderabad', name: 'Sunrisers Hyderabad', shortName: 'SRH' },
      matchesPlayed: 14,
      wins: 6,
      losses: 7,
      draws: 0,
      nrr: -0.241,
      points: 13
    },
    {
      position: 7,
      team: { id: 'lucknowsupergiants', name: 'Lucknow Super Giants', shortName: 'LSG' },
      matchesPlayed: 14,
      wins: 6,
      losses: 8,
      draws: 0,
      nrr: -0.376,
      points: 12
    },
    {
      position: 8,
      team: { id: 'chennaisuperkings', name: 'Chennai Super Kings', shortName: 'CSK' },
      matchesPlayed: 14,
      wins: 5,
      losses: 9,
      draws: 0,
      nrr: -0.652,
      points: 10
    },
    {
      position: 9,
      team: { id: 'rajasthanroyals', name: 'Rajasthan Royals', shortName: 'RR' },
      matchesPlayed: 14,
      wins: 4,
      losses: 10,
      draws: 0,
      nrr: -0.677,
      points: 8
    },
    {
      position: 10,
      team: { id: 'kolkataknightriders', name: 'Kolkata Knight Riders', shortName: 'KKR' },
      matchesPlayed: 14,
      wins: 3,
      losses: 11,
      draws: 0,
      nrr: -1.096,
      points: 6
    }
  ],
  fullSchedule: [
    {
      id: 'match-1',
      homeTeam: { id: 'mumbaiindians', name: 'Mumbai Indians', shortName: 'MI' },
      awayTeam: { id: 'chennaisuperkings', name: 'Chennai Super Kings', shortName: 'CSK' },
      venue: { name: 'Wankhede Stadium', city: 'Mumbai' },
      date: '2025-04-15',
      time: '19:30',
      status: 'upcoming',
      matchNumber: 1
    },
    {
      id: 'match-2',
      homeTeam: { id: 'royalchallengersbangalore', name: 'Royal Challengers Bangalore', shortName: 'RCB' },
      awayTeam: { id: 'kolkataknightriders', name: 'Kolkata Knight Riders', shortName: 'KKR' },
      venue: { name: 'M. Chinnaswamy Stadium', city: 'Bangalore' },
      date: '2025-04-16',
      time: '19:30',
      status: 'upcoming',
      matchNumber: 2
    },
    {
      id: 'match-3',
      homeTeam: { id: 'delhicapitals', name: 'Delhi Capitals', shortName: 'DC' },
      awayTeam: { id: 'punjabkings', name: 'Punjab Kings', shortName: 'PBKS' },
      venue: { name: 'Arun Jaitley Stadium', city: 'Delhi' },
      date: '2025-04-17',
      time: '19:30',
      status: 'upcoming',
      matchNumber: 3
    }
  ]
};

module.exports = fallbackData; 