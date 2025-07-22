'use client';

import { useIPLData } from '@/lib/query';
import MatchCard from '@/components/MatchCard';
import PointsTable from '@/components/PointsTable';
import { MatchCardSkeleton, PointsTableSkeleton } from '@/components/LoadingSkeleton';

export default function HomePage() {
  const { data, isLoading, error } = useIPLData();

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">IPL T20 Dashboard</h1>
          <p className="text-gray-600">Loading latest match data...</p>
        </div>
        <MatchCardSkeleton />
        <PointsTableSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 text-6xl mb-4">⚠️</div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Data</h2>
        <p className="text-gray-600">Unable to fetch IPL data. Please try again later.</p>
        <p className="text-sm text-gray-500 mt-2">Error: {error.message}</p>
      </div>
    );
  }

  const iplData = data?.data;

  if (!iplData) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🏏</div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">No Data Available</h2>
        <p className="text-gray-600">Unable to load IPL data at the moment.</p>
      </div>
    );
  }

  const featuredMatch = iplData.liveMatch || iplData.upcomingMatches[0];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">IPL T20 Dashboard</h1>
        <p className="text-xl text-gray-700 mb-2">2025 Season</p>
        <p className="text-sm text-gray-500">
          {data?.source === 'scraped' ? 'Live data from iplt20.com' : 'Using fallback data'}
        </p>
      </div>

      {/* Featured Match */}
      {featuredMatch && (
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {iplData.liveMatch ? 'Live Match' : 'Next Match'}
            </h2>
            {iplData.liveMatch && (
              <p className="text-red-600 font-medium flex items-center justify-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                LIVE NOW
              </p>
            )}
          </div>
          <div className="max-w-2xl mx-auto">
            <MatchCard match={featuredMatch} />
          </div>
        </div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {iplData.pointsTable?.length || 0}
          </div>
          <div className="text-gray-700 font-medium">Teams</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {iplData.fullSchedule?.length || 0}
          </div>
          <div className="text-gray-700 font-medium">Total Matches</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">
            {iplData.upcomingMatches?.length || 0}
          </div>
          <div className="text-gray-700 font-medium">Upcoming</div>
        </div>
      </div>

      {/* Points Table Preview */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Current Standings</h2>
          <a 
            href="/points" 
            className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
          >
            View Full Table →
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pos</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {iplData.pointsTable?.slice(0, 5).map((entry) => (
                  <tr key={entry.team.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        entry.position <= 4 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {entry.position}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-xs font-bold text-white mr-2 shadow-md">
                          {entry.team.shortName}
                        </div>
                        <span className="text-sm font-medium text-gray-900">{entry.team.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {entry.points}
                      </span>
                    </td>
                  </tr>
                )) || (
                  <tr>
                    <td colSpan={3} className="px-4 py-8 text-center text-gray-500">
                      No standings data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Upcoming Matches Preview */}
      {iplData.upcomingMatches?.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Upcoming Matches</h2>
            <a 
              href="/schedule" 
              className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
            >
              View Full Schedule →
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {iplData.upcomingMatches.slice(0, 3).map((match) => (
              <MatchCard key={match.id} match={match} variant="compact" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 