import '@/styles/home-animations.css';
import VineTrail from '@/components/home/VineTrail';
import HeroLogoVideo from '@/components/home/HeroLogoVideo';
import HealingCycle from '@/components/home/HealingCycle';
import HealingStories from '@/components/home/HealingStories';
import HealingTargets from '@/components/home/HealingTargets';
import PackagesCarousel from '@/components/home/PackagesCarousel';
import OfferBanner from '@/components/home/OfferBanner';
import HealingMethods from '@/components/home/HealingMethods';
import HealingTeam from '@/components/home/HealingTeam';
import GalleryPreview from '@/components/home/GalleryPreview';
import CTASection from '@/components/CTASection';

export default function Home() {
  // VineTrail measures its direct children (each section) to route the vine, so keep them as direct children.
  return (
    <VineTrail>
      <HeroLogoVideo />
      <HealingCycle />
      <HealingStories />
      <HealingTargets />
      <PackagesCarousel />
      <OfferBanner />
      <HealingMethods />
      <HealingTeam />
      <GalleryPreview />
      <CTASection
        title="Make Space for Your Wellbeing."
        subtitle="Discover a more mindful way to rest, recharge, and reconnect with yourself at Nowal NatureCare."
        image="https://images.pexels.com/photos/14580738/pexels-photo-14580738.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
    </VineTrail>
  );
}