import { Venue } from '@/types/venue.type';

export const VENUES_DATA: Venue[] = [
  {
    id: '1',
    name: 'GOR Badminton Senayan Champion',
    courtType: 'Karpet Vinyl BWF',
    courtsCount: 4,
    status: 'Aktif',
    statusType: 'active',
    pricePerHour: 85000,
    location: 'Jakarta Pusat • Gelora',
    hours: '07:00 - 23:00 WIB',
    recommendedShuttlecock: 'Yonex Aerosensa 50 / JP Gold',
    address: 'Jl. Pintu Satu Senayan No. 1, Gelora, Tanah Abang, Jakarta Pusat',
    mapsUrl: 'https://maps.google.com/?q=GOR+Badminton+Senayan',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCxKDG4viW0L_nu6E0E_L3ZOMTz_Fqq6JM2K9pMjXcku7EaDI9dfse6yDdsXPC0v64-4qNWPAt6rI4Gwieh7KUhrYSyOBiCwp4pTjsPsWF_fyrT9cju21Ew0_2QoIv4VY5AOppuONxABlv_tfyVwfn-Jk1KWYU2Dthaezd8KSO0cRPTYBTFBZDsKXPKtppeEuaXMp9GF8BunmMw0tZJpG26Cp-nXTrabJHoaWK95-dwRcMKXy2ug3EDJA',
    amenities: [
      { icon: 'lightbulb', label: 'Lampu Anti-Glare' },
      { icon: 'shower', label: 'Shower Air Hangat' },
      { icon: 'directions_car', label: 'Parkir Luas' },
      { icon: 'storefront', label: 'Pro Shop & Senar' },
      { icon: 'medical_services', label: 'Ruang Medis & P3K' },
    ],
  },
  {
    id: '2',
    name: 'Candra Wijaya Badminton Center',
    courtType: 'Karpet Vinyl BWF',
    courtsCount: 8,
    status: 'Turnamen Siap',
    statusType: 'tournament',
    pricePerHour: 110000,
    location: 'Tangerang Selatan • Serpong',
    hours: '07:00 - 24:00 WIB',
    recommendedShuttlecock: 'Samurai Hijau / Victor Master No.1',
    address: 'Jl. Boulevard Raya Blok AA No. 15, Serpong, Tangerang Selatan',
    mapsUrl: 'https://maps.google.com/?q=Candra+Wijaya+Badminton',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVm6QkJ9es1t9tayd9W62O7tO54FVE-6Nq03V-mxOlzdaUQx6gi_M6HTfou7apzMdk_U1KYMku0_PR1HnDhP-0QS79x0dipYQi9zIm-enZ3TerWbfKRHqw_-Ju9z5MJ3yb_Uf6xdKRNeHJI1y6Gu5O0wBRG5Cwakz3j2vTfVmVJoMh_sTz9TdM592k_pr6sZqhucPftwj2McTv91E0q7gek7DzKaB3_z6scO6ieZVxAby4j8YZ1cNYOw',
    amenities: [
      { icon: 'lightbulb', label: 'Lampu Anti-Glare' },
      { icon: 'shower', label: 'Shower Air Hangat' },
      { icon: 'directions_car', label: 'Parkir Luas' },
      { icon: 'storefront', label: 'Pro Shop & Senar' },
      { icon: 'ac_unit', label: 'Ruang AC & Lounge' },
    ],
  },
  {
    id: '3',
    name: 'Tangkis Smash Arena Kemang',
    courtType: 'Kayu Parket Interlock',
    courtsCount: 4,
    status: 'Aktif',
    statusType: 'active',
    pricePerHour: 120000,
    location: 'Jakarta Selatan • Kemang',
    hours: '08:00 - 01:00 WIB',
    recommendedShuttlecock: 'Li-Ning A+600 / Dextra Pro',
    address: 'Jl. Kemang Timur No. 42, Mampang Prapatan, Jakarta Selatan',
    mapsUrl: 'https://maps.google.com/?q=Tangkis+Smash+Kemang',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEFubRd04J1lJHyxvtR-TAp5uEdu8M4A258-2BvwvT0vJihCdYBb2Sn8IjnG918oHi4UJNtQPrXWR4QbdyArdqnH-gjjXn16kwL1045cwF0EwmMERBD_SsBN7qdoPI_CbsCHdgp6aIAuer7sC4XZYmSGWbxmZns8XILRYxC0ge6MehM_FUrftiI4xRodlggGDiUFKKwATp72MfyWpWi2ra7fGzRb3xZn9WtnM5gpBq2gahXO8NEe5VPQ',
    amenities: [
      { icon: 'lightbulb', label: 'Lampu Anti-Glare' },
      { icon: 'shower', label: 'Shower Air Hangat' },
      { icon: 'ac_unit', label: 'Ruang AC & Lounge' },
      { icon: 'directions_car', label: 'Parkir Luas' },
      { icon: 'storefront', label: 'Pro Shop & Senar' },
    ],
  },
];

export const FILTER_CATEGORIES = [
  { id: 'all', label: 'Semua (4 GOR)' },
  { id: 'Karpet Vinyl BWF', label: 'Karpet Vinyl BWF' },
  { id: 'Parket Kayu', label: 'Parket Kayu' },
  { id: 'Taraflex', label: 'Taraflex' },
  { id: 'Coran semen', label: 'coran-semen' },
  { id: 'Lantai Keramik', label: 'lantai-keramik' },
];
