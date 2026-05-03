'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Dashboard error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#ff2d6b]/10 border border-[#ff2d6b]/30">
        <AlertTriangle size={28} className="text-[#ff2d6b]" />
      </div>
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold text-white">Dashboard Failed to Load</h2>
        <p className="text-[#9a9a9a] text-sm max-w-md">
          {error.message || 'An unexpected error occurred while fetching dashboard data.'}
        </p>
        {error.digest && (
          <p className="text-[#5a5a5a] text-xs font-mono">Error ID: {error.digest}</p>
        )}
      </div>
      <button
        onClick={reset}
        className="flex items-center gap-2 px-5 py-2.5 bg-[#00ff88] text-black text-sm font-semibold rounded-lg hover:bg-[#00cc6a] transition-colors"
      >
        <RefreshCw size={16} />
        Try Again
      </button>
    </div>
  );
}
