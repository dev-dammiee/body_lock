export default function ReleaseLoading() {
  return (
    <div className="max-w-2xl space-y-6 animate-pulse">
      <div className="space-y-2">
        <div className="h-8 w-36 rounded-lg bg-[#141414]" />
        <div className="h-4 w-80 rounded bg-[#141414]" />
      </div>
      <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-5 space-y-4">
        <div className="h-5 w-28 rounded bg-[#1e1e1e]" />
        <div className="h-36 w-full rounded-lg bg-[#1e1e1e]" />
        <div className="flex gap-3">
          <div className="flex-1 h-11 rounded-lg bg-[#1e1e1e]" />
          <div className="w-24 h-11 rounded-lg bg-[#1e1e1e]" />
        </div>
      </div>
    </div>
  );
}
