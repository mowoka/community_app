import { SURFACE_OPTIONS } from '@/constants/venue';
import { SurfaceOption } from '@/types/venue.type';

interface CourtSurfaceSelectorProps {
  value: string;
  onSelected: (v: string) => void;
}

export function CourtSurfaceSelector({
  value,
  onSelected,
}: CourtSurfaceSelectorProps) {
  return (
    <div className="flex flex-col gap-2 pt-space-xs mt-2">
      <label className="font-label-md text-on-surface-variant text-sm">
        Jenis Lantai / Court
      </label>
      <div className="grid grid-cols-1 gap-space-xs">
        {SURFACE_OPTIONS.map((opt, index) => (
          <CourtItem
            opt={opt}
            key={index}
            value={value}
            onSelected={(v) => onSelected(v)}
          />
        ))}
      </div>
    </div>
  );
}

interface CourtItemProps {
  opt: SurfaceOption;
  value: string;
  onSelected: (v: string) => void;
}

function CourtItem({ opt, value, onSelected }: CourtItemProps) {
  return (
    <label
      key={opt.value}
      onClick={() => onSelected(opt.value)}
      className={`flex items-center justify-between p-space-sm rounded-lg cursor-pointer transition-all hover:bg-surface-bright/95 ${
        value === opt.value
          ? 'bg-surface-container-high'
          : 'bg-surface-container-low'
      }`}
    >
      <div className="flex items-center gap-space-sm">
        <div>
          <span className="font-label-md text-label-md text-on-surface block font-bold">
            {opt.title}
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant block">
            {opt.description}
          </span>
        </div>
      </div>
      <input
        type="radio"
        name="court-surface"
        value={opt.value}
        checked={value === opt.value}
        onChange={() => onSelected(opt.value)}
        className="accent-primary w-4 h-4 cursor-pointer"
      />
    </label>
  );
}
