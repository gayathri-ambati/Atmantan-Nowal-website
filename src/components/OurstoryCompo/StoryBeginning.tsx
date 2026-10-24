// 'use client';

// import Reveal from '@/components/Reveal';
// import SectionHeading from '@/components/SectionHeading';

// export default function StoryBeginning() {
//   return (
//     <section className="py-20 md:py-32 bg-ivory">
//       <div className="container-lux max-w-4xl">
//         <SectionHeading
//           eyebrow="The Beginning"
//           title="From a Vision of Healing to a Sanctuary of Wellness"
//           showDivider
//           titleClassName="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-700 leading-[1.15]"
//         />

//         <div className="mt-8 space-y-6 text-charcoal/70 text-lg leading-relaxed">
//           <Reveal delay={0.3}>
//             <p>
//               Nowal NatureCare began with a deep conviction in the healing power of
//               nature. The founder, inspired by years of study in naturopathic
//               medicine and traditional wellness systems, envisioned a place where
//               people could step away from the demands of modern life and reconnect
//               with the fundamental rhythms of natural wellbeing.
//             </p>
//           </Reveal>
//           <Reveal delay={0.4}>
//             <p>
//               In Jaipur, Rajasthan, that vision took physical form — a wellness
//               sanctuary set amid gardens and natural greenery, designed not as a
//               clinical facility but as a home for healing. Every element, from the
//               architecture to the daily schedule, was conceived to support the
//               principles of naturopathy: that the body heals itself when given the
//               right conditions, and that those conditions are found in nature.
//             </p>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }



'use client';

import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

export default function StoryBeginning() {
  return (
    <section className="relative overflow-hidden bg-ivory py-20 md:py-28 lg:py-36">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#dce5d4]/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#e9d9c2]/40 blur-3xl"
      />

      <div className="container-lux relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* LEFT: Image composition */}
          <Reveal>
            <div className="relative mx-auto mb-8 w-full max-w-lg lg:mx-0">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-t-[48%] rounded-b-[48%] border-[7px] border-white/90 bg-[#173c2b] shadow-[0_25px_70px_rgba(48,72,48,0.14)]">
                <img
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1100&q=85"
                  alt="Sunlight filtering through a peaceful green forest"
                  className="block h-[440px] w-full object-cover object-center transition-transform duration-1000 hover:scale-105 sm:h-[540px] lg:h-[600px]"
                  loading="lazy"
                />

                {/* Dark gradient for readable text */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#102c20]/95 via-[#102c20]/25 to-transparent"
                />

                {/* Visible image caption */}
                <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-4 pb-20 pt-16 text-center text-white sm:pb-24 sm:pt-20">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/90 sm:text-xs sm:tracking-[0.35em]">
                    Inspired by Nature
                  </p>

                  <p className="mt-3 max-w-full font-serif text-[27px] italic leading-tight text-white sm:text-3xl lg:text-4xl">
                    A gentler way to heal.
                  </p>
                </div>
              </div>

              {/* Floating nature badge */}
              <div className="absolute -right-2 top-8 z-20 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-[#c8d4bd] bg-white/95 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:-right-5 sm:top-10 sm:h-32 sm:w-32">
                <span className="text-2xl text-[#829477] sm:text-3xl">
                  ✳
                </span>

                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#48634a] sm:text-[10px]">
                  Nature
                </span>

                <span className="text-[9px] uppercase tracking-[0.18em] text-[#48634a] sm:text-[10px]">
                  Nurtures
                </span>
              </div>

              {/* Floating bottom card */}
              <div className="absolute -bottom-6 left-1/2 z-20 w-max max-w-[92%] -translate-x-1/2 rounded-2xl border border-[#e8e4d9] bg-white px-4 py-4 shadow-[0_12px_35px_rgba(0,0,0,0.09)] sm:left-8 sm:translate-x-0 sm:px-7">
                <p className="whitespace-nowrap font-serif text-base italic text-[#38563d] sm:text-lg">
                  Return to your natural self.
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-charcoal/50 sm:text-[10px] sm:tracking-[0.2em]">
                  The NOWAL Philosophy
                </p>
              </div>
            </div>
          </Reveal>

          {/* RIGHT: Story content */}
          <div className="pt-5 lg:pt-0">
            {/* Section eyebrow */}
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#8b9c76]" />

                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#708566]">
                  The Beginning
                </span>
              </div>
            </Reveal>

            
           {/* Main heading */}
            <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl font-normal leading-[1.18] tracking-tight text-forest-700 sm:text-4xl lg:text-[3.35rem]">
                From a Vision of Healing to a Sanctuary of Wellness
            </h2>

            {/* Decorative divider */}
            <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-12 bg-[#8b9c76]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#8b9c76]" />
            </div>
            </Reveal>

            {/* Story paragraphs */}
            <div className="mt-8 space-y-6 text-base leading-8 text-charcoal/70 sm:text-lg sm:leading-9">
              <Reveal delay={0.2}>
                <p>
                  NOWAL NatureCare began with a deep belief in the healing
                  connection between people and nature. Inspired by the
                  principles of naturopathic medicine and traditional wellness
                  practices, its founder envisioned a place where people could
                  pause, breathe deeply, and rediscover the natural rhythms
                  of well-being.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p>
                  In Jaipur, Rajasthan, that vision took shape as a peaceful
                  sanctuary surrounded by gardens and greenery. Designed to
                  feel welcoming rather than clinical, every element of the
                  experience reflects a simple philosophy: create the right
                  conditions for rest, balance, and a renewed connection
                  with oneself.
                </p>
              </Reveal>
            </div>

            {/* Highlighted philosophy quote */}
            <Reveal delay={0.4}>
              <div className="mt-9 border-l-2 border-[#8b9c76] bg-[#e8ebdf]/60 px-5 py-5 sm:px-7">
                <span
                  aria-hidden="true"
                  className="block font-serif text-4xl leading-none text-[#829477]"
                >
                  “
                </span>

                <p className="-mt-1 font-serif text-xl italic leading-relaxed text-forest-700 sm:text-2xl">
                  Sometimes, healing begins with simply finding your way back
                  to nature.
                </p>
              </div>
            </Reveal>

            {/* Closing signature */}
            <Reveal delay={0.5}>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c8d4bd] bg-white font-serif text-2xl text-[#708566]">
                  ✳
                </div>

                <div>
                  <p className="font-serif text-lg text-forest-700">
                    The NOWAL Way
                  </p>

                  <p className="text-xs tracking-wide text-charcoal/50">
                    Rooted in nature. Guided by well-being.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
