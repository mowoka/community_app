import { Input } from '@/components/commons/input';
import { Search } from 'lucide-react';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchInput({ value, onChange }: Props) {
  return (
    <div className="mt-4">
      <Input
        inputId="venue-search-input"
        icon={
          <Search className="absolute left-3.5 text-on-surface-variant pointer-events-none w-5 h-5" />
        }
        inputProps={{
          type: 'text',
          placeholder: 'Cari nama lapangan, area, atau kota...',
          onChange,
          value,
        }}
      />
    </div>
  );
}
