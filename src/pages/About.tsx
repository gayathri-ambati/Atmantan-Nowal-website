// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import PageHero from '@/components/PageHero';
// import Reveal from '@/components/Reveal';
// import SectionHeading from '@/components/SectionHeading';
// import CTASection from '@/components/CTASection';
// import Parallax from '@/components/Parallax';

// export default function About() {
//   return (
//     <>
//       <PageHero
//         image="https://images.pexels.com/photos/9650567/pexels-photo-9650567.jpeg?auto=compress&cs=tinysrgb&w=1920"
//         eyebrow="About Nowal"
//         title="A Sanctuary Born from a Vision of Natural Wellness"
//         breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About Nowal' }]}
//       />

//       <section className="py-20 md:py-32 bg-ivory">
//         <div className="container-lux">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             <Reveal>
//               <Parallax
//                 src="https://images.pexels.com/photos/5276195/pexels-photo-5276195.jpeg?auto=compress&cs=tinysrgb&w=1200"
//                 alt="Stone gazebo in resort garden"
//                 className="aspect-[4/5] w-full"
//                 speed={0.15}
//               />
//             </Reveal>
//             <div>
//               <Reveal>
//                 <p className="eyebrow mb-4">Our Approach</p>
//               </Reveal>
//               <Reveal delay={0.1}>
//                 <h2 className="font-serif text-3xl md:text-4xl text-forest-700 leading-[1.15]">
//                   Blending Ancient Healing Wisdom with Mindful Modern Living
//                 </h2>
//               </Reveal>
//               <Reveal delay={0.2}>
//                 <span className="gold-divider mt-6 block" />
//               </Reveal>
//               <Reveal delay={0.3}>
//                 <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
//                   Nowal NatureCare was founded with a simple yet profound conviction —
//                   that the human body possesses an inherent capacity for healing when
//                   supported by the elements of nature. Our wellness centre in Jaipur,
//                   Rajasthan, brings together the disciplines of naturopathy, Ayurveda,
//                   yoga, and nutrition in a setting designed for rest, reflection, and
//                   renewal.
//                 </p>
//               </Reveal>
//               <Reveal delay={0.4}>
//                 <p className="mt-4 text-charcoal/60 leading-relaxed">
//                   Rather than treating symptoms in isolation, we take a holistic view
//                   of each guest's wellbeing — considering lifestyle, diet, movement,
//                   mental state, and environment. Personalised programmes are developed
//                   in consultation with our practitioners, ensuring that every aspect
//                   of the stay is aligned with the individual's wellness goals.
//                 </p>
//               </Reveal>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 md:py-32 bg-sage/15">
//         <div className="container-lux">
//           <SectionHeading
//             eyebrow="Our Values"
//             title="The Principles That Guide Everything We Do"
//             align="center"
//           />
//           <div className="mt-16 grid md:grid-cols-3 gap-8">
//             {[
//               { title: 'Nature First', desc: 'We look to the five elements — earth, water, fire, air, and ether — as the foundation of all our therapies and programmes.' },
//               { title: 'Personalised Care', desc: 'Every guest is unique. Programmes are tailored through individual consultation, not applied as one-size-fits-all protocols.' },
//               { title: 'Mindful Living', desc: 'Wellness extends beyond the treatment room. We encourage practices that guests can carry into their daily lives.' },
//               { title: 'Integrated Approach', desc: 'Our practitioners work collaboratively across disciplines to address all dimensions of wellbeing.' },
//               { title: 'Authentic Traditions', desc: 'We honour the authentic practices of naturopathy and Ayurveda, delivered by qualified and experienced practitioners.' },
//               { title: 'Sustainable Practices', desc: 'From our kitchen to our gardens, we operate with respect for the natural environment that sustains us.' },
//             ].map((value, i) => (
//               <Reveal key={value.title} delay={i * 0.08}>
//                 <div className="border-t border-forest-700/15 pt-6">
//                   <h3 className="font-serif text-xl text-forest-700">{value.title}</h3>
//                   <p className="text-charcoal/60 text-sm mt-2 leading-relaxed">{value.desc}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CTASection
//         title="Experience the Nowal Difference"
//         subtitle="Discover how a personalised wellness journey can support your path to balance and renewal."
//         image="https://images.pexels.com/photos/14580738/pexels-photo-14580738.jpeg?auto=compress&cs=tinysrgb&w=1920"
//         primaryLabel="Plan Your Stay"
//         secondaryLabel="Read Our Story"
//         secondaryLink="/our-story"
//       />
//     </>
//   );
// }




// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import PageHero from '@/components/PageHero';
// import Reveal from '@/components/Reveal';
// import SectionHeading from '@/components/SectionHeading';
// import CTASection from '@/components/CTASection';
// import Parallax from '@/components/Parallax';
// import ScrollTree from '@/components/ScrollTree';

// export default function About() {
//   return (
//     <>
//       <PageHero
//         image="https://images.pexels.com/photos/9650567/pexels-photo-9650567.jpeg?auto=compress&cs=tinysrgb&w=1920"
//         eyebrow="About Nowal"
//         title="A Sanctuary Born from a Vision of Natural Wellness"
//         breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About Nowal' }]}
//       />

