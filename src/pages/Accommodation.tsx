// import { Link } from 'react-router-dom';
// import { ArrowRight, Check } from 'lucide-react';
// import PageHero from '@/components/PageHero';
// import Reveal from '@/components/Reveal';
// import CTASection from '@/components/CTASection';
// import { rooms } from '@/data/accommodation';

// export default function Accommodation() {
//   return (
//     <>
//       <PageHero
//         image="https://images.pexels.com/photos/14025911/pexels-photo-14025911.jpeg?auto=compress&cs=tinysrgb&w=1920"
//         eyebrow="Accommodation"
//         title="A Stay Designed Around Wellbeing"
//         subtitle="Natural materials, peaceful views, and spaces that invite rest and reflection — our accommodations extend the wellness experience into every moment of your stay."
//         breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Accommodation' }]}
//       />

//       <section className="py-20 md:py-32 bg-ivory">
//         <div className="container-lux space-y-20 md:space-y-32">
//           {rooms.map((room, i) => (
//             <div
//               key={room.slug}
//               id={room.slug}
//               className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center scroll-mt-24 ${
//                 i % 2 === 1 ? 'lg:[direction:rtl]' : ''
//               }`}
//             >
//               <Reveal className="lg:[direction:ltr]">
//                 <div className="overflow-hidden aspect-[4/3]">
//                   <img
//                     src={room.image}
//                     alt={room.name}
//                     loading="lazy"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </Reveal>
//               <div className="lg:[direction:ltr]">
//                 <Reveal>
//                   <p className="text-xs tracking-[0.2em] uppercase text-sage-dark">
//                     {room.occupancy} {'\u00B7'} {room.size}
//                   </p>
//                 </Reveal>
//                 <Reveal delay={0.1}>
//                   <h2 className="font-serif text-3xl md:text-4xl text-forest-700 mt-2">
//                     {room.name}
//                   </h2>
//                 </Reveal>
//                 <Reveal delay={0.2}>
//                   <span className="gold-divider mt-4 block" />
//                 </Reveal>
//                 <Reveal delay={0.3}>
//                   <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
//                     {room.desc}
//                   </p>
//                 </Reveal>
//                 <Reveal delay={0.4}>
//                   <ul className="mt-6 grid grid-cols-2 gap-2">
//                     {room.amenities.map((amenity) => (
//                       <li key={amenity} className="flex items-center gap-2 text-sm text-charcoal/60">
//                         <Check size={14} className="text-gold-400 flex-shrink-0" />
//                         {amenity}
//                       </li>
//                     ))}
//                   </ul>
//                 </Reveal>
//                 <Reveal delay={0.5}>
//                   <Link to="/plan-your-stay" className="text-link mt-8 inline-flex">
//                     Enquire About This Room
//                     <ArrowRight size={14} />
//                   </Link>
//                 </Reveal>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <CTASection
//         title="Plan Your Stay at Nowal NatureCare"
//         subtitle="Choose the accommodation that suits your wellness journey and let us take care of the rest."
//         image="https://images.pexels.com/photos/14024977/pexels-photo-14024977.jpeg?auto=compress&cs=tinysrgb&w=1920"
//         secondaryLabel="View Accommodation Guidelines"
//         secondaryLink="/accommodation/guidelines"
//       />
//     </>
//   );
// }




import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { rooms } from '@/data/accommodation';

/* ------------------------------------------------------------------ */
/* Botanical decorations (Tailwind only)                               */
/* Requires `animate-tree-sway` and `animate-leaf-drift` in            */
/* tailwind.config.js (see the keyframes snippet).                     */
/* ------------------------------------------------------------------ */

const treeBase =
  'absolute bottom-0 h-full origin-bottom text-[#657e58]/45 will-change-transform animate-tree-sway motion-reduce:animate-none';

const leafBase =
  'absolute block will-change-transform animate-leaf-drift motion-reduce:animate-none';

function LeftTree() {
  return (
    <svg
      className={`${treeBase} -left-12 w-44 sm:w-60 lg:w-72`}
      viewBox="0 0 260 700"
      fill="none"
      preserveAspectRatio="xMinYMax meet"
    >
      <path
        d="M70 710 C92 590 63 480 90 365 C110 265 77 155 115 5"
        stroke="currentColor"
        strokeWidth="17"
        strokeLinecap="round"
      />
      <g stroke="currentColor" strokeWidth="9" strokeLinecap="round">
        <path d="M84 480 C53 430 30 390 8 340" />
        <path d="M88 405 C130 360 167 315 201 265" />
        <path d="M98 315 C61 270 42 223 31 175" />
        <path d="M103 235 C139 196 167 152 184 105" />
        <path d="M78 535 C46 505 26 478 5 440" />
      </g>
      <g fill="currentColor">
        <ellipse cx="18" cy="340" rx="42" ry="21" transform="rotate(40 18 340)" />
        <ellipse cx="48" cy="405" rx="43" ry="21" transform="rotate(35 48 405)" />
        <ellipse cx="201" cy="260" rx="44" ry="21" transform="rotate(-40 201 260)" />
        <ellipse cx="161" cy="315" rx="44" ry="21" transform="rotate(-38 161 315)" />
        <ellipse cx="31" cy="175" rx="42" ry="20" transform="rotate(35 31 175)" />
        <ellipse cx="60" cy="225" rx="43" ry="21" transform="rotate(35 60 225)" />
        <ellipse cx="184" cy="105" rx="43" ry="20" transform="rotate(-38 184 105)" />
        <ellipse cx="148" cy="155" rx="44" ry="21" transform="rotate(-38 148 155)" />
        <ellipse cx="115" cy="25" rx="45" ry="22" />
      </g>
    </svg>
  );
}

