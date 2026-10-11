export interface Amenity {
  icon: string;
  label: string;
  colorClass?: string;
}

export interface Venue {
  id: string;
  name: string;
  courtType: string;
  courtsCount: number;
  status: string;
  statusType: 'active' | 'tournament';
  pricePerHour: number;
  location: string;
  hours: string;
  recommendedShuttlecock: string;
  address: string;
  mapsUrl: string;
  imageUrl: string;
  amenities: Amenity[];
}

export interface SurfaceOption {
  value: string;
  title: string;
  description: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}
