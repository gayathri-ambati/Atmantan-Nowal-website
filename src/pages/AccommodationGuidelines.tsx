// import PageHero from '@/components/PageHero';
// import Reveal from '@/components/Reveal';
// import CTASection from '@/components/CTASection';

// export default function AccommodationGuidelines() {
//   const guidelines = [
//     {
//       title: 'Check-in and Check-out',
//       items: [
//         'Check-in is available from 12:00 PM onwards.',
//         'Check-out is by 11:00 AM.',
//         'Early arrival or late departure can be arranged subject to availability.',
//       ],
//     },
//     {
//       title: 'What to Bring',
//       items: [
//         'Comfortable, breathable clothing suitable for yoga and relaxation.',
//         'Walking shoes for nature walks and garden strolls.',
//         'Sun protection: hat, sunglasses, and natural sunscreen.',
//         'Personal toiletries and any prescribed medications.',
//         'A light jacket or shawl for cooler mornings and evenings.',
//       ],
//     },
//     {
//       title: 'What We Provide',
//       items: [
//         'Yoga mats and meditation cushions for sessions.',
//         'Towels and basic wellness amenities.',
//         'Plant-based meals as part of your programme.',
//         'Access to gardens, walking paths, and wellness facilities.',
//       ],
//     },
//     {
//       title: 'Dining Guidelines',
//       items: [
//         'Meals are plant-based and vegetarian.',
//         'Meal timings are aligned with the wellness daily schedule.',
//         'Personalised dietary plans are developed in consultation with our nutrition team.',
//         'Outside food is not permitted within the resort.',
//       ],
//     },
//     {
//       title: 'Wellness Programme Etiquette',
//       items: [
//         'Please arrive on time for scheduled sessions and therapies.',
//         'Silence is encouraged in meditation and therapy areas.',
//         'Mobile phones should be on silent mode in common areas.',
//         'Inform your practitioner of any discomfort or health changes during your stay.',
//       ],
//     },
//     {
//       title: 'General Information',
//       items: [
//         'The resort is a non-smoking and alcohol-free environment.',
//         'Wi-Fi is available in designated areas.',
//         'Pets are not permitted on the property.',
//         'Please respect the peaceful atmosphere and other guests\u2019 wellness journeys.',
//       ],
//     },
//   ];

//   return (
//     <>
//       <PageHero
//         image="https://images.pexels.com/photos/14025908/pexels-photo-14025908.jpeg?auto=compress&cs=tinysrgb&w=1920"
//         eyebrow="Accommodation Guidelines"
//         title="What to Expect During Your Stay"
//         breadcrumbs={[
//           { label: 'Home', path: '/' },
//           { label: 'Accommodation', path: '/accommodation' },
//           { label: 'Guidelines' },
//         ]}
//       />

//       <section className="py-20 md:py-32 bg-ivory">
//         <div className="container-lux">
//           <Reveal className="max-w-3xl mb-16">
//             <p className="eyebrow mb-4">Guest Information</p>
//             <h2 className="font-serif text-3xl md:text-4xl text-forest-700 leading-[1.15]">
//               Guidelines for a Peaceful and Restorative Stay
//             </h2>
//             <p className="mt-4 text-charcoal/60 text-lg leading-relaxed">
//               These guidelines are designed to help you prepare for your visit and
//               ensure that every guest enjoys a tranquil, supportive environment during
//               their wellness journey.
//             </p>
//           </Reveal>

//           <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
//             {guidelines.map((section, i) => (
//               <Reveal key={section.title} delay={i * 0.05}>
//                 <div className="border-t border-forest-700/15 pt-6">
//                   <h3 className="font-serif text-xl text-forest-700 mb-4">
//                     {section.title}
//                   </h3>
//                   <ul className="space-y-2">
//                     {section.items.map((item) => (
//                       <li
//                         key={item}
//                         className="flex items-start gap-2 text-sm text-charcoal/60 leading-relaxed"
//                       >
//                         <span className="w-1 h-1 rounded-full bg-gold-400 mt-2 flex-shrink-0" />
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CTASection
//         title="Have Questions About Your Stay?"
//         subtitle="Our team is happy to help you prepare for your wellness journey."
//         image="https://images.pexels.com/photos/14580738/pexels-photo-14580738.jpeg?auto=compress&cs=tinysrgb&w=1920"
//         primaryLabel="Contact Us"
//         primaryLink="/contact"
//         secondaryLabel="View FAQ"
//         secondaryLink="/faq"
//       />
//     </>
//   );
// }



