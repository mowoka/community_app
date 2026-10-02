import { MobileScreenWrapper } from '@/components/commons/mobile-screen-wrapper';
import { ActionButtons } from '@/components/welcome/ActionButton';
import { FeaturedEvent } from '@/components/welcome/FeaturedEvent';
import { HeroSection } from '@/components/welcome/HeroSection';
import { TacticalFeatures } from '@/components/welcome/TacticalFeatures';

export default function Home() {
  return (
    <MobileScreenWrapper>
      <div className="px-5 py-5">
        <HeroSection />
        <TacticalFeatures />
        <FeaturedEvent />
        <ActionButtons />
      </div>
    </MobileScreenWrapper>
  );
}
