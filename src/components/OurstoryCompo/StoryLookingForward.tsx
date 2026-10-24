// 'use client';

// import Reveal from '@/components/Reveal';
// import SectionHeading from '@/components/SectionHeading';

// export default function StoryLookingForward() {
//   return (
//     <section className="py-20 md:py-32 bg-ivory">
//       <div className="container-lux max-w-4xl">
//         <SectionHeading
//           eyebrow="Looking Forward"
//           title="A Continuing Commitment to Natural Wellness"
//         />

//         <Reveal delay={0.2}>
//           <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
//             As we look to the future, our commitment remains unchanged — to provide
//             a sanctuary where natural healing is accessible, where traditions are
//             honoured, and where every guest is supported on their individual journey
//             toward balance and renewal. We continue to evolve our programmes and
//             facilities, always guided by the principles that brought Nowal
//             NatureCare into being.
//           </p>
//         </Reveal>
//       </div>
//     </section>
//   );
// }



'use client';

import Reveal from '@/components/Reveal';

const IMAGE =
  'https://images.pexels.com/photos/14024789/pexels-photo-14024789.jpeg?auto=compress&cs=tinysrgb&w=1200';

/* ---------- Leafy branches (SVG data, styled only with Tailwind classes) ---------- */

type Point = [number, number];
type ClassProps = { className?: string };

const GREENS = ['#4f7a2f', '#6b9440', '#86a84a', '#a3c05c', '#5c8636'];

const bez = (p: Point[], t: number): Point => {
  const u = 1 - t;
  return [
    u ** 3 * p[0][0] + 3 * u * u * t * p[1][0] + 3 * u * t * t * p[2][0] + t ** 3 * p[3][0],
    u ** 3 * p[0][1] + 3 * u * u * t * p[1][1] + 3 * u * t * t * p[2][1] + t ** 3 * p[3][1],
  ];
};

const BRANCHES: { p: Point[]; n: number }[] = [
  { p: [[-10, 95], [90, 85], [190, 70], [320, 18]], n: 15 },
  { p: [[-10, 200], [60, 150], [130, 120], [215, 95]], n: 11 },
  { p: [[-5, 340], [-10, 260], [20, 190], [75, 130]], n: 10 },
  { p: [[150, 72], [200, 100], [240, 125], [290, 125]], n: 6 },
];

const LEAVES = BRANCHES.flatMap(({ p, n }, b) =>
  Array.from({ length: n }, (_, i) => {
    const t = (i + 1) / n;
    const [x, y] = bez(p, t);
    const [x2, y2] = bez(p, Math.min(t + 0.02, 1));
    const ang = (Math.atan2(y2 - y, x2 - x) * 180) / Math.PI;
    const side = i % 2 ? 1 : -1;
    return {
      x,
      y,
      rot: ang + side * (38 + ((i * 7) % 16)),
      color: GREENS[(i + b) % GREENS.length],
      rx: 15 + ((i * 3 + b) % 6),
    };
  })
);

const Branch = ({ className = '' }: ClassProps) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 340 360"
    fill="none"
    className={`pointer-events-none absolute top-0 h-[260px] w-[260px] sm:h-[330px] sm:w-[330px] lg:h-[400px] lg:w-[400px] ${className}`}
  >
    <g stroke="#5b4a36" strokeLinecap="round">
      {BRANCHES.map(({ p }, i) => (
        <path
          key={i}
          d={`M${p[0]} C${p[1]} ${p[2]} ${p[3]}`}
          strokeWidth={i === 0 ? 4 : 2.5}
        />
      ))}
    </g>
    {LEAVES.map((l, i) => (
      <ellipse
        key={i}
        cx={l.x}
        cy={l.y}
        rx={l.rx}
        ry="6.5"
        fill={l.color}
        transform={`rotate(${l.rot} ${l.x} ${l.y})`}
      />
    ))}
  </svg>
);

/* Single drifting leaf */
const Leaf = ({ className = '' }: ClassProps) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={`pointer-events-none absolute ${className}`}
  >
    <path d="M2 20 C2 8 10 2 22 2 C22 14 14 22 2 20 Z" fill="currentColor" />
    <path
      d="M3 19 C9 14 14 9 19 5"
      stroke="#ffffff"
      strokeOpacity="0.35"
      strokeWidth="0.8"
      fill="none"
    />
  </svg>
);

