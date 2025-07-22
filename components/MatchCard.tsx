import { Match } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

interface MatchCardProps {
  match: Match;
  variant?: 'default' | 'compact';
}

export default function MatchCard({ match, variant = 'default' }: MatchCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-red-500 text-white';
      case 'completed':
        return 'bg-green-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live':
        return 'LIVE';
      case 'completed':
        return 'COMPLETED';
      default:
        return 'UPCOMING';
    }
  };

  const TeamLogo = ({ team, size = 'w-16 h-16' }: { team: any; size?: string }) => {
    const [imageError, setImageError] = useState(false);
    
    if (imageError || !team.logo) {
      return (
        <div className={`${size} bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
          {team.shortName}
        </div>
      );
    }

    return (
      <div className={`${size} relative`}>
        <Image
          src={team.logo}
          alt={team.name}
          fill
          className="rounded-full object-cover"
          onError={() => setImageError(true)}
        />
      </div>
    );
  };

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(match.status)}`}>
            {getStatusText(match.status)}
          </span>
          <span className="text-sm text-gray-600">
            {match.date} • {match.time}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md">
              {match.homeTeam.shortName}
            </div>
            <span className="font-medium text-gray-900">{match.homeTeam.name}</span>
          </div>
          <span className="text-gray-500 font-bold">VS</span>
          <div className="flex items-center space-x-3">
            <span className="font-medium text-gray-900">{match.awayTeam.name}</span>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md">
              {match.awayTeam.shortName}
            </div>
          </div>
        </div>
        
        <div className="mt-3 text-sm text-gray-600">
          <p>{match.venue.name}, {match.venue.city}</p>
          {match.result && (
            <p className="text-green-700 font-medium mt-1">{match.result}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <span className={`px-3 py-1 rounded-full text-sm font-bold ${getStatusColor(match.status)}`}>
            {getStatusText(match.status)}
          </span>
          {match.matchNumber && (
            <span className="text-sm text-gray-500">Match #{match.matchNumber}</span>
          )}
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">{match.date}</div>
          <div className="text-lg font-bold text-gray-900">{match.time}</div>
        </div>
      </div>
      
      <div className="flex items-center justify-center space-x-8 mb-6">
        <div className="text-center">
          <TeamLogo team={match.homeTeam} />
          <div className="font-medium text-sm mt-2 text-gray-900">{match.homeTeam.name}</div>
        </div>
        
        <div className="text-gray-500 font-bold text-xl">VS</div>
        
        <div className="text-center">
          <TeamLogo team={match.awayTeam} />
          <div className="font-medium text-sm mt-2 text-gray-900">{match.awayTeam.name}</div>
        </div>
      </div>
      
      <div className="text-center space-y-2">
        <div className="text-gray-600">
          <span className="font-medium">{match.venue.name}</span>
          <span className="mx-2">•</span>
          <span>{match.venue.city}</span>
        </div>
        {match.result && (
          <div className="text-green-700 font-medium text-sm bg-green-50 p-2 rounded border border-green-200">
            {match.result}
          </div>
        )}
      </div>
    </div>
  );
} 