//       {/* Section with the scroll-growing tree on the left */}
//       <section className="relative py-20 md:py-32 bg-ivory">
//         <ScrollTree className="absolute left-4 top-0 hidden h-full w-20 xl:block 2xl:left-10" />

//         <div className="container-lux">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             <Reveal>
//               <Parallax
//                 src="https://images.pexels.com/photos/5276195/pexels-photo-5276195.jpeg?auto=compress&cs=tinysrgb&w=1200"
//                 alt="Stone gazebo in resort garden"
//                 className="aspect-[4/5] w-full"
//                 speed={0.15}
//               />
//             </Reveal>
//             <div>
//               <Reveal>
//                 <p className="eyebrow mb-4">Our Approach</p>
//               </Reveal>
//               <Reveal delay={0.1}>
//                 <h2 className="font-serif text-3xl md:text-4xl text-forest-700 leading-[1.15]">
//                   Blending Ancient Healing Wisdom with Mindful Modern Living
//                 </h2>
//               </Reveal>
//               <Reveal delay={0.2}>
//                 <span className="gold-divider mt-6 block" />
//               </Reveal>
//               <Reveal delay={0.3}>
//                 <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
//                   Nowal NatureCare was founded with a simple yet profound conviction —
//                   that the human body possesses an inherent capacity for healing when
//                   supported by the elements of nature. Our wellness centre in Jaipur,
//                   Rajasthan, brings together the disciplines of naturopathy, Ayurveda,
//                   yoga, and nutrition in a setting designed for rest, reflection, and
//                   renewal.
//                 </p>
//               </Reveal>
//               <Reveal delay={0.4}>
//                 <p className="mt-4 text-charcoal/60 leading-relaxed">
//                   Rather than treating symptoms in isolation, we take a holistic view
//                   of each guest's wellbeing — considering lifestyle, diet, movement,
//                   mental state, and environment. Personalised programmes are developed
//                   in consultation with our practitioners, ensuring that every aspect
//                   of the stay is aligned with the individual's wellness goals.
//                 </p>
//               </Reveal>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 md:py-32 bg-sage/15">
//         <div className="container-lux">
//           <SectionHeading
//             eyebrow="Our Values"
//             title="The Principles That Guide Everything We Do"
//             align="center"
//           />
//           <div className="mt-16 grid md:grid-cols-3 gap-8">
//             {[
//               { title: 'Nature First', desc: 'We look to the five elements — earth, water, fire, air, and ether — as the foundation of all our therapies and programmes.' },
//               { title: 'Personalised Care', desc: 'Every guest is unique. Programmes are tailored through individual consultation, not applied as one-size-fits-all protocols.' },
//               { title: 'Mindful Living', desc: 'Wellness extends beyond the treatment room. We encourage practices that guests can carry into their daily lives.' },
//               { title: 'Integrated Approach', desc: 'Our practitioners work collaboratively across disciplines to address all dimensions of wellbeing.' },
//               { title: 'Authentic Traditions', desc: 'We honour the authentic practices of naturopathy and Ayurveda, delivered by qualified and experienced practitioners.' },
//               { title: 'Sustainable Practices', desc: 'From our kitchen to our gardens, we operate with respect for the natural environment that sustains us.' },
//             ].map((value, i) => (
//               <Reveal key={value.title} delay={i * 0.08}>
//                 <div className="border-t border-forest-700/15 pt-6">
//                   <h3 className="font-serif text-xl text-forest-700">{value.title}</h3>
//                   <p className="text-charcoal/60 text-sm mt-2 leading-relaxed">{value.desc}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CTASection
//         title="Experience the Nowal Difference"
//         subtitle="Discover how a personalised wellness journey can support your path to balance and renewal."
//         image="https://images.pexels.com/photos/14580738/pexels-photo-14580738.jpeg?auto=compress&cs=tinysrgb&w=1920"
//         primaryLabel="Plan Your Stay"
//         secondaryLabel="Read Our Story"
//         secondaryLink="/our-story"
//       />
//     </>
//   );
// }



// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import PageHero from '@/components/PageHero';
// import Reveal from '@/components/Reveal';
// import SectionHeading from '@/components/SectionHeading';
// import CTASection from '@/components/CTASection';
// import Parallax from '@/components/Parallax';
// import ScrollTree from '@/components/ScrollTree';

// export default function About() {
//   return (
//     <div className="relative">
//       {/* Single ScrollTree overlay spanning the entire page */}
//       <ScrollTree className="pointer-events-none absolute left-4 top-0 z-10 hidden h-full w-20 xl:block 2xl:left-10" />

//       <PageHero
//         image="https://images.pexels.com/photos/9650567/pexels-photo-9650567.jpeg?auto=compress&cs=tinysrgb&w=1920"
//         eyebrow="About Nowal"
//         title="A Sanctuary Born from a Vision of Natural Wellness"
//         breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About Nowal' }]}
//       />

