import { Plus, Minus } from 'lucide-react';

interface CourtCounterProps {
  onIncrement: () => void;
  onDecrement: () => void;
  courtCount: number;
}

export function CourtCounter({
  courtCount,
  onDecrement,
  onIncrement,
}: CourtCounterProps) {
  return (
    <div className="flex items-center justify-between p-space-md rounded-lg bg-surface mt-space-xs shadow-inner">
      <div className="flex flex-col">
        <span className="font-label-md text-on-surface text-sm font-semibold">
          Jumlah Court Aktif
        </span>
        <span className="font-body-sm text-on-surface-variant text-xs">
          Kapasitas booking simultan
        </span>
      </div>
      <div className="flex items-center gap-space-sm bg-surface-container-high p-1 rounded-lg">
        <button
          type="button"
          onClick={onDecrement}
          className="w-8 h-8 rounded-md bg-surface flex items-center justify-center text-on-surface hover:text-primary active:scale-95 transition-transform"
        >
          <Minus className="material-symbols-outlined text-md" />
        </button>
        <div className="flex items-baseline gap-1">
          <span className="font-headline-sm text-sm text-primary font-bold min-w-[20px] text-center">
            {courtCount}
          </span>
          <span className="font-label-xs text-on-surface-variant font-semibold text-xs">
            Court
          </span>
        </div>
        <button
          type="button"
          onClick={onIncrement}
          className="w-8 h-8 rounded-md bg-surface flex items-center justify-center text-on-surface hover:text-primary active:scale-95 transition-transform"
        >
          <Plus className="material-symbols-outlined text-md" />
        </button>
      </div>
    </div>
  );
}
