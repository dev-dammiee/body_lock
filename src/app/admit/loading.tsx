export default function AdmitLoading() {
  return (
    <div className="max-w-2xl space-y-6 animate-pulse">
      <div className="space-y-2">
        <div className="h-8 w-36 rounded-lg bg-[#141414]" />
        <div className="h-4 w-64 rounded bg-[#141414]" />
      </div>
      <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-6 space-y-5">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="space-y-1.5">
            <div className="h-4 w-28 rounded bg-[#1e1e1e]" />
            <div className="h-11 w-full rounded-lg bg-[#1e1e1e]" />
          </div>
        ))}
      </div>
      <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-6 space-y-4">
        <div className="h-5 w-48 rounded bg-[#1e1e1e]" />
        <div className="h-11 w-full rounded-lg bg-[#1e1e1e]" />
      </div>
      <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-6 space-y-4">
        <div className="h-5 w-56 rounded bg-[#1e1e1e]" />
        <div className="h-40 w-full rounded-lg bg-[#1e1e1e]" />
      </div>
      <div className="h-12 w-full rounded-xl bg-[#141414]" />
    </div>
  );
}
