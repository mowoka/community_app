import { CheckCircle, Radio } from 'lucide-react';

export function VenueSync() {
  return (
    <div className="flex items-center justify-between p-space-md bg-surface-container-high rounded-xl">
      <div className="flex items-center gap-space-sm">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
          <Radio className="material-symbols-outlined text-[22px]" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
            Sinkronisasi Jadwal Otomatis
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
            3 venue terhubung live roster match
          </span>
        </div>
      </div>
      <CheckCircle className="material-symbols-outlined text-primary text-[20px]" />
    </div>
  );
}
