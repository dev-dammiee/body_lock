type BadgeVariant = 'released' | 'scan' | 'admitted' | 'seen' | 'md-notified' | 'notification-sent';

interface BadgeProps {
  variant: BadgeVariant;
  label?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  released: 'bg-[#00ff88] text-black',
  scan: 'bg-[#1e1e1e] text-[#9a9a9a] border border-[#2a2a2a]',
  admitted: 'bg-[#1e1e1e] text-[#9a9a9a] border border-[#2a2a2a]',
  seen: 'bg-[#1e1e1e] text-white border border-[#2a2a2a]',
  'md-notified': 'bg-[#00ff88] text-black',
  'notification-sent': 'bg-[#1e4a2e] text-[#00ff88] border border-[#00ff88]/30',
};

const defaultLabels: Record<BadgeVariant, string> = {
  released: 'Body Released',
  scan: 'Daily Scan',
  admitted: 'Body Admitted',
  seen: 'SEEN',
  'md-notified': 'MD NOTIFIED',
  'notification-sent': 'Notification Sent',
};

export default function Badge({ variant, label }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold tracking-wide ${variantStyles[variant]}`}
    >
      {label ?? defaultLabels[variant]}
    </span>
  );
}
