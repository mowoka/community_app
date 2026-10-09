import { Plus } from 'lucide-react';
import { Button } from '@/components/commons/button';

interface Props {
  title: string;
  description: string;
  onClick: () => void;
}

export function VenueTitle({ title, description, onClick }: Props) {
  return (
    <div className="flex flex-col gap-space-xs pt-space-xs mt-2">
      <div className="flex items-center justify-between gap-space-sm">
        <div className="flex flex-col min-w-0 ">
          <h2 className="text-headline-sm font-bold tracking-tight text-on-surface">
            {title}
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
            {description}
          </p>
        </div>

        <Button
          className="max-w-37.5"
          onClick={onClick}
          btnText="Tambah"
          variant="filled"
          leftIcon={
            <Plus className="w-5 h-5 transition-transform group-hover:scale-110" />
          }
        />
      </div>
    </div>
  );
}
