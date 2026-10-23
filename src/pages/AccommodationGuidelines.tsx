import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';

export default function AccommodationGuidelines() {
  const guidelines = [
    {
      title: 'Check-in and Check-out',
      items: [
        'Check-in is available from 12:00 PM onwards.',
        'Check-out is by 11:00 AM.',
        'Early arrival or late departure can be arranged subject to availability.',
      ],
    },
    {
      title: 'What to Bring',
      items: [
        'Comfortable, breathable clothing suitable for yoga and relaxation.',
        'Walking shoes for nature walks and garden strolls.',
        'Sun protection: hat, sunglasses, and natural sunscreen.',
        'Personal toiletries and any prescribed medications.',
        'A light jacket or shawl for cooler mornings and evenings.',
      ],
    },
    {
      title: 'What We Provide',
      items: [
        'Yoga mats and meditation cushions for sessions.',
        'Towels and basic wellness amenities.',
        'Plant-based meals as part of your programme.',
        'Access to gardens, walking paths, and wellness facilities.',
      ],
    },
    {
      title: 'Dining Guidelines',
      items: [
        'Meals are plant-based and vegetarian.',
        'Meal timings are aligned with the wellness daily schedule.',
        'Personalised dietary plans are developed in consultation with our nutrition team.',
        'Outside food is not permitted within the resort.',
      ],
    },
    {
      title: 'Wellness Programme Etiquette',
      items: [
        'Please arrive on time for scheduled sessions and therapies.',
        'Silence is encouraged in meditation and therapy areas.',
        'Mobile phones should be on silent mode in common areas.',
        'Inform your practitioner of any discomfort or health changes during your stay.',
      ],
    },
    {
      title: 'General Information',
      items: [
        'The resort is a non-smoking and alcohol-free environment.',
        'Wi-Fi is available in designated areas.',
        'Pets are not permitted on the property.',
        'Please respect the peaceful atmosphere and other guests\u2019 wellness journeys.',
      ],
    },
  ];

  return (
    <>
      <PageHero
        image="https://images.pexels.com/photos/14025908/pexels-photo-14025908.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Accommodation Guidelines"
        title="What to Expect During Your Stay"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Accommodation', path: '/accommodation' },
          { label: 'Guidelines' },
        ]}
      />

      <section className="py-20 md:py-32 bg-ivory">
        <div className="container-lux">
          <Reveal className="max-w-3xl mb-16">
            <p className="eyebrow mb-4">Guest Information</p>
            <h2 className="font-serif text-3xl md:text-4xl text-forest-700 leading-[1.15]">
              Guidelines for a Peaceful and Restorative Stay
            </h2>
            <p className="mt-4 text-charcoal/60 text-lg leading-relaxed">
              These guidelines are designed to help you prepare for your visit and
              ensure that every guest enjoys a tranquil, supportive environment during
              their wellness journey.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {guidelines.map((section, i) => (
              <Reveal key={section.title} delay={i * 0.05}>
                <div className="border-t border-forest-700/15 pt-6">
                  <h3 className="font-serif text-xl text-forest-700 mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-charcoal/60 leading-relaxed"
                      >
                        <span className="w-1 h-1 rounded-full bg-gold-400 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have Questions About Your Stay?"
        subtitle="Our team is happy to help you prepare for your wellness journey."
        image="https://images.pexels.com/photos/14580738/pexels-photo-14580738.jpeg?auto=compress&cs=tinysrgb&w=1920"
        primaryLabel="Contact Us"
        primaryLink="/contact"
        secondaryLabel="View FAQ"
        secondaryLink="/faq"
      />
    </>
  );
}
