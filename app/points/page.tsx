'use client';

import { useIPLData } from '@/lib/query';
import PointsTable from '@/components/PointsTable';
import { PointsTableSkeleton } from '@/components/LoadingSkeleton';

export default function PointsPage() {
  const { data, isLoading, error } = useIPLData();

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Points Table</h1>
          <p className="text-gray-600">Loading standings data...</p>
        </div>
        <PointsTableSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 text-6xl mb-4">⚠️</div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Points Table</h2>
        <p className="text-gray-600">Unable to fetch standings data. Please try again later.</p>
      </div>
    );
  }

  const iplData = data?.data;
  if (!iplData) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🏏</div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">No Points Table Available</h2>
        <p className="text-gray-600">Unable to load standings data at the moment.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Points Table</h1>
        <p className="text-gray-600">Current IPL 2024 standings</p>
        <p className="text-sm text-gray-500 mt-2">
          {data?.source === 'scraped' ? 'Live data from iplt20.com' : 'Using fallback data'}
        </p>
      </div>

      <PointsTable data={iplData.pointsTable} />

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-2xl font-bold text-green-600 mb-2">
            {iplData.pointsTable.filter(team => team.position <= 4).length}
          </div>
          <div className="text-gray-600">Playoff Spots</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-2xl font-bold text-blue-600 mb-2">
            {iplData.pointsTable.reduce((sum, team) => sum + team.points, 0)}
          </div>
          <div className="text-gray-600">Total Points</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-2xl font-bold text-purple-600 mb-2">
            {iplData.pointsTable.reduce((sum, team) => sum + team.matchesPlayed, 0)}
          </div>
          <div className="text-gray-600">Matches Played</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-2xl font-bold text-orange-600 mb-2">
            {iplData.pointsTable.filter(team => team.nrr > 0).length}
          </div>
          <div className="text-gray-600">Positive NRR</div>
        </div>
      </div>
    </div>
  );
} 