import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import ScrollTree from '@/components/ScrollTree';

const guidelines = [
  {
    number: "01",
    title: "Check-in & Check-out",
    subtitle: "Arrive gently, leave refreshed",
    image:
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Comfortable luxury resort accommodation",
    items: [
      "Check-in is available from 12:00 PM onwards.",
      "Check-out is by 11:00 AM.",
      "Early arrival or late departure can be arranged subject to availability.",
    ],
  },
  {
    number: "02",
    title: "What to Bring",
    subtitle: "Pack light, feel at ease",
    image:
      "https://images.pexels.com/photos/6461118/pexels-photo-6461118.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Relaxing wellness and self-care essentials",
    items: [
      "Comfortable, breathable clothing suitable for yoga and relaxation.",
      "Walking shoes for nature walks and garden strolls.",
      "Sun protection: hat, sunglasses, and natural sunscreen.",
      "Personal toiletries and any prescribed medications.",
      "A light jacket or shawl for cooler mornings and evenings.",
    ],
  },
  {
    number: "03",
    title: "What We Provide",
    subtitle: "Everything for your comfort",
    image:
      "https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Wellness relaxation and retreat facilities",
    items: [
      "Yoga mats and meditation cushions for sessions.",
      "Towels and basic wellness amenities.",
      "Plant-based meals as part of your programme.",
      "Access to gardens, walking paths, and wellness facilities.",
    ],
  },
  {
    number: "04",
    title: "Dining Guidelines",
    subtitle: "Nourishment with intention",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Fresh and nourishing food served at a wellness retreat",
    items: [
      "Meals are plant-based and vegetarian.",
      "Meal timings are aligned with the wellness daily schedule.",
      "Personalised dietary plans are developed in consultation with our nutrition team.",
      "Outside food is not permitted within the resort.",
    ],
  },
  {
    number: "05",
    title: "Wellness Etiquette",
    subtitle: "Honour your journey and others",
    image:
      "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Peaceful yoga and mindfulness practice",
    items: [
      "Please arrive on time for scheduled sessions and therapies.",
      "Silence is encouraged in meditation and therapy areas.",
      "Mobile phones should be on silent mode in common areas.",
      "Inform your practitioner of any discomfort or health changes during your stay.",
    ],
  },
  {
    number: "06",
    title: "General Information",
    subtitle: "A few thoughtful reminders",
    image:
      "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Peaceful green garden and natural surroundings",
    items: [
      "The resort is a non-smoking and alcohol-free environment.",
      "Wi-Fi is available in designated areas.",
      "Pets are not permitted on the property.",
      "Please respect the peaceful atmosphere and other guests' wellness journeys.",
    ],
  },
];

const stayHighlights = [
  { value: "12 PM", label: "Check-in begins" },
  { value: "11 AM", label: "Check-out time" },
  { value: "Wellness", label: "Your time to reconnect" },
];

