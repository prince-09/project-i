import { PointsTableEntry } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

interface PointsTableProps {
  data: PointsTableEntry[];
}

export default function PointsTable({ data }: PointsTableProps) {
  const getPositionColor = (position: number) => {
    if (position <= 4) return 'bg-green-100 text-green-800';
    if (position >= 8) return 'bg-red-100 text-red-800';
    return 'bg-gray-100 text-gray-800';
  };

  const getNRRColor = (nrr: number) => {
    if (nrr > 0) return 'text-green-600';
    if (nrr < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const TeamLogo = ({ team }: { team: any }) => {
    const [imageError, setImageError] = useState(false);
    
    if (imageError || !team.logo) {
      return (
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-xs font-bold text-white mr-3 shadow-md">
          {team.shortName}
        </div>
      );
    }

    return (
      <div className="w-8 h-8 relative mr-3">
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

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-900">Points Table</h2>
        <p className="text-sm text-gray-500 mt-1">Current standings for IPL 2025</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pos
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Team
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                P
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                W
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                L
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                D
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                NRR
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pts
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((entry) => (
              <tr key={entry.team.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPositionColor(entry.position)}`}>
                    {entry.position}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <TeamLogo team={entry.team} />
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {entry.team.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {entry.matchesPlayed}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {entry.wins}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {entry.losses}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {entry.draws}
                </td>
                <td className={`px-4 py-4 whitespace-nowrap text-sm font-medium ${getNRRColor(Number(entry.nrr))}`}>
                  {Number(entry.nrr) > 0 ? '+' : ''}{Number(entry.nrr).toFixed(3)}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {entry.points}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 bg-gray-50 border-t">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-green-100 rounded-full"></div>
              <span>Playoff spots</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-red-100 rounded-full"></div>
              <span>Elimination zone</span>
            </div>
          </div>
          <div>
            <span className="font-medium">NRR:</span> Net Run Rate
          </div>
        </div>
      </div>
    </div>
  );
} 