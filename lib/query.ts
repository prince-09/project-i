import { useQuery } from '@tanstack/react-query';
import { ApiResponse } from '@/types';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080';

async function fetchIPLData(): Promise<ApiResponse> {
  const response = await fetch(`${BACKEND_URL}/api/ipl-data`);
  if (!response.ok) {
    throw new Error('Failed to fetch IPL data');
  }
  return response.json();
}

export function useIPLData() {
  return useQuery({
    queryKey: ['ipl-data'],
    queryFn: fetchIPLData,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
    staleTime: 10 * 60 * 1000, // Consider data stale after 10 minutes
    retry: 3,
    retryDelay: 1000,
  });
} 