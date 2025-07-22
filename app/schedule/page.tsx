'use client';

import { useIPLData } from '@/lib/query';
import ScheduleList from '@/components/ScheduleList';
import { ScheduleListSkeleton } from '@/components/LoadingSkeleton';

export default function SchedulePage() {
  const { data, isLoading, error } = useIPLData();

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Match Schedule</h1>
          <p className="text-gray-600">Loading schedule data...</p>
        </div>
        <ScheduleListSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 text-6xl mb-4">⚠️</div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Schedule</h2>
        <p className="text-gray-600">Unable to fetch match schedule. Please try again later.</p>
      </div>
    );
  }

  const iplData = data?.data;
  if (!iplData) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🏏</div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">No Schedule Available</h2>
        <p className="text-gray-600">Unable to load match schedule at the moment.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Match Schedule</h1>
        <p className="text-gray-600">Complete IPL 2024 fixture list</p>
        <p className="text-sm text-gray-500 mt-2">
          {data?.source === 'scraped' ? 'Live data from iplt20.com' : 'Using fallback data'}
        </p>
      </div>

      <ScheduleList 
        matches={iplData.fullSchedule} 
        title="Full Schedule"
        showFilters={true}
      />
    </div>
  );
} 