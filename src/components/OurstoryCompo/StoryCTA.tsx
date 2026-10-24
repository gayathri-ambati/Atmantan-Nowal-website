'use client';

import CTASection from '@/components/CTASection';

const IMAGE =
  'https://images.pexels.com/photos/6872305/pexels-photo-6872305.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function StoryCTA() {
  return (
    <CTASection
      title="Become Part of the Nowal Story"
      subtitle="Experience the sanctuary that has been crafted with care for your wellbeing."
      image={IMAGE}
      secondaryLabel="Meet Our Team"
      secondaryLink="/team"
    />
  );
}