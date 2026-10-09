import { Chip } from '@/components/commons/chip';
import { FILTER_CATEGORIES } from '@/constants/venue';

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export function VenueCategory({ value, onChange }: Props) {
  return (
    <div className="mt-4 flex items-center gap-space-xs overflow-x-auto no-scrollbar -mx-margin-mobile px-margin-mobile py-0.5">
      {FILTER_CATEGORIES.map((chip) => {
        return (
          <Chip
            isActive={chip.id === value}
            key={chip.id}
            onClick={() => onChange(chip.id)}
            label={chip.label}
          />
        );
      })}
    </div>
  );
}
