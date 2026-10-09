import { Venue } from '@/types/venue.type';
import { VenueCard } from './venue-card';

interface Props {
  venue: Venue[];
}

export function VenueList({ venue }: Props) {
  return (
    <div className="flex flex-col gap-space-md my-5">
      {venue.length > 0 ? (
        venue.map((venue) => (
          <VenueCard
            key={venue.id}
            venue={venue}
          />
        ))
      ) : (
        <p className="text-center py-8 text-on-surface-variant text-body-md">
          Tidak ada venue yang sesuai dengan pencarian.
        </p>
      )}
    </div>
  );
}
