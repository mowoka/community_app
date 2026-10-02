import { Lock } from 'lucide-react';

export function SecurityBadge() {
  return (
    <div className="mt-4 mb-2 flex items-center justify-center gap-1.5 text-center">
      <Lock className="w-4 h-4 text-primary shrink-0" />
      <span className="text-xs text-on-surface-variant tracking-wide">
        End-to-end encrypted admin access
      </span>
    </div>
  );
}
