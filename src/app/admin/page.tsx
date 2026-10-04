'use client';

import { GreetingSection } from '@/components/admin/home/greeting';
import { Header } from '@/components/admin/header';
import { HeroBanner } from '@/components/admin/home/hero-banner';
import { OperationsGrid } from '@/components/admin/home/operation-grid';
import { MobileScreenWrapper } from '@/components/commons/mobile-screen-wrapper';

export default function Home() {
  return (
    <MobileScreenWrapper showBottomMenu>
      <Header />
      <GreetingSection />
      <HeroBanner />
      <OperationsGrid />
    </MobileScreenWrapper>
  );
}
