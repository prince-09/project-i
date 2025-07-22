export function MatchCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="h-4 bg-gray-300 rounded w-20"></div>
        </div>
        <div className="h-4 bg-gray-300 rounded w-16"></div>
      </div>
      <div className="flex items-center justify-center space-x-4 mb-4">
        <div className="text-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-16"></div>
        </div>
        <div className="text-gray-500 font-bold">VS</div>
        <div className="text-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-16"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-3/4"></div>
      </div>
    </div>
  );
}

export function PointsTableSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b">
        <div className="h-6 bg-gray-300 rounded w-32 mb-4"></div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {['Pos', 'Team', 'P', 'W', 'L', 'D', 'NRR', 'Pts'].map((header) => (
                <th key={header} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="h-3 bg-gray-300 rounded w-8"></div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Array.from({ length: 10 }).map((_, index) => (
              <tr key={index}>
                {Array.from({ length: 8 }).map((_, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-4 whitespace-nowrap">
                    <div className="h-4 bg-gray-300 rounded w-8"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ScheduleListSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
          <div className="flex items-center justify-between mb-3">
            <div className="h-4 bg-gray-300 rounded w-24"></div>
            <div className="h-4 bg-gray-300 rounded w-16"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="h-3 bg-gray-300 rounded w-20"></div>
            </div>
            <div className="text-gray-500 font-bold">VS</div>
            <div className="flex items-center space-x-3">
              <div className="h-3 bg-gray-300 rounded w-20"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <div className="mt-3">
            <div className="h-3 bg-gray-300 rounded w-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
} 