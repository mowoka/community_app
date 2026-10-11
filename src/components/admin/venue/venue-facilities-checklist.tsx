import { Facility } from '@/types/venue.type';
import {
  SquareCheck,
  CircleCheckBig,
  Lightbulb,
  ShowerHead,
  Car,
  Store,
  HeartCrack,
  AirVent,
  Wifi,
  Lock,
} from 'lucide-react';

interface Props {
  selectedFacilities: string[];
  onToggleFacility: (id: string) => void;
}

const DEFAULT_FACILITIES: Facility[] = [
  {
    id: 'light',
    name: 'Lampu Anti-Glare',
    description: 'Bebas silau LED BWF',
    icon: <Lightbulb className="w-4 h-4" />,
  },
  {
    id: 'shower',
    name: 'Shower Air Hangat',
    description: 'Water heater & bersih',
    icon: <ShowerHead className="w-4 h-4" />,
  },
  {
    id: 'parking',
    name: 'Parkir Luas',
    description: 'Area mobil, bus & motor',
    icon: <Car className="w-4 h-4" />,
  },
  {
    id: 'shop',
    name: 'Pro Shop & Senar',
    description: 'Mesin stringing 4 simpul',
    icon: <Store className="w-4 h-4" />,
  },
  {
    id: 'medical',
    name: 'Ruang Medis & P3K',
    description: 'P3K & ice pack cedera',
    icon: <HeartCrack className="w-4 h-4" />,
  },
  {
    id: 'lounge',
    name: 'Ruang AC & Lounge',
    description: 'Lounge & sofa nyaman',
    icon: <AirVent className="w-4 h-4" />,
  },
  {
    id: 'wifi',
    name: 'Free Wi-Fi',
    description: 'Koneksi cepat 100 Mbps',
    icon: <Wifi className="w-4 h-4" />,
  },
  {
    id: 'locker',
    name: 'Loker Penitipan',
    description: 'Kunci digital aman',
    icon: <Lock className="w-4 h-4" />,
  },
];

export function VenueFacilitiesChecklist({
  selectedFacilities,
  onToggleFacility,
}: Props) {
  return (
    <div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-md mt-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <SquareCheck className="material-symbols-outlined text-tertiary text-[20px]" />
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
            Fasilitas Tersedia
          </h3>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-xs text-label-xs font-semibold">
          {selectedFacilities.length} Dipilih
        </span>
      </div>

      <div className="grid grid-cols-2 gap-space-sm">
        {DEFAULT_FACILITIES.map((facility) => {
          const isActive = selectedFacilities.includes(facility.id);
          return (
            <button
              key={facility.id}
              type="button"
              onClick={() => onToggleFacility(facility.id)}
              className={`flex flex-col gap-1 p-space-sm rounded-xl text-left transition-all ${
                isActive
                  ? 'bg-primary/15 text-primary border border-primary/30'
                  : 'bg-surface-container-high text-on-surface-variant border border-transparent hover:bg-surface-bright'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                {facility.icon}

                <CircleCheckBig
                  className={`material-symbols-outlined w-5 h-5 ${
                    isActive ? 'block' : 'hidden'
                  }`}
                />
              </div>
              <span className="font-label-md text-label-md font-semibold text-on-surface block truncate">
                {facility.name}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant block truncate">
                {facility.description}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
