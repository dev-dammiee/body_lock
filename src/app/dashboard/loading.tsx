export default function DashboardLoading() {
  return (
    <div className="space-y-6 max-w-6xl animate-pulse">
      {/* Alert banner skeleton */}
      <div className="h-16 rounded-xl bg-[#141414] border border-[#1e1e1e]" />

      {/* Stats grid skeleton */}
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-5 space-y-3">
            <div className="h-5 w-5 rounded bg-[#1e1e1e]" />
            <div className="h-10 w-20 rounded-lg bg-[#1e1e1e]" />
            <div className="h-4 w-28 rounded bg-[#1e1e1e]" />
          </div>
        ))}
      </div>

      {/* Recent activity skeleton */}
      <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-[#1e1e1e]">
          <div className="h-5 w-36 rounded bg-[#1e1e1e]" />
        </div>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="px-5 py-4 border-b border-[#1e1e1e] last:border-0 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-6 w-24 rounded bg-[#1e1e1e]" />
              <div className="space-y-1.5">
                <div className="h-4 w-28 rounded bg-[#1e1e1e]" />
                <div className="h-3 w-44 rounded bg-[#1e1e1e]" />
              </div>
            </div>
            <div className="h-3 w-36 rounded bg-[#1e1e1e]" />
          </div>
        ))}
      </div>
    </div>
  );
}