export default function StoryLookingForward() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f6f6ec] py-20 sm:py-24 lg:flex lg:min-h-[720px] lg:items-center lg:py-28">
      {/* Background atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(255,255,255,0.85),rgba(246,246,236,0.5)_60%,rgba(232,236,218,0.55))]" />
        <div className="absolute -bottom-10 right-0 h-72 w-72 rounded-full bg-[#dfe6cf]/50 blur-3xl" />
        <div className="absolute -bottom-16 left-0 h-72 w-72 rounded-full bg-[#dfe6cf]/50 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f1f2e6]/80 to-transparent" />
      </div>

      {/* Corner branches */}
      <Branch className="-left-6 -top-6" />
      <Branch className="-right-6 -top-6 -scale-x-100" />

      {/* Floating leaves */}
      <Leaf className="left-[44%] top-[6%] hidden h-8 w-8 rotate-[75deg] text-[#6f9a45] blur-[0.5px] sm:block" />
      <Leaf className="left-[4%] top-[36%] h-9 w-9 -rotate-[20deg] text-[#7ca14e] blur-[0.5px]" />
      <Leaf className="left-[7%] top-[46%] h-7 w-7 rotate-[100deg] text-[#6f9a45] blur-[1px]" />
      <Leaf className="right-[17%] top-[22%] hidden h-6 w-6 -rotate-[30deg] text-[#7ca14e] blur-[0.5px] md:block" />
      <Leaf className="right-[3%] top-[46%] h-8 w-8 rotate-[25deg] text-[#6f9a45] blur-[0.5px]" />
      <Leaf className="bottom-[14%] left-[39%] hidden h-14 w-14 -rotate-[15deg] text-[#7ca14e] blur-[1px] lg:block" />
      <Leaf className="bottom-[16%] left-[55%] hidden h-7 w-7 rotate-[200deg] text-[#6f9a45] lg:block" />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* LEFT: box-shaped image */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-[400px] sm:max-w-[460px] lg:max-w-[500px]">
              {/* Offset outline frame */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 translate-x-3 -translate-y-3 rounded-3xl border-2 border-[#d9e0cc] sm:-inset-4 sm:translate-x-4 sm:-translate-y-4"
              />

              {/* Box image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-[6px] border-[#f4f5ea] shadow-[0_25px_70px_rgba(49,69,41,0.18)]">
                <img
                  src={IMAGE}
                  alt="Sunlit garden path leading to a wellness retreat"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-[1200ms] hover:scale-105 motion-reduce:transition-none"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#fff3c4]/10 via-transparent to-white/10" />
              </div>

              {/* Botanical sprig */}
              <svg
                aria-hidden="true"
                viewBox="0 0 180 170"
                fill="none"
                className="absolute -bottom-4 -left-6 z-10 h-36 w-36 sm:-left-12 sm:h-44 sm:w-44"
              >
                <path
                  d="M20 160 C45 120 80 75 125 18"
                  stroke="#5d7a4e"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <g fill="#6c8a5a">
                  <ellipse cx="38" cy="132" rx="26" ry="8" transform="rotate(-55 38 132)" />
                  <ellipse cx="62" cy="128" rx="26" ry="8" transform="rotate(15 62 128)" />
                  <ellipse cx="55" cy="104" rx="26" ry="8" transform="rotate(-60 55 104)" />
                  <ellipse cx="82" cy="102" rx="26" ry="8" transform="rotate(10 82 102)" />
                  <ellipse cx="74" cy="78" rx="25" ry="8" transform="rotate(-62 74 78)" />
                  <ellipse cx="100" cy="76" rx="24" ry="8" transform="rotate(5 100 76)" />
                  <ellipse cx="95" cy="52" rx="22" ry="7" transform="rotate(-65 95 52)" />
                  <ellipse cx="118" cy="46" rx="20" ry="7" transform="rotate(0 118 46)" />
                  <ellipse cx="124" cy="22" rx="18" ry="6" transform="rotate(-70 124 22)" />
                </g>
              </svg>
            </div>
          </Reveal>

          {/* RIGHT: text */}
          <div className="relative mx-auto w-full max-w-[780px] lg:mx-0">
            <Reveal>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-[#81966d] sm:w-16" />
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#82966e] sm:text-sm">
                  Looking Forward
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl font-normal leading-[1.15] tracking-tight text-[#244230] sm:text-5xl lg:text-[3.6rem]">
                A Continuing Commitment to Natural Wellness
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-7 text-base leading-8 text-[#7a7d72] sm:text-lg sm:leading-[2.1] lg:text-[1.2rem]">
                As we look to the future, our commitment remains unchanged — to
                provide a sanctuary where natural healing is accessible, where
                traditions are honoured, and where every guest is supported on
                their individual journey toward balance and renewal. We continue
                to evolve our programmes and facilities, always guided by the
                principles that brought Nowal NatureCare into being.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}