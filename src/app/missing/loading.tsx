export default function MissingLoading() {
  return (
    <div className="max-w-3xl space-y-6 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="h-6 w-6 rounded bg-[#141414]" />
        <div className="space-y-2">
          <div className="h-8 w-48 rounded-lg bg-[#141414]" />
          <div className="h-4 w-72 rounded bg-[#141414]" />
        </div>
      </div>
      <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-5 flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-10 w-12 rounded-lg bg-[#1e1e1e]" />
          <div className="h-4 w-44 rounded bg-[#1e1e1e]" />
          <div className="h-4 w-56 rounded bg-[#1e1e1e]" />
        </div>
        <div className="h-11 w-48 rounded-lg bg-[#1e1e1e]" />
      </div>
      {[0, 1].map((i) => (
        <div key={i} className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 rounded bg-[#1e1e1e]" />
            <div className="h-5 w-32 rounded bg-[#1e1e1e]" />
          </div>
          <div className="flex justify-between">
            <div className="grid grid-cols-3 gap-6 flex-1">
              {[0, 1, 2].map((j) => (
                <div key={j} className="space-y-1.5">
                  <div className="h-3 w-20 rounded bg-[#1e1e1e]" />
                  <div className="h-4 w-28 rounded bg-[#1e1e1e]" />
                </div>
              ))}
            </div>
            <div className="h-10 w-44 rounded-lg bg-[#1e1e1e] ml-4" />
          </div>
        </div>
      ))}
    </div>
  );
}
