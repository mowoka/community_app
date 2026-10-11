import { Input } from '@/components/commons/input';
import { SHUTTLECOCK_PRESETS } from '@/constants/venue';
import { Flag } from 'lucide-react';

interface Props {
  shuttlecockBrand: string;
  onChange: (v: string) => void;
}

export function ShuttlecockSelector({ shuttlecockBrand, onChange }: Props) {
  return (
    <div className="flex flex-col gap-space-xs">
      <div className="relative">
        <Input
          label="Brand Shuttlecock Resmi / Rekomendasi"
          subLabel="Disarankan BWF / PBSI"
          inputId="input-shuttlecock-brand"
          inputStyle="w-full h-11 pl-space-md pr-10 rounded-lg bg-surface text-on-surface font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary transition-all shadow-inner text-white"
          inputProps={{
            value: shuttlecockBrand,
            onChange: (e) => onChange(e.target.value),
          }}
        />
        <Flag className="material-symbols-outlined text-xs w-4 h-4 text-tertiary absolute right-3 bottom-3 pointer-events-none" />
      </div>
      <div className="flex flex-wrap gap-1.5 pt-1">
        {SHUTTLECOCK_PRESETS.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => onChange(preset)}
            className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-label-xs font-label-xs hover:text-primary hover:bg-surface-bright/95 transition-colors"
          >
            {preset}
          </button>
        ))}
      </div>
    </div>
  );
}
