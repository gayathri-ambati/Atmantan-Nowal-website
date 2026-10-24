// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import PageHero from '@/components/PageHero';
// import Reveal from '@/components/Reveal';
// import CTASection from '@/components/CTASection';
// import { team } from '@/data/team';

// export default function Team() {
//   return (
//     <>
//       <PageHero
//         image="https://images.pexels.com/photos/31185782/pexels-photo-31185782.jpeg?auto=compress&cs=tinysrgb&w=1920"
//         eyebrow="Founder & Wellness Team"
//         title="The Practitioners Who Guide Your Journey"
//         breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Team' }]}
//       />

//       <section className="py-20 md:py-32 bg-ivory">
//         <div className="container-lux">
//           <Reveal className="max-w-3xl mb-16">
//             <p className="eyebrow mb-4">Our People</p>
//             <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-700 leading-[1.15]">
//               Dedicated to the Practice of Natural Healing
//             </h2>
//             <p className="mt-4 text-charcoal/60 text-lg leading-relaxed">
//               Our team brings together experience across naturopathy, Ayurveda, yoga,
//               and physiotherapy. Each practitioner is committed to providing
//               personalised, attentive care throughout your wellness journey.
//             </p>
//           </Reveal>

//           <div className="space-y-16 md:space-y-24">
//             {team.map((member, i) => (
//               <Reveal key={member.name}>
//                 <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
//                   <div className="overflow-hidden aspect-[4/5] lg:[direction:ltr] max-w-md mx-auto lg:mx-0 w-full">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       loading="lazy"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="lg:[direction:ltr]">
//                     <p className="text-gold-500 text-xs tracking-[0.2em] uppercase mb-3">
//                       {member.role}
//                     </p>
//                     <h3 className="font-serif text-3xl md:text-4xl text-forest-700">
//                       {member.name}
//                     </h3>
//                     <span className="gold-divider mt-4 block" />
//                     <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
//                       {member.bio}
//                     </p>
//                   </div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CTASection
//         title="Begin Your Journey with Our Team"
//         subtitle="Our practitioners are ready to guide you through a personalised wellness experience."
//         image="https://images.pexels.com/photos/14580738/pexels-photo-14580738.jpeg?auto=compress&cs=tinysrgb&w=1920"
//         secondaryLabel="Explore Programmes"
//         secondaryLink="/programmes"
//       />
//     </>
//   );
// }




import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { team } from '@/data/team';
import ScrollTree from '@/components/ScrollTree';

