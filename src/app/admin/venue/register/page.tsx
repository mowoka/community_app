'use client';

import { Header } from '@/components/admin/header';
import { VenueCoreProfile } from '@/components/admin/venue/venue-core-profile';
import { VenueFacilitiesChecklist } from '@/components/admin/venue/venue-facilities-checklist';
import { VenueHeroPreview } from '@/components/admin/venue/venue-hero-preview';
import { VenueLocationDetail } from '@/components/admin/venue/venue-location-detail';
import { VenuePricingHours } from '@/components/admin/venue/venue-pricing-hours';
import { VenueTitle } from '@/components/admin/venue/venue-title';
import { MobileScreenWrapper } from '@/components/commons/mobile-screen-wrapper';
import { Camera } from 'lucide-react';
import { useState } from 'react';

export default function VenueRegister() {
  const [venueName, setVenueName] = useState('');
  const [surface, setSurface] = useState('bwf-vinyl');
  const [courtCount, setCourtCount] = useState(4);
  const [shuttlecockBrand, setShuttlecockBrand] = useState(
    'Yonex Aerosensa 50 & JP Gold',
  );

  const [address, setAddress] = useState(
    'Jl. Pintu Satu Senayan No. 1, Gelora, Tanah Abang, Jakarta Pusat',
  );
  const [mapsUrl, setMapsUrl] = useState(
    'https://maps.google.com/?q=GOR+Badminton+Senayan+Champion+Jakarta',
  );

  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([
    'light',
    'shower',
    'parking',
    'shop',
    'medical',
    'lounge',
  ]);

  const [hourlyRate, setHourlyRate] = useState('85.000');
  const [openTime, setOpenTime] = useState('07:00 WIB');
  const [closeTime, setCloseTime] = useState('23:00 WIB');

  const [showToast, setShowToast] = useState(false);

  const handleToggleFacility = (id: string) => {
    setSelectedFacilities((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleSubmit = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2800);
  };
  return (
    <MobileScreenWrapper>
      <Header />
      <VenueTitle
        title="Daftarkan Lapangan"
        description="Tambah Lapangan Badminton"
        showButton={false}
        shoBackButton
      />
      <VenueHeroPreview />
      <VenueCoreProfile
        venueName={venueName}
        setVenueName={setVenueName}
        surface={surface}
        setSurface={setSurface}
        courtCount={courtCount}
        setCourtCount={setCourtCount}
        shuttlecockBrand={shuttlecockBrand}
        setShuttlecockBrand={setShuttlecockBrand}
      />
      <VenueLocationDetail
        address={address}
        setAddress={setAddress}
        mapsUrl={mapsUrl}
        setMapsUrl={setMapsUrl}
      />
      <VenueFacilitiesChecklist
        selectedFacilities={selectedFacilities}
        onToggleFacility={handleToggleFacility}
      />
      <VenuePricingHours
        hourlyRate={hourlyRate}
        setHourlyRate={setHourlyRate}
        openTime={openTime}
        setOpenTime={setOpenTime}
        closeTime={closeTime}
        setCloseTime={setCloseTime}
      />
      <div className="flex flex-col gap-space-sm pt-space-xs">
        <button
          type="button"
          onClick={() => {}}
          className="w-full h-12 rounded-xl bg-gradient-to-r from-primary-container to-primary text-on-primary-container font-label-lg flex items-center justify-center gap-space-xs shadow-md active:scale-[0.98] transition-transform font-bold"
        >
          <Camera className="material-symbols-outlined" />
          <span>Daftarkan Venue</span>
        </button>
        <button
          onClick={() => {}}
          className="w-full h-11 rounded-xl bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md flex items-center justify-center transition-colors font-medium"
        >
          Kembali / Batal
        </button>
      </div>
    </MobileScreenWrapper>
  );
}