function RightTree() {
  return (
    <svg
      className={`${treeBase} -right-12 w-40 [animation-delay:-3s] [animation-duration:12s] sm:w-56 lg:w-64`}
      viewBox="0 0 240 700"
      fill="none"
      preserveAspectRatio="xMaxYMax meet"
    >
      <path
        d="M170 710 C145 590 177 475 150 360 C130 260 164 155 135 5"
        stroke="currentColor"
        strokeWidth="17"
        strokeLinecap="round"
      />
      <g stroke="currentColor" strokeWidth="9" strokeLinecap="round">
        <path d="M155 480 C118 435 87 395 54 345" />
        <path d="M153 400 C187 355 213 310 230 260" />
        <path d="M146 310 C108 265 80 220 63 175" />
        <path d="M144 230 C172 190 192 145 200 100" />
        <path d="M162 535 C190 505 210 475 232 435" />
      </g>
      <g fill="currentColor">
        <ellipse cx="54" cy="345" rx="43" ry="21" transform="rotate(40 54 345)" />
        <ellipse cx="93" cy="395" rx="43" ry="21" transform="rotate(38 93 395)" />
        <ellipse cx="230" cy="255" rx="43" ry="21" transform="rotate(-40 230 255)" />
        <ellipse cx="192" cy="305" rx="43" ry="21" transform="rotate(-38 192 305)" />
        <ellipse cx="63" cy="175" rx="42" ry="20" transform="rotate(35 63 175)" />
        <ellipse cx="89" cy="220" rx="43" ry="21" transform="rotate(35 89 220)" />
        <ellipse cx="200" cy="100" rx="42" ry="20" transform="rotate(-38 200 100)" />
        <ellipse cx="171" cy="150" rx="43" ry="21" transform="rotate(-38 171 150)" />
        <ellipse cx="135" cy="25" rx="45" ry="22" />
      </g>
    </svg>
  );
}

