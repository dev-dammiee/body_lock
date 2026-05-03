export default function AuditLoading() {
  return (
    <div className="max-w-5xl space-y-6 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="h-6 w-6 rounded bg-[#141414]" />
        <div className="space-y-2">
          <div className="h-8 w-48 rounded-lg bg-[#141414]" />
          <div className="h-4 w-56 rounded bg-[#141414]" />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex-1 h-11 rounded-lg bg-[#141414]" />
        <div className="w-36 h-11 rounded-lg bg-[#141414]" />
        <div className="w-48 h-11 rounded-lg bg-[#141414]" />
      </div>
      <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl overflow-hidden">
        <div className="px-5 py-3 border-b border-[#1e1e1e] flex gap-8">
          {[80, 60, 40, 100, 120].map((w, i) => (
            <div key={i} className={`h-3 w-${w} rounded bg-[#1e1e1e]`} />
          ))}
        </div>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="px-5 py-4 border-b border-[#1e1e1e] last:border-0 flex gap-8 items-center">
            <div className="h-4 w-36 rounded bg-[#1e1e1e]" />
            <div className="h-4 w-24 rounded bg-[#1e1e1e]" />
            <div className="h-6 w-16 rounded bg-[#1e1e1e]" />
            <div className="h-4 w-40 rounded bg-[#1e1e1e]" />
            <div className="h-4 w-36 rounded bg-[#1e1e1e]" />
          </div>
        ))}
      </div>
    </div>
  );
}
