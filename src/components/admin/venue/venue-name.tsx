import { Input } from '@/components/commons/input';
import { Building } from 'lucide-react';

interface VenueNameProps {
  name: string;
  onChange: (v: string) => void;
}

export function VenueName({ name, onChange }: VenueNameProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <Input
        label="Nama Lapangan / GOR"
        subLabel="Wajib"
        icon={
          <Building className="absolute left-3.5 text-on-surface-variant pointer-events-none w-5 h-5" />
        }
        inputId="input-venue-name"
        inputProps={{
          value: name,
          onChange: (e) => onChange(e.target.value),
          placeholder: 'mis. Smash Arena Premier Hub',
        }}
      />
    </div>
  );
}
