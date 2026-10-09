'use client';

import { Header } from '@/components/admin/header';
import { SearchInput } from '@/components/admin/venue/search-input';
import { VenueCategory } from '@/components/admin/venue/venue-category';
import { VenueList } from '@/components/admin/venue/venue-list';
import { VenueSync } from '@/components/admin/venue/venue-sync';
import { VenueTitle } from '@/components/admin/venue/venue-title';
import { MobileScreenWrapper } from '@/components/commons/mobile-screen-wrapper';
import { VENUES_DATA } from '@/constants/venue';
import { useMemo, useState } from 'react';

export default function VenuePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const filteredVenues = useMemo(() => {
    return VENUES_DATA.filter((venue) => {
      const matchesSearch =
        venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        venue.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        venue.address.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilter =
        selectedFilter === 'all' || venue.courtType.includes(selectedFilter);

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, selectedFilter]);
  return (
    <MobileScreenWrapper>
      <Header />
      <VenueTitle
        title="Manajemen Lapangan"
        description="Kelola venue &amp; gor badminton komunitas"
        onClick={() => {}}
      />
      <SearchInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <VenueCategory
        value={selectedFilter}
        onChange={(v) => setSelectedFilter(v)}
      />
      <VenueList venue={filteredVenues} />
      <VenueSync />
    </MobileScreenWrapper>
  );
}
