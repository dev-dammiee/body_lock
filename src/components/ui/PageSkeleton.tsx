interface PageSkeletonProps {
  rows?: number;
  cards?: number;
}

export default function PageSkeleton({ rows = 4, cards = 0 }: PageSkeletonProps) {
  return (
    <div className="space-y-6">
      {/* Header skeleton */}
      <div className="space-y-2">
        <div className="h-8 w-48 rounded-lg shimmer" />
        <div className="h-4 w-72 rounded-lg shimmer" />
      </div>

      {/* Stat cards skeleton */}
      {cards > 0 && (
        <div className={`grid grid-cols-${cards} gap-4`}>
          {Array.from({ length: cards }).map((_, i) => (
            <div key={i} className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-5 space-y-3">
              <div className="h-5 w-5 rounded shimmer" />
              <div className="h-10 w-20 rounded-lg shimmer" />
              <div className="h-4 w-28 rounded shimmer" />
            </div>
          ))}
        </div>
      )}

      {/* Rows skeleton */}
      <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl overflow-hidden">
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className="px-5 py-4 border-b border-[#1e1e1e] last:border-0 flex items-center gap-4"
          >
            <div className="h-5 w-24 rounded shimmer" />
            <div className="h-5 w-32 rounded shimmer" />
            <div className="flex-1 h-4 rounded shimmer" />
            <div className="h-4 w-40 rounded shimmer" />
          </div>
        ))}
      </div>
    </div>
  );
}
