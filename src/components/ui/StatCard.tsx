import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: number | string;
  label: string;
  variant?: 'default' | 'danger';
}

export default function StatCard({ icon: Icon, value, label, variant = 'default' }: StatCardProps) {
  const valueColor = variant === 'danger' ? 'text-[#ff2d6b]' : 'text-[#00ff88]';
  const iconColor = variant === 'danger' ? 'text-[#ff2d6b]' : 'text-[#00ff88]';

  return (
    <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-5 flex flex-col gap-3">
      <Icon size={22} className={iconColor} />
      <p className={`text-4xl font-bold ${valueColor}`}>{value}</p>
      <p className="text-[#9a9a9a] text-sm leading-tight">{label}</p>
    </div>
  );
}