export default function Accommodation() {
  return (
    <>
      {/* Hero */}
      <PageHero
        image="https://images.pexels.com/photos/14025911/pexels-photo-14025911.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Accommodation"
        title="A Stay Designed Around Wellbeing"
        subtitle="Natural materials, peaceful views, and spaces that invite rest and reflection — our accommodations extend the wellness experience into every moment of your stay."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Accommodation' },
        ]}
      />

      {/* Accommodation section */}
      <section className="relative isolate overflow-hidden bg-[#f6f6ee] py-20 sm:py-24 md:py-28 lg:py-32">
        {/* Soft natural light over the whole section */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.88),rgba(246,246,238,0.45)_68%,rgba(221,231,212,0.35))]"
        />

        {/* Wrapper begins exactly at the heading and ends after the last room */}
        <div className="relative">
          {/* Animated botanical background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          >
            {/* One pair of trees per room so they cover the full height */}
            <div className="flex h-full flex-col">
              {rooms.map((room) => (
                <div key={room.slug} className="relative flex-1">
                  <LeftTree />
                  <RightTree />
                </div>
              ))}
            </div>

            {/* Drifting leaves */}
            <span className={`${leafBase} left-[13%] top-[3%] text-4xl text-[#657e58]/65`}>
              ❧
            </span>
            <span
              className={`${leafBase} right-[12%] top-[10%] text-5xl text-[#657e58]/55 [animation-delay:-2s] [animation-duration:10s]`}
            >
              ❧
            </span>
            <span
              className={`${leafBase} left-[34%] top-[45%] text-3xl text-[#657e58]/50 [animation-delay:-4s] [animation-duration:9s]`}
            >
              ❧
            </span>
            <span
              className={`${leafBase} right-[32%] top-[30%] text-3xl text-[#657e58]/45 [animation-delay:-1s] [animation-duration:11s]`}
            >
              ❧
            </span>
            <span
              className={`${leafBase} bottom-[12%] right-[15%] text-4xl text-[#657e58]/55 [animation-delay:-5s] [animation-duration:12s]`}
            >
              ❧
            </span>

            {/* Keep the content readable */}
            <div className="absolute inset-0 bg-white/[0.12]" />
          </div>

          <div className="container-lux relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
            {/* Section introduction */}
            <Reveal>
              <div className="mb-16 text-center md:mb-20">
                <div className="mb-5 flex items-center justify-center gap-3">
                  <span className="h-px w-10 bg-[#91a482]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#718665]">
                    Your Space to Restore
                  </p>
                  <span className="h-px w-10 bg-[#91a482]" />
                </div>

                <h2 className="mx-auto max-w-3xl font-serif text-3xl font-normal leading-tight text-[#294535] sm:text-4xl md:text-5xl">
                  Comfort Inspired by Nature
                </h2>

                <div className="mt-6 flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-[#bdc9b1]" />
                  <span className="text-xl text-[#829774]">✳</span>
                  <span className="h-px w-8 bg-[#bdc9b1]" />
                </div>
              </div>
            </Reveal>

            {/* Room profiles */}
            <div className="space-y-20 md:space-y-28 lg:space-y-36">
              {rooms.map((room, i) => (
                <div
                  key={room.slug}
                  id={room.slug}
                  className={`group grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                    i % 2 === 1 ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  {/* Room image */}
                  <Reveal className="lg:[direction:ltr]">
                    <div className="relative mx-auto w-full max-w-xl lg:mx-0">
                      {/* Offset decorative frame */}
                      <div
                        aria-hidden="true"
                        className={`absolute -inset-3 rounded-[2rem] border border-[#c4d0b8]/80 transition-transform duration-700 sm:-inset-4 sm:rounded-[2.5rem] ${
                          i % 2 === 0
                            ? 'rotate-[1.5deg] group-hover:rotate-[0.5deg]'
                            : '-rotate-[1.5deg] group-hover:-rotate-[0.5deg]'
                        }`}
                      />

                      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#e4e9dc] shadow-[0_25px_65px_rgba(42,65,42,0.14)] sm:rounded-[2rem]">
                        <img
                          src={room.image}
                          alt={room.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#183222]/55 via-transparent to-transparent opacity-80" />

                        {/* Room image caption */}
                        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 sm:p-8">
                          <div>
                            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/80 sm:text-xs">
                              Discover Your Stay
                            </p>
                            <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                              {room.name}
                            </h3>
                          </div>

                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/15 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-[#405c40]">
                            <ArrowRight size={19} />
                          </span>
                        </div>
                      </div>

                      {/* Room number badge */}
                      <div className="absolute -right-3 -top-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#d5decb] bg-[#fafbf6] font-serif text-xl text-[#637b59] shadow-md sm:-right-5 sm:-top-5 sm:h-16 sm:w-16 sm:text-2xl">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </Reveal>

                  {/* Room details */}
                  <div className="lg:[direction:ltr]">
                    <Reveal>
                      <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d916d]">
                          {room.occupancy}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-[#b2a078]" />
                        <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#929386]">
                          {room.size}
                        </span>
                      </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                      <h2 className="font-serif text-3xl font-normal leading-tight text-[#294535] sm:text-4xl lg:text-5xl">
                        {room.name}
                      </h2>
                    </Reveal>

                    <Reveal delay={0.2}>
                      <div className="mt-5 flex items-center gap-2">
                        <span className="h-[2px] w-12 bg-[#b39a64]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#b39a64]" />
                      </div>
                    </Reveal>

                    <Reveal delay={0.3}>
                      <p className="mt-6 text-base leading-8 text-[#6f7168] sm:text-lg sm:leading-9">
                        {room.desc}
                      </p>
                    </Reveal>

                    {/* Amenities */}
                    <Reveal delay={0.4}>
                      <div className="mt-7">
                        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#849477]">
                          Room Amenities
                        </p>

                        <ul className="grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
                          {room.amenities.map((amenity) => (
                            <li
                              key={amenity}
                              className="flex items-start gap-3 text-sm leading-6 text-[#656a5e] sm:text-base"
                            >
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e4eadc] text-[#718866]">
                                <Check size={12} strokeWidth={2.5} />
                              </span>
                              <span>{amenity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>

                    {/* Enquiry link */}
                    <Reveal delay={0.5}>
                      <Link
                        to="/plan-your-stay"
                        className="group/link mt-8 inline-flex items-center gap-3 rounded-full border border-[#829674]/50 px-6 py-3.5 text-sm font-medium text-[#405a40] transition-all duration-300 hover:border-[#405a40] hover:bg-[#405a40] hover:text-white"
                      >
                        Enquire About This Room
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover/link:translate-x-1"
                        />
                      </Link>
                    </Reveal>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <CTASection
        title="Plan Your Stay at Nowal NatureCare"
        subtitle="Choose the accommodation that suits your wellness journey and let us take care of the rest."
        image="https://images.pexels.com/photos/14024977/pexels-photo-14024977.jpeg?auto=compress&cs=tinysrgb&w=1920"
        secondaryLabel="View Accommodation Guidelines"
        secondaryLink="/accommodation/guidelines"
      />
    </>
  );
}