//       {/* Section 1 — Our Approach */}
//       <section className="relative py-20 md:py-32 bg-ivory">
//         <div className="container-lux">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             <Reveal>
//               <Parallax
//                 src="https://images.pexels.com/photos/5276195/pexels-photo-5276195.jpeg?auto=compress&cs=tinysrgb&w=1200"
//                 alt="Stone gazebo in resort garden"
//                 className="aspect-[4/5] w-full"
//                 speed={0.15}
//               />
//             </Reveal>
//             <div>
//               <Reveal>
//                 <p className="eyebrow mb-4">Our Approach</p>
//               </Reveal>
//               <Reveal delay={0.1}>
//                 <h2 className="font-serif text-3xl md:text-4xl text-forest-700 leading-[1.15]">
//                   Blending Ancient Healing Wisdom with Mindful Modern Living
//                 </h2>
//               </Reveal>
//               <Reveal delay={0.2}>
//                 <span className="gold-divider mt-6 block" />
//               </Reveal>
//               <Reveal delay={0.3}>
//                 <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
//                   Nowal NatureCare was founded with a simple yet profound conviction —
//                   that the human body possesses an inherent capacity for healing when
//                   supported by the elements of nature. Our wellness centre in Jaipur,
//                   Rajasthan, brings together the disciplines of naturopathy, Ayurveda,
//                   yoga, and nutrition in a setting designed for rest, reflection, and
//                   renewal.
//                 </p>
//               </Reveal>
//               <Reveal delay={0.4}>
//                 <p className="mt-4 text-charcoal/60 leading-relaxed">
//                   Rather than treating symptoms in isolation, we take a holistic view
//                   of each guest's wellbeing — considering lifestyle, diet, movement,
//                   mental state, and environment. Personalised programmes are developed
//                   in consultation with our practitioners, ensuring that every aspect
//                   of the stay is aligned with the individual's wellness goals.
//                 </p>
//               </Reveal>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section 2 — Our Values */}
//       <section className="relative py-20 md:py-32 bg-sage/15">
//         <div className="container-lux">
//           <SectionHeading
//             eyebrow="Our Values"
//             title="The Principles That Guide Everything We Do"
//             align="center"
//           />
//           <div className="mt-16 grid md:grid-cols-3 gap-8">
//             {[
//               { title: 'Nature First', desc: 'We look to the five elements — earth, water, fire, air, and ether — as the foundation of all our therapies and programmes.' },
//               { title: 'Personalised Care', desc: 'Every guest is unique. Programmes are tailored through individual consultation, not applied as one-size-fits-all protocols.' },
//               { title: 'Mindful Living', desc: 'Wellness extends beyond the treatment room. We encourage practices that guests can carry into their daily lives.' },
//               { title: 'Integrated Approach', desc: 'Our practitioners work collaboratively across disciplines to address all dimensions of wellbeing.' },
//               { title: 'Authentic Traditions', desc: 'We honour the authentic practices of naturopathy and Ayurveda, delivered by qualified and experienced practitioners.' },
//               { title: 'Sustainable Practices', desc: 'From our kitchen to our gardens, we operate with respect for the natural environment that sustains us.' },
//             ].map((value, i) => (
//               <Reveal key={value.title} delay={i * 0.08}>
//                 <div className="border-t border-forest-700/15 pt-6">
//                   <h3 className="font-serif text-xl text-forest-700">{value.title}</h3>
//                   <p className="text-charcoal/60 text-sm mt-2 leading-relaxed">{value.desc}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section 3 — CTA */}
//       <CTASection
//         title="Experience the Nowal Difference"
//         subtitle="Discover how a personalised wellness journey can support your path to balance and renewal."
//         image="https://images.pexels.com/photos/14580738/pexels-photo-14580738.jpeg?auto=compress&cs=tinysrgb&w=1920"
//         primaryLabel="Plan Your Stay"
//         secondaryLabel="Read Our Story"
//         secondaryLink="/our-story"
//       />
//     </div>
//   );
// }



import PageHero from '@/components/PageHero';
import ScrollTree from '@/components/ScrollTree';
import CTASection from '@/components/CTASection';
import AboutApproach from '@/components/aboutCompo/AboutApproach';
import AboutValues from '@/components/aboutCompo/AboutValues';

export default function About() {
  return (
    <div className="relative">
      {/* Page-level ScrollTree overlay — spans every section */}
      <ScrollTree className="pointer-events-none absolute left-4 top-0 z-10 hidden h-full w-20 xl:block 2xl:left-10" />

      <PageHero
        image="https://images.pexels.com/photos/9650567/pexels-photo-9650567.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="About Nowal"
        title="A Sanctuary Born from a Vision of Natural Wellness"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About Nowal' },
        ]}
      />

      <AboutApproach />
      <AboutValues />

      <CTASection
        title="Experience the Nowal Difference"
        subtitle="Discover how a personalised wellness journey can support your path to balance and renewal."
        image="https://images.pexels.com/photos/14580738/pexels-photo-14580738.jpeg?auto=compress&cs=tinysrgb&w=1920"
        primaryLabel="Plan Your Stay"
        secondaryLabel="Read Our Story"
        secondaryLink="/our-story"
      />
    </div>
  );
}