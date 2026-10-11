import { Input } from '@/components/commons/input';
import { MapPin, Map } from 'lucide-react';

interface Props {
  address: string;
  setAddress: (val: string) => void;
  mapsUrl: string;
  setMapsUrl: (val: string) => void;
}

export function VenueLocationDetail({
  address,
  setAddress,
  mapsUrl,
  setMapsUrl,
}: Props) {
  return (
    <section className="flex flex-col gap-space-sm bg-surface-container-low p-space-lg rounded-xl shadow-sm mt-5">
      <div className="flex items-center gap-space-xs">
        <MapPin className="material-symbols-outlined text-secondary text-[20px]" />
        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
          2. Lokasi & Alamat
        </h3>
      </div>

      <div className="flex flex-col gap-space-xs">
        <label
          className="font-label-md text-label-md text-on-surface-variant"
          htmlFor="addressInput"
        >
          Alamat Lengkap <span className="text-error">*</span>
        </label>
        <textarea
          id="addressInput"
          required
          rows={3}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-space-md rounded-lg bg-surface text-on-surface font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none shadow-inner"
        />
      </div>

      <div className="relative flex flex-col gap-space-xs">
        <Input
          label="Link Google Maps Address"
          inputId="input-google-map-address"
          inputStyle="w-full h-11 pl-space-md pr-10 rounded-lg bg-surface text-on-surface font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary transition-all truncate shadow-inner text-white"
          inputProps={{
            required: true,
            value: mapsUrl,
            onChange: (e) => setMapsUrl(e.target.value),
          }}
        />
        <Map className="material-symbols-outlined text-[18px] text-secondary absolute right-3 bottom-3 pointer-events-none w-4 h-4 " />
      </div>
    </section>
  );
}
