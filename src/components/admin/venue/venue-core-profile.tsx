import { Trophy } from 'lucide-react';
import { VenueName } from './venue-name';
import { CourtSurfaceSelector } from './court-surface-selector';
import { CourtCounter } from './court-counter';
import { ShuttlecockSelector } from './shuttlecock-selector';

interface Props {
  venueName: string;
  setVenueName: (val: string) => void;
  surface: string;
  setSurface: (val: string) => void;
  courtCount: number;
  setCourtCount: React.Dispatch<React.SetStateAction<number>>;
  shuttlecockBrand: string;
  setShuttlecockBrand: (val: string) => void;
}

export function VenueCoreProfile({
  venueName,
  setVenueName,
  surface,
  setSurface,
  courtCount,
  setCourtCount,
  shuttlecockBrand,
  setShuttlecockBrand,
}: Props) {
  const handleDecrement = () => setCourtCount((prev) => Math.max(1, prev - 1));
  const handleIncrement = () => setCourtCount((prev) => Math.min(16, prev + 1));
  return (
    <section className="flex flex-col gap-space-sm bg-surface-container-low p-space-lg rounded-xl shadow-sm mt-5">
      <div className="flex items-center gap-space-xs pb-space-xs">
        <Trophy className="material-symbols-outlined text-primary text-[20px]" />
        <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
          Informasi Utama Lapangan
        </h3>
      </div>

      {/* Venue Name */}
      <VenueName
        name={venueName}
        onChange={(v) => setVenueName(v)}
      />

      {/* Court Surface Selector */}
      <CourtSurfaceSelector
        value={surface}
        onSelected={(v) => setSurface(v)}
      />

      {/* Court Counter */}
      <CourtCounter
        courtCount={courtCount}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />

      {/* Shuttlecock Selector */}
      <ShuttlecockSelector
        shuttlecockBrand={shuttlecockBrand}
        onChange={(v) => setShuttlecockBrand(v)}
      />
    </section>
  );
}
