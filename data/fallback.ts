import { ScrapedData } from '@/types';

export const fallbackData: ScrapedData = {
  liveMatch: {
    id: "live-1",
    homeTeam: {
      id: "csk",
      name: "Chennai Super Kings",
      shortName: "CSK"
    },
    awayTeam: {
      id: "mi",
      name: "Mumbai Indians", 
      shortName: "MI"
    },
    venue: {
      name: "M. A. Chidambaram Stadium",
      city: "Chennai"
    },
    date: "2024-04-15",
    time: "19:30",
    status: "live",
    result: "CSK 185/4 (20) vs MI 180/8 (20) - CSK won by 5 runs"
  },
  upcomingMatches: [
    {
      id: "upcoming-1",
      homeTeam: {
        id: "rcb",
        name: "Royal Challengers Bangalore",
        shortName: "RCB"
      },
      awayTeam: {
        id: "kkr",
        name: "Kolkata Knight Riders",
        shortName: "KKR"
      },
      venue: {
        name: "M. Chinnaswamy Stadium",
        city: "Bangalore"
      },
      date: "2024-04-16",
      time: "19:30",
      status: "upcoming",
      matchNumber: 15
    },
    {
      id: "upcoming-2",
      homeTeam: {
        id: "pbks",
        name: "Punjab Kings",
        shortName: "PBKS"
      },
      awayTeam: {
        id: "gt",
        name: "Gujarat Titans",
        shortName: "GT"
      },
      venue: {
        name: "IS Bindra Stadium",
        city: "Mohali"
      },
      date: "2024-04-17",
      time: "19:30",
      status: "upcoming",
      matchNumber: 16
    },
    {
      id: "upcoming-3",
      homeTeam: {
        id: "srh",
        name: "Sunrisers Hyderabad",
        shortName: "SRH"
      },
      awayTeam: {
        id: "dc",
        name: "Delhi Capitals",
        shortName: "DC"
      },
      venue: {
        name: "Rajiv Gandhi Stadium",
        city: "Hyderabad"
      },
      date: "2024-04-18",
      time: "19:30",
      status: "upcoming",
      matchNumber: 17
    }
  ],
  pointsTable: [
    {
      position: 1,
      team: {
        id: "csk",
        name: "Chennai Super Kings",
        shortName: "CSK"
      },
      matchesPlayed: 5,
      wins: 4,
      losses: 1,
      draws: 0,
      nrr: 1.25,
      points: 8
    },
    {
      position: 2,
      team: {
        id: "kkr",
        name: "Kolkata Knight Riders",
        shortName: "KKR"
      },
      matchesPlayed: 5,
      wins: 4,
      losses: 1,
      draws: 0,
      nrr: 1.1,
      points: 8
    },
    {
      position: 3,
      team: {
        id: "rr",
        name: "Rajasthan Royals",
        shortName: "RR"
      },
      matchesPlayed: 5,
      wins: 3,
      losses: 2,
      draws: 0,
      nrr: 0.85,
      points: 6
    },
    {
      position: 4,
      team: {
        id: "srh",
        name: "Sunrisers Hyderabad",
        shortName: "SRH"
      },
      matchesPlayed: 5,
      wins: 3,
      losses: 2,
      draws: 0,
      nrr: 0.45,
      points: 6
    },
    {
      position: 5,
      team: {
        id: "lsg",
        name: "Lucknow Super Giants",
        shortName: "LSG"
      },
      matchesPlayed: 5,
      wins: 3,
      losses: 2,
      draws: 0,
      nrr: 0.2,
      points: 6
    },
    {
      position: 6,
      team: {
        id: "gt",
        name: "Gujarat Titans",
        shortName: "GT"
      },
      matchesPlayed: 5,
      wins: 2,
      losses: 3,
      draws: 0,
      nrr: -0.15,
      points: 4
    },
    {
      position: 7,
      team: {
        id: "pbks",
        name: "Punjab Kings",
        shortName: "PBKS"
      },
      matchesPlayed: 5,
      wins: 2,
      losses: 3,
      draws: 0,
      nrr: -0.3,
      points: 4
    },
    {
      position: 8,
      team: {
        id: "dc",
        name: "Delhi Capitals",
        shortName: "DC"
      },
      matchesPlayed: 5,
      wins: 2,
      losses: 3,
      draws: 0,
      nrr: -0.5,
      points: 4
    },
    {
      position: 9,
      team: {
        id: "rcb",
        name: "Royal Challengers Bangalore",
        shortName: "RCB"
      },
      matchesPlayed: 5,
      wins: 1,
      losses: 4,
      draws: 0,
      nrr: -0.8,
      points: 2
    },
    {
      position: 10,
      team: {
        id: "mi",
        name: "Mumbai Indians",
        shortName: "MI"
      },
      matchesPlayed: 5,
      wins: 1,
      losses: 4,
      draws: 0,
      nrr: -1.2,
      points: 2
    }
  ],
  fullSchedule: [
    {
      id: "match-1",
      homeTeam: {
        id: "csk",
        name: "Chennai Super Kings",
        shortName: "CSK"
      },
      awayTeam: {
        id: "rcb",
        name: "Royal Challengers Bangalore",
        shortName: "RCB"
      },
      venue: {
        name: "M. A. Chidambaram Stadium",
        city: "Chennai"
      },
      date: "2024-03-22",
      time: "19:30",
      status: "completed",
      result: "CSK won by 6 wickets",
      matchNumber: 1
    },
    {
      id: "match-2",
      homeTeam: {
        id: "pbks",
        name: "Punjab Kings",
        shortName: "PBKS"
      },
      awayTeam: {
        id: "dc",
        name: "Delhi Capitals",
        shortName: "DC"
      },
      venue: {
        name: "IS Bindra Stadium",
        city: "Mohali"
      },
      date: "2024-03-23",
      time: "15:30",
      status: "completed",
      result: "PBKS won by 4 wickets",
      matchNumber: 2
    },
    {
      id: "match-3",
      homeTeam: {
        id: "kkr",
        name: "Kolkata Knight Riders",
        shortName: "KKR"
      },
      awayTeam: {
        id: "srh",
        name: "Sunrisers Hyderabad",
        shortName: "SRH"
      },
      venue: {
        name: "Eden Gardens",
        city: "Kolkata"
      },
      date: "2024-03-23",
      time: "19:30",
      status: "completed",
      result: "KKR won by 4 runs",
      matchNumber: 3
    },
    {
      id: "match-4",
      homeTeam: {
        id: "rr",
        name: "Rajasthan Royals",
        shortName: "RR"
      },
      awayTeam: {
        id: "lsg",
        name: "Lucknow Super Giants",
        shortName: "LSG"
      },
      venue: {
        name: "Sawai Mansingh Stadium",
        city: "Jaipur"
      },
      date: "2024-03-24",
      time: "15:30",
      status: "completed",
      result: "RR won by 20 runs",
      matchNumber: 4
    },
    {
      id: "match-5",
      homeTeam: {
        id: "gt",
        name: "Gujarat Titans",
        shortName: "GT"
      },
      awayTeam: {
        id: "mi",
        name: "Mumbai Indians",
        shortName: "MI"
      },
      venue: {
        name: "Narendra Modi Stadium",
        city: "Ahmedabad"
      },
      date: "2024-03-24",
      time: "19:30",
      status: "completed",
      result: "GT won by 6 runs",
      matchNumber: 5
    }
  ]
}; 