export default function Team() {
  return (
    <>
      {/* Hero */}
      <PageHero
        image="https://images.pexels.com/photos/31185782/pexels-photo-31185782.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Founder & Wellness Team"
        title="The Practitioners Who Guide Your Journey"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Team' },
        ]}
      />

      {/* Team introduction and profiles */}
      <section className="relative isolate overflow-hidden bg-[#f7f6ef] py-20 md:py-28 lg:py-32">

        <div className="hidden lg:block absolute inset-y-0 left-0 w-24 xl:w-32 pointer-events-none z-0">
                  <ScrollTree className="absolute inset-0 h-full w-full opacity-80" />
                </div>

        {/* Botanical background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-[#dce6d4]/45 blur-3xl" />
          <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#e8dfcb]/40 blur-3xl" />

          {/* Decorative branch - Right Side with #15370D color */}
          <svg
            className="absolute -right-8 top-0 h-[500px] w-48 text-[#15370D]/20 sm:w-64"
            viewBox="0 0 200 500"
            fill="none"
          >
            {/* Path is inverted so the branch curves nicely to the right */}
            <path
              d="M185 500 C155 380 165 260 100 150 C70 100 60 55 45 10"
              stroke="currentColor"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M155 380 L185 320 M135 310 L75 270 M115 230 L160 180 M80 145 L30 110"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <g fill="currentColor">
              <ellipse cx="182" cy="315" rx="28" ry="12" transform="rotate(-45 182 315)" />
              <ellipse cx="75" cy="265" rx="32" ry="13" transform="rotate(30 75 265)" />
              <ellipse cx="160" cy="175" rx="29" ry="12" transform="rotate(-40 160 175)" />
              <ellipse cx="30" cy="105" rx="31" ry="12" transform="rotate(40 30 105)" />
              <ellipse cx="45" cy="35" rx="30" ry="12" transform="rotate(55 45 35)" />
            </g>
          </svg>
        </div>

        <div className="container-lux relative mx-auto max-w-7xl px-5 sm:px-8">
          {/* Section heading */}
          <Reveal className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#92a583]" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#718665]">
                Our People
              </p>
              <span className="h-px w-10 bg-[#92a583]" />
            </div>

            <h2 className="font-serif text-3xl font-normal leading-tight text-forest-700 sm:text-4xl lg:text-5xl">
              Dedicated to the Practice of Natural Healing
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-charcoal/65 sm:text-lg sm:leading-9">
              Our team brings together experience across naturopathy,
              Ayurveda, yoga, and physiotherapy. Each practitioner is
              committed to providing personalised, attentive care
              throughout your wellness journey.
            </p>

            <div className="mt-7 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#c5cdbb]" />
              <span className="text-lg text-[#819576]">✳</span>
              <span className="h-px w-8 bg-[#c5cdbb]" />
            </div>
          </Reveal>

          {/* Practitioner profiles */}
          <div className="space-y-16 md:space-y-24 lg:space-y-28">
            {team.map((member, i) => (
              <Reveal key={member.name}>
                <article
                  className={`group grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 1 ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="lg:[direction:ltr]">
                    <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-md">
                      {/* Offset border */}
                      <div
                        aria-hidden="true"
                        className={`absolute -inset-3 rounded-[2rem] border border-[#c9d4bd]/80 transition-transform duration-700 group-hover:scale-[1.015] sm:-inset-4 sm:rounded-[2.5rem] ${
                          i % 2 === 1
                            ? 'rotate-[-2deg] group-hover:rotate-[-1deg]'
                            : 'rotate-[2deg] group-hover:rotate-[1deg]'
                        }`}
                      />

                      {/* Portrait container */}
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#e4e9dc] shadow-[0_20px_55px_rgba(44,66,43,0.12)] sm:rounded-[2rem]">
                        <img
                          src={member.image}
                          alt={member.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        />

                        {/* Bottom gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#152b1e]/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                        {/* Portrait number */}
                        <span className="absolute bottom-5 left-6 font-serif text-5xl text-white/80 sm:bottom-7 sm:left-8 sm:text-6xl">
                          {String(i + 1).padStart(2, '0')}
                        </span>

                        {/* Botanical corner detail */}
                        <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/20 text-2xl text-white backdrop-blur-sm">
                          ✳
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Profile information */}
                  <div className="lg:[direction:ltr]">
                    <div className="max-w-xl py-3 lg:py-8">
                      <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-9 bg-[#8fa17e]" />
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#879875] sm:text-xs sm:tracking-[0.3em]">
                          {member.role}
                        </p>
                      </div>

                      <h3 className="font-serif text-3xl font-normal leading-tight text-forest-700 sm:text-4xl lg:text-5xl">
                        {member.name}
                      </h3>

                      <div className="mt-6 flex items-center gap-2">
                        <span className="h-[2px] w-12 bg-[#b39a64]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#b39a64]" />
                      </div>

                      <p className="mt-6 text-base leading-8 text-charcoal/70 sm:text-lg sm:leading-9">
                        {member.bio}
                      </p>

                      {/* Decorative signature */}
                      <div className="mt-8 flex items-center gap-3">
                        <span className="text-xl text-[#8b9c7b]">❋</span>
                        <span className="font-serif text-base italic text-[#687d60] sm:text-lg">
                          Guided by care and compassion
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <CTASection
        title="Begin Your Journey with Our Team"
        subtitle="Our practitioners are ready to guide you through a personalised wellness experience."
        image="https://images.pexels.com/photos/14580738/pexels-photo-14580738.jpeg?auto=compress&cs=tinysrgb&w=1920"
        secondaryLabel="Explore Programmes"
        secondaryLink="/programmes"
      />
    </>
  );
}