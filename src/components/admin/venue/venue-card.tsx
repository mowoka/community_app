import { Venue } from '@/types/venue.type';
import Image from 'next/image';
import {
  MapPin,
  Award,
  Link as LinkIcon,
  Zap,
  ShowerHead,
  Car,
  Store,
  ShieldCheck,
  Wind,
  ExternalLink,
  Copy,
  Edit,
  Trash2,
  LucideIcon,
} from 'lucide-react';
interface Props {
  venue: Venue;
}

const AMENITY_ICON_MAP: Record<string, { icon: LucideIcon; color: string }> = {
  lightbulb: { icon: Zap, color: 'text-primary' },
  shower: { icon: ShowerHead, color: 'text-secondary' },
  directions_car: { icon: Car, color: 'text-tertiary' },
  storefront: { icon: Store, color: 'text-primary' },
  medical_services: { icon: ShieldCheck, color: 'text-secondary' },
  ac_unit: { icon: Wind, color: 'text-secondary' },
};

export function VenueCard({ venue }: Props) {
  return (
    <article className="flex flex-col bg-surface-container-low rounded-xl p-space-md shadow-sm space-y-space-md">
      {/* Header Info */}
      <HeaderInfo venue={venue} />
      {/* Image Banner */}
      <ImageBanner venue={venue} />
      {/* Details */}
      <VenueDetail venue={venue} />

      {/* Amenities Chips */}
      <div className="flex flex-wrap gap-1.5 pt-0.5">
        {venue.amenities.map((item, index) => {
          const mapped = AMENITY_ICON_MAP[item.icon];
          const IconComponent = mapped?.icon || Zap;
          const colorClass = item.colorClass || mapped?.color || 'text-primary';

          return (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-surface-container font-label-xs text-label-xs text-on-surface-variant"
            >
              <IconComponent className={`w-3.5 h-3.5 ${colorClass}`} />
              {item.label}
            </span>
          );
        })}
      </div>

      {/* Action Buttons */}
      <VenueActionButton venue={venue} />
    </article>
  );
}

function HeaderInfo({ venue }: Props) {
  return (
    <div className="flex items-start justify-between gap-space-sm">
      <div className="flex flex-col min-w-0">
        <div className="flex items-center flex-wrap gap-space-xs mb-1">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full font-label-xs text-label-xs bg-primary/15 text-primary">
            {venue.courtType} • {venue.courtsCount} Court
          </span>
          <span
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-label-xs text-label-xs ${
              venue.statusType === 'active'
                ? 'bg-secondary-container/20 text-secondary'
                : 'bg-tertiary-container/30 text-tertiary'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                venue.statusType === 'active' ? 'bg-secondary' : 'bg-tertiary'
              }`}
            />
            {venue.status}
          </span>
        </div>
        <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface truncate">
          {venue.name}
        </h3>
      </div>
    </div>
  );
}

function ImageBanner({ venue }: Props) {
  return (
    <div className="relative w-full h-28 rounded-lg overflow-hidden bg-surface-container">
      <Image
        src={venue.imageUrl}
        alt={venue.name}
        fill
        className="object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent" />

      {/* Price Badge */}
      <div className="absolute top-2 right-2.5">
        <span className="font-label-xs text-label-xs font-bold bg-primary text-on-primary px-2 py-0.5 rounded-md shadow-sm">
          Rp {venue.pricePerHour.toLocaleString('id-ID')} / Jam
        </span>
      </div>

      {/* Location & Hours Overlay */}
      <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-on-surface">
        <span className="font-label-xs text-label-xs text-secondary-fixed flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5" />
          {venue.location}
        </span>
        <span className="font-label-xs text-label-xs bg-surface-container-lowest/80 px-2 py-0.5 rounded text-on-surface-variant">
          {venue.hours}
        </span>
      </div>
    </div>
  );
}

function VenueDetail({ venue }: Props) {
  return (
    <div className="flex flex-col gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
      {/* Shuttlecock Recommendation */}
      <div className="flex items-center gap-space-xs bg-surface-container/60 px-2 py-1.5 rounded-lg">
        <Award className="w-3.5 h-3.5 text-tertiary flex-shrink-0" />
        <span className="text-[11px] font-medium text-on-surface-variant">
          Shuttlecock Rekomendasi:
        </span>
        <span className="text-[11px] font-semibold text-primary">
          {venue.recommendedShuttlecock}
        </span>
      </div>

      {/* Full Address */}
      <div className="flex items-start gap-space-xs pt-0.5">
        <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
        <span className="line-clamp-2 text-on-surface">{venue.address}</span>
      </div>

      {/* Short Map Link */}
      <div className="flex items-center gap-space-xs">
        <LinkIcon className="w-3.5 h-3.5 text-outline flex-shrink-0" />
        <span className="truncate text-secondary font-label-md text-label-md select-all">
          {venue.mapsUrl.replace(/^https?:\/\//, '')}
        </span>
      </div>
    </div>
  );
}

function VenueActionButton({ venue }: Props) {
  const handleCopyLink = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(venue.mapsUrl);
    }
  };
  return (
    <div className="grid grid-cols-4 gap-space-xs pt-space-xs">
      <a
        href={venue.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface transition-colors"
      >
        <ExternalLink className="w-4 h-4 text-secondary" />
        <span className="font-label-xs text-label-xs mt-1 truncate">
          Buka Maps
        </span>
      </a>

      <button
        type="button"
        onClick={handleCopyLink}
        className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface transition-colors"
      >
        <Copy className="w-4 h-4 text-primary" />
        <span className="font-label-xs text-label-xs mt-1 truncate">
          Salin Link
        </span>
      </button>

      <button
        type="button"
        onClick={() => {}}
        className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface transition-colors"
      >
        <Edit className="w-4 h-4 text-tertiary" />
        <span className="font-label-xs text-label-xs mt-1 truncate">Edit</span>
      </button>

      <button
        type="button"
        onClick={() => {}}
        className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-error-container/20 hover:bg-error-container/40 text-error transition-colors"
      >
        <Trash2 className="w-4 h-4" />
        <span className="font-label-xs text-label-xs mt-1 truncate">Hapus</span>
      </button>
    </div>
  );
}