export default function AccommodationGuidelines() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        image="https://images.pexels.com/photos/14025908/pexels-photo-14025908.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Accommodation Guidelines"
        title="What to Expect During Your Stay"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Accommodation", path: "/accommodation" },
          { label: "Guidelines" },
        ]}
      />

      {/* Introduction and Guidelines */}
      <section className="relative overflow-hidden bg-ivory py-20 md:py-28 lg:py-32">

        <div className="hidden lg:block absolute inset-y-0 left-0 w-24 xl:w-32 pointer-events-none z-0">
          <ScrollTree className="absolute inset-0 h-full w-full opacity-80" />
        </div>

        {/* Decorative circles */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full border border-forest-700/[0.07] md:h-96 md:w-96"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-8 h-56 w-56 rounded-full border border-forest-700/[0.07] md:h-72 md:w-72"
        />

        <div className="container-lux relative">
          {/* Intro */}
          <Reveal className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gold-400" />
              <p className="eyebrow">Your Stay, Thoughtfully Prepared</p>
              <span className="h-px w-10 bg-gold-400" />
            </div>

            <h2 className="font-serif text-4xl leading-[1.12] text-forest-700 sm:text-5xl md:text-6xl">
              Make Space for
              <span className="mt-2 block italic text-gold-400">
                What Matters.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-charcoal/65 md:text-lg">
              Your wellness journey begins long before your first session.
              Discover everything you need to know to arrive with ease,
              settle into nature, and make the most of your restorative escape.
            </p>
          </Reveal>

          {/* Stay Highlights */}
          <Reveal>
            <div className="mx-auto mb-20 grid max-w-4xl grid-cols-1 divide-y divide-forest-700/10 border-y border-forest-700/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {stayHighlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="px-5 py-7 text-center sm:px-4 md:py-9"
                >
                  <p className="font-serif text-3xl text-forest-700 md:text-4xl">
                    {highlight.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-charcoal/55 md:text-sm">
                    {highlight.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Section Heading */}
          <Reveal className="mb-10 flex flex-col justify-between gap-4 md:mb-14 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-3">A Guide to Your Stay</p>
              <h3 className="font-serif text-3xl text-forest-700 md:text-4xl">
                The Details That Matter
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-charcoal/55 md:text-right md:text-base">
              A few simple guidelines help us create a peaceful, comfortable,
              and enriching experience for every guest.
            </p>
          </Reveal>

          {/* Alternating Image and Content Sections */}
          <div className="space-y-10 md:space-y-16 lg:space-y-20">
            {guidelines.map((section, index) => {
              const imageOnRight = index % 2 === 1;

              return (
                <Reveal key={section.number} delay={0.05}>
                  <article className="group grid items-stretch overflow-hidden border border-forest-700/10 bg-white/70 shadow-sm transition-all duration-500 hover:shadow-xl md:grid-cols-2">
                    {/* Image */}
                    <div
                      className={`relative min-h-[300px] overflow-hidden sm:min-h-[360px] md:min-h-[440px] ${
                        imageOnRight ? "md:order-2" : "md:order-1"
                      }`}
                    >
                      <img
                        src={section.image}
                        alt={section.alt}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/15" />

                      {/* Number */}
                      <span className="absolute left-6 top-6 border border-white/50 bg-black/15 px-4 py-2 text-sm tracking-[0.2em] text-white backdrop-blur-sm">
                        {section.number}
                      </span>

                      {/* Image title */}
                      <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9">
                        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/80">
                          Your Wellness Journey
                        </p>

                        <h3 className="max-w-md font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                          {section.title}
                        </h3>

                        <span className="mt-5 block h-px w-14 bg-gold-400 transition-all duration-500 group-hover:w-24" />
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`flex flex-col justify-center px-6 py-9 sm:px-9 sm:py-12 lg:px-12 lg:py-14 ${
                        imageOnRight ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-9 bg-gold-400" />

                        <p className="text-xs uppercase tracking-[0.16em] text-gold-400">
                          {section.subtitle}
                        </p>
                      </div>

                      <h4 className="font-serif text-2xl leading-snug text-forest-700 sm:text-3xl">
                        {section.title}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-charcoal/55">
                        Thoughtfully considered details for a more comfortable
                        and restorative stay.
                      </p>

                      <div className="my-6 h-px bg-forest-700/10" />

                      <ul className="space-y-4">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-7 text-charcoal/70 sm:text-base"
                          >
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-forest-700/50">
                        <span>{section.number}</span>
                        <span className="h-px w-10 bg-gold-400/60" />
                        <span>Thoughtfully Considered</span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* Closing Message */}
          <Reveal className="mt-14 md:mt-20">
            <div className="relative overflow-hidden bg-forest-700 px-7 py-12 text-center sm:px-12 md:py-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full border border-white/10"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-8 h-32 w-32 rounded-full border border-white/10"
              />

              <p className="eyebrow mb-4 text-gold-400">
                A Gentle Reminder
              </p>

              <h3 className="mx-auto max-w-2xl font-serif text-2xl leading-snug text-white sm:text-3xl md:text-4xl">
                Come as you are.
                <span className="block mt-2 italic text-gold-400">
                  Leave feeling more like yourself.
                </span>
              </h3>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/65 md:text-base">
                Every detail is designed to help you slow down, reconnect
                with yourself, and experience the restorative beauty of your stay.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact CTA */}
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


