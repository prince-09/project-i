import { Match } from '@/types';
import MatchCard from './MatchCard';

interface ScheduleListProps {
  matches: Match[];
  title?: string;
  showFilters?: boolean;
}

export default function ScheduleList({ matches, title = 'Match Schedule', showFilters = false }: ScheduleListProps) {
  const getStatusFilter = (status: string) => {
    switch (status) {
      case 'live':
        return 'Live Matches';
      case 'upcoming':
        return 'Upcoming Matches';
      case 'completed':
        return 'Completed Matches';
      default:
        return 'All Matches';
    }
  };

  const liveMatches = matches.filter(match => match.status === 'live');
  const upcomingMatches = matches.filter(match => match.status === 'upcoming');
  const completedMatches = matches.filter(match => match.status === 'completed');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500 mt-1">
            {matches.length} matches found
          </p>
        </div>
        {showFilters && (
          <div className="flex space-x-2">
            <span className="text-sm text-gray-500">Filter:</span>
            <select className="text-sm border border-gray-300 rounded-md px-3 py-1">
              <option value="all">All Matches</option>
              <option value="live">Live Matches</option>
              <option value="upcoming">Upcoming Matches</option>
              <option value="completed">Completed Matches</option>
            </select>
          </div>
        )}
      </div>

      {liveMatches.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-red-600 flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
            Live Matches
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {liveMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      )}

      {upcomingMatches.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-blue-600">Upcoming Matches</h3>
          <div className="space-y-3">
            {upcomingMatches.slice(0, 10).map((match) => (
              <MatchCard key={match.id} match={match} variant="compact" />
            ))}
          </div>
          {upcomingMatches.length > 10 && (
            <div className="text-center">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View all {upcomingMatches.length} upcoming matches
              </button>
            </div>
          )}
        </div>
      )}

      {completedMatches.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-600">Recent Results</h3>
          <div className="space-y-3">
            {completedMatches.slice(0, 5).map((match) => (
              <MatchCard key={match.id} match={match} variant="compact" />
            ))}
          </div>
          {completedMatches.length > 5 && (
            <div className="text-center">
              <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                View all {completedMatches.length} completed matches
              </button>
            </div>
          )}
        </div>
      )}

      {matches.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🏏</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No matches found</h3>
          <p className="text-gray-500">Check back later for upcoming matches</p>
        </div>
      )}
    </div>
  );
} 