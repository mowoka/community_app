import { MobileScreenWrapper } from '@/components/commons/mobile-screen-wrapper';
import { ActionButtons } from '@/components/welcome/action-buttons';
import { FeaturedEvent } from '@/components/welcome/featured-event';
import { HeroSection } from '@/components/welcome/hero-section';
import { TacticalFeatures } from '@/components/welcome/tactical-featured';

export default function Home() {
  return (
    <MobileScreenWrapper>
      <HeroSection />
      <TacticalFeatures />
      <FeaturedEvent />
      <ActionButtons />
    </MobileScreenWrapper>
  );
}
