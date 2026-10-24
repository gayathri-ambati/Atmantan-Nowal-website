// 'use client';

// import Reveal from '@/components/Reveal';
// import Parallax from '@/components/Parallax';
// import SectionHeading from '@/components/SectionHeading';

// const IMAGE =
//   'https://images.pexels.com/photos/14024789/pexels-photo-14024789.jpeg?auto=compress&cs=tinysrgb&w=1200';

// export default function StoryGrowth() {
//   return (
//     <section className="py-20 md:py-32 bg-sage/15">
//       <div className="container-lux">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//           <Reveal>
//             <Parallax
//               src={IMAGE}
//               alt="Garden pathway to resort"
//               className="aspect-[4/3] w-full"
//               speed={0.15}
//             />
//           </Reveal>

//           <div>
//             <SectionHeading
//               eyebrow="The Growth"
//               title="Building a Team United by Purpose"
//             />

//             <Reveal delay={0.2}>
//               <p className="mt-6 text-charcoal/70 leading-relaxed">
//                 Over the years, Nowal NatureCare has grown from a small naturopathic
//                 centre into a comprehensive wellness destination. The journey has
//                 been guided by a commitment to authenticity — bringing in
//                 practitioners trained in the classical traditions of naturopathy,
//                 Ayurveda, yoga, and physiotherapy, and creating an environment where
//                 these disciplines complement one another.
//               </p>
//             </Reveal>
//             <Reveal delay={0.3}>
//               <p className="mt-4 text-charcoal/60 leading-relaxed">
//                 Today, the centre offers personalised wellness programmes, a range
//                 of therapeutic treatments, comfortable accommodations, and daily
//                 experiences designed to support every dimension of wellbeing —
//                 physical, mental, and spiritual.
//               </p>
//             </Reveal>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



'use client';

import Reveal from '@/components/Reveal';
import Parallax from '@/components/Parallax';
import SectionHeading from '@/components/SectionHeading';

