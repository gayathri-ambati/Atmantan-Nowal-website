import Hero from '@/components/home/Hero';
import WelcomeNowal from '@/components/home/WelcomeNowal';
import WellnessPhilosophy from '@/components/home/WellnessPhilosophy';
import ProgrammesShowcase from '@/components/home/ProgrammesShowcase';
import TherapiesSlider from '@/components/home/TherapiesSlider';
import AccommodationShowcase from '@/components/home/AccommodationShowcase';
import YogaSection from '@/components/home/YogaSection';
import DiningSection from '@/components/home/DiningSection';
import TeamSection from '@/components/home/TeamSection';
import NowalExperience from '@/components/home/NowalExperience';
import GalleryPreview from '@/components/home/GalleryPreview';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeNowal />
      <WellnessPhilosophy />
      <ProgrammesShowcase />
      <TherapiesSlider />
      <AccommodationShowcase />
      <YogaSection />
      <DiningSection />
      <TeamSection />
      <NowalExperience />
      <GalleryPreview />
      <CTASection
        title="Make Space for Your Wellbeing."
        subtitle="Discover a more mindful way to rest, recharge, and reconnect with yourself at Nowal NatureCare."
        image="https://images.pexels.com/photos/14580738/pexels-photo-14580738.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
    </>
  );
}
