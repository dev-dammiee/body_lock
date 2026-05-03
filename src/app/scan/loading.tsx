export default function ScanLoading() {
  return (
    <div className="max-w-4xl space-y-6 animate-pulse">
      <div className="space-y-2">
        <div className="h-8 w-40 rounded-lg bg-[#141414]" />
        <div className="h-4 w-72 rounded bg-[#141414]" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[0, 1].map((i) => (
          <div key={i} className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-5 space-y-4">
            <div className="h-5 w-36 rounded bg-[#1e1e1e]" />
            <div className="h-10 w-full rounded-lg bg-[#1e1e1e]" />
            <div className="h-10 w-full rounded-lg bg-[#1e1e1e]" />
          </div>
        ))}
      </div>
      <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-5 space-y-3">
        <div className="h-5 w-40 rounded bg-[#1e1e1e]" />
        <div className="flex gap-3">
          <div className="flex-1 h-11 rounded-lg bg-[#1e1e1e]" />
          <div className="w-28 h-11 rounded-lg bg-[#1e1e1e]" />
        </div>
      </div>
      <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-[#1e1e1e]">
          <div className="h-5 w-44 rounded bg-[#1e1e1e]" />
        </div>
        {[0, 1, 2].map((i) => (
          <div key={i} className="px-5 py-4 border-b border-[#1e1e1e] last:border-0 flex gap-6">
            <div className="h-4 w-28 rounded bg-[#1e1e1e]" />
            <div className="h-4 w-36 rounded bg-[#1e1e1e]" />
            <div className="h-4 w-24 rounded bg-[#1e1e1e]" />
            <div className="h-4 w-24 rounded bg-[#1e1e1e]" />
          </div>
        ))}
      </div>
    </div>
  );
}