const IMAGE =
  'https://images.pexels.com/photos/14024789/pexels-photo-14024789.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function StoryGrowth() {
  return (
    <section className="story-growth relative isolate overflow-hidden bg-[#edf0e6] py-20 md:py-28 lg:py-36">
      {/* Animated tree background */}
        <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
        {/* Soft natural background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.65),transparent_75%)]" />

        {/* Left tree */}
        <svg
            className="growth-tree growth-tree-left absolute bottom-0 left-0 h-full w-40 text-[#627c57]/45 sm:w-56 lg:w-72"
            viewBox="0 0 260 620"
            fill="none"
            preserveAspectRatio="xMidYMax meet"
        >
            {/* Main trunk */}
            <path
            d="M105 630 C120 510 102 410 120 300 C133 210 113 120 130 10"
            stroke="currentColor"
            strokeWidth="18"
            strokeLinecap="round"
            />

            {/* Main branches */}
            <g
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            >
            <path d="M118 420 C82 365 52 315 22 270" />
            <path d="M116 355 C155 305 194 255 228 210" />
            <path d="M124 265 C90 220 68 170 57 125" />
            <path d="M126 185 C159 150 183 105 198 62" />
            <path d="M110 470 C75 435 48 405 22 365" />
            </g>

            {/* Clearly visible foliage */}
            <g fill="currentColor">
            <ellipse cx="38" cy="270" rx="48" ry="24" transform="rotate(38 38 270)" />
            <ellipse cx="69" cy="322" rx="48" ry="23" transform="rotate(30 69 322)" />
            <ellipse cx="42" cy="367" rx="45" ry="22" transform="rotate(35 42 367)" />
            <ellipse cx="222" cy="210" rx="49" ry="23" transform="rotate(-42 222 210)" />
            <ellipse cx="184" cy="260" rx="49" ry="24" transform="rotate(-40 184 260)" />
            <ellipse cx="57" cy="125" rx="45" ry="22" transform="rotate(35 57 125)" />
            <ellipse cx="84" cy="175" rx="45" ry="23" transform="rotate(35 84 175)" />
            <ellipse cx="198" cy="62" rx="43" ry="22" transform="rotate(-38 198 62)" />
            <ellipse cx="160" cy="112" rx="46" ry="23" transform="rotate(-38 160 112)" />
            <ellipse cx="130" cy="25" rx="48" ry="24" />
            </g>
        </svg>

        {/* Right tree */}
        <svg
            className="growth-tree growth-tree-right absolute bottom-0 right-0 h-full w-36 text-[#627c57]/45 sm:w-52 lg:w-64"
            viewBox="0 0 240 600"
            fill="none"
            preserveAspectRatio="xMidYMax meet"
        >
            {/* Main trunk */}
            <path
            d="M145 620 C128 500 148 400 130 290 C115 210 138 115 120 10"
            stroke="currentColor"
            strokeWidth="18"
            strokeLinecap="round"
            />

            {/* Branches */}
            <g
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            >
            <path d="M133 425 C95 380 61 335 25 295" />
            <path d="M133 355 C171 310 198 260 222 220" />
            <path d="M129 260 C93 215 68 168 52 120" />
            <path d="M125 180 C155 145 177 100 186 55" />
            <path d="M139 475 C174 440 198 405 220 370" />
            </g>

            {/* Foliage */}
            <g fill="currentColor">
            <ellipse cx="28" cy="295" rx="46" ry="23" transform="rotate(40 28 295)" />
            <ellipse cx="66" cy="340" rx="48" ry="24" transform="rotate(38 66 340)" />
            <ellipse cx="222" cy="215" rx="48" ry="23" transform="rotate(-40 222 215)" />
            <ellipse cx="180" cy="265" rx="47" ry="23" transform="rotate(-38 180 265)" />
            <ellipse cx="52" cy="120" rx="44" ry="22" transform="rotate(35 52 120)" />
            <ellipse cx="82" cy="170" rx="45" ry="23" transform="rotate(35 82 170)" />
            <ellipse cx="186" cy="55" rx="43" ry="21" transform="rotate(-35 186 55)" />
            <ellipse cx="157" cy="105" rx="45" ry="23" transform="rotate(-35 157 105)" />
            <ellipse cx="120" cy="25" rx="47" ry="23" />
            </g>
        </svg>

        {/* Floating leaves */}
        <span className="growth-leaf growth-leaf-one absolute left-[15%] top-[18%] text-5xl text-[#627c57]/65">
            ❧
        </span>

        <span className="growth-leaf growth-leaf-two absolute right-[13%] top-[28%] text-4xl text-[#627c57]/60">
            ❧
        </span>

        <span className="growth-leaf growth-leaf-three absolute bottom-[18%] left-[35%] text-3xl text-[#627c57]/50">
            ❧
        </span>

        <span className="growth-leaf growth-leaf-four absolute right-[34%] top-[12%] text-3xl text-[#627c57]/55">
            ❧
        </span>

        {/* Keep the background soft, not washed out */}
        <div className="absolute inset-0 bg-white/[0.06]" />
        </div>

      {/* Main content */}
      <div className="container-lux relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section introduction */}
        <Reveal>
          <div className="mb-12 text-center lg:mb-16">
            <span className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#657d5d] sm:text-xs">
              <span className="h-px w-8 bg-[#9aab8d]" />
              Growing with Purpose
              <span className="h-px w-8 bg-[#9aab8d]" />
            </span>
          </div>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Image */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-xl">
              {/* Decorative image frame */}
              <div
                aria-hidden="true"
                className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border border-[#9cac91]/50 sm:-left-5 sm:-top-5 sm:rounded-[2.5rem]"
              />

              <div className="relative overflow-hidden rounded-[1.75rem] bg-[#d9e1d1] shadow-[0_25px_70px_rgba(43,67,43,0.16)] sm:rounded-[2.25rem]">
                <Parallax
                  src={IMAGE}
                  alt="A peaceful garden pathway surrounded by lush greenery at a wellness resort"
                  className="aspect-[4/3] w-full"
                  speed={0.15}
                />

                {/* Bottom image gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172c20]/65 via-transparent to-transparent" />

                {/* Image caption */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-6 sm:p-9">
                  <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/80">
                    The journey continues
                  </span>
                  <p className="mt-2 font-serif text-2xl italic text-white sm:text-3xl">
                    Growing together, naturally.
                  </p>
                </div>
              </div>

              {/* Floating botanical badge */}
              <div className="absolute -bottom-6 -right-3 z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-[#d2dcc9] bg-[#fafbf6]/95 text-center shadow-[0_12px_35px_rgba(36,55,35,0.12)] sm:-bottom-8 sm:-right-5 sm:h-32 sm:w-32">
                <span className="text-2xl text-[#718767] sm:text-3xl">
                  ❋
                </span>
                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#496247] sm:text-[10px]">
                  Rooted
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#496247] sm:text-[10px]">
                  in Nature
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right: Story */}
          <div className="relative pt-3 lg:pl-2 lg:pt-0">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#879b79]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#708566]">
                  The Growth
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <SectionHeading
                eyebrow="Our Journey"
                title="Building a Team United by Purpose"
              />
            </Reveal>

            {/* Original paragraph 1 — content preserved */}
            <Reveal delay={0.2}>
              <p className="mt-6 text-base leading-8 text-charcoal/75 sm:text-lg sm:leading-9">
                Over the years, Nowal NatureCare has grown from a small
                naturopathic centre into a comprehensive wellness destination.
                The journey has been guided by a commitment to authenticity —
                bringing in practitioners trained in the classical traditions
                of naturopathy, Ayurveda, yoga, and physiotherapy, and creating
                an environment where these disciplines complement one another.
              </p>
            </Reveal>

            {/* Original paragraph 2 — content preserved */}
            <Reveal delay={0.3}>
              <p className="mt-5 text-base leading-8 text-charcoal/65 sm:text-lg sm:leading-9">
                Today, the centre offers personalised wellness programmes, a
                range of therapeutic treatments, comfortable accommodations,
                and daily experiences designed to support every dimension of
                wellbeing — physical, mental, and spiritual.
              </p>
            </Reveal>

            {/* Decorative divider */}
            <Reveal delay={0.4}>
              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-12 bg-[#9aab8d]" />
                <span className="text-xl text-[#819576]">❋</span>
                <span className="h-px w-12 bg-[#9aab8d]" />
              </div>

              <p className="mt-4 font-serif text-lg italic text-[#526b4e] sm:text-xl">
                Different disciplines. One shared purpose.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        .growth-tree {
          animation: growth-tree-sway 9s ease-in-out infinite alternate;
          transform-origin: 50% 100%;
          will-change: transform;
        }

        .growth-tree-right {
          animation-duration: 11s;
          animation-delay: -3s;
        }

        .growth-leaf {
          display: block;
          animation: growth-leaf-float 7s ease-in-out infinite;
          will-change: transform;
        }

        .growth-leaf-two {
          animation-delay: -2s;
          animation-duration: 9s;
        }

        .growth-leaf-three {
          animation-delay: -4s;
          animation-duration: 8s;
        }

        .growth-leaf-four {
          animation-delay: -1s;
          animation-duration: 10s;
        }

        @keyframes growth-tree-sway {
          0% {
            transform: rotate(-1.2deg) translateY(0);
          }
          100% {
            transform: rotate(1.2deg) translateY(-5px);
          }
        }

        @keyframes growth-leaf-float {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(-8deg);
          }
          50% {
            transform: translate3d(12px, -18px, 0) rotate(12deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .growth-tree,
          .growth-leaf {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
