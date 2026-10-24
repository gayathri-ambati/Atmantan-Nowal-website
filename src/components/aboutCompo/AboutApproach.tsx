// import Reveal from '@/components/Reveal';
// import Parallax from '@/components/Parallax';

// const PARAGRAPHS = [
//   'Nowal NatureCare was founded with a simple yet profound conviction — that the human body possesses an inherent capacity for healing when supported by the elements of nature. Our wellness centre in Jaipur, Rajasthan, brings together the disciplines of naturopathy, Ayurveda, yoga, and nutrition in a setting designed for rest, reflection, and renewal.',
//   "Rather than treating symptoms in isolation, we take a holistic view of each guest's wellbeing — considering lifestyle, diet, movement, mental state, and environment. Personalised programmes are developed in consultation with our practitioners, ensuring that every aspect of the stay is aligned with the individual's wellness goals.",
// ];

// export default function AboutApproach() {
//   return (
//     <section
//       id="approach"
//       className="relative py-20 md:py-32 bg-ivory"
//       aria-labelledby="approach-heading"
//     >
//       <div className="container-lux">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//           <Reveal>
//             <Parallax
//               src="https://images.pexels.com/photos/5276195/pexels-photo-5276195.jpeg?auto=compress&cs=tinysrgb&w=1200"
//               alt="Stone gazebo in resort garden"
//               className="aspect-[4/5] w-full"
//               speed={0.15}
//             />
//           </Reveal>

//           <div>
//             <Reveal>
//               <p className="eyebrow mb-4">Our Approach</p>
//             </Reveal>

//             <Reveal delay={0.1}>
//               <h2
//                 id="approach-heading"
//                 className="font-serif text-3xl md:text-4xl text-forest-700 leading-[1.15]"
//               >
//                 Blending Ancient Healing Wisdom with Mindful Modern Living
//               </h2>
//             </Reveal>

//             <Reveal delay={0.2}>
//               <span className="gold-divider mt-6 block" />
//             </Reveal>

//             {PARAGRAPHS.map((text, i) => (
//               <Reveal key={i} delay={0.3 + i * 0.1}>
//                 <p
//                   className={
//                     i === 0
//                       ? 'mt-6 text-charcoal/70 text-lg leading-relaxed'
//                       : 'mt-4 text-charcoal/60 leading-relaxed'
//                   }
//                 >
//                   {text}
//                 </p>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import Reveal from '@/components/Reveal';
import Parallax from '@/components/Parallax';

const PARAGRAPHS = [
  'Nowal NatureCare was founded with a simple yet profound conviction — that the human body possesses an inherent capacity for healing when supported by the elements of nature. Our wellness centre in Jaipur, Rajasthan, brings together the disciplines of naturopathy, Ayurveda, yoga, and nutrition in a setting designed for rest, reflection, and renewal.',
  "Rather than treating symptoms in isolation, we take a holistic view of each guest's wellbeing — considering lifestyle, diet, movement, mental state, and environment. Personalised programmes are developed in consultation with our practitioners, ensuring that every aspect of the stay is aligned with the individual's wellness goals.",
];

const HIGHLIGHTS = [
  { label: 'Naturopathy', value: 'Detox & restore' },
  { label: 'Ayurveda', value: 'Balance doshas' },
  { label: 'Yoga', value: 'Mindful movement' },
  { label: 'Nutrition', value: 'Sattvic meals' },
];

export default function AboutApproach() {
  return (
    <section
      id="approach"
      className="relative py-20 md:py-32 bg-ivory overflow-hidden"
      aria-labelledby="approach-heading"
    >
      {/* Soft decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-forest-700/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-gold-500/5 blur-3xl"
      />

      <div className="container-lux relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <Reveal>
            <div className="relative">
              {/* Decorative frame accent */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 md:-inset-5 border border-gold-500/40 rounded-sm pointer-events-none"
              />
              <Parallax
                src="https://images.pexels.com/photos/5276195/pexels-photo-5276195.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Stone gazebo in resort garden"
                className="aspect-[4/5] w-full shadow-2xl shadow-forest-700/20"
                speed={0.15}
              />

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-forest-700 text-ivory px-6 py-5 rounded-sm shadow-xl">
                <p className="font-serif text-3xl md:text-4xl leading-none">15+</p>
                <p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-ivory/70">
                  Years of care
                </p>
              </div>
            </div>
          </Reveal>

          {/* Text column */}
          <div>
            <Reveal>
              <p className="eyebrow mb-4 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-gold-500" aria-hidden="true" />
                Our Approach
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                id="approach-heading"
                className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-forest-700 leading-[1.15] tracking-tight"
              >
                Blending Ancient Healing Wisdom with Mindful Modern Living
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <span className="gold-divider mt-6 block" />
            </Reveal>

            {PARAGRAPHS.map((text, i) => (
              <Reveal key={i} delay={0.3 + i * 0.1}>
                <p
                  className={
                    i === 0
                      ? 'mt-6 text-charcoal/75 text-lg leading-relaxed first-letter:font-serif first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-forest-700 first-letter:leading-none'
                      : 'mt-4 text-charcoal/65 leading-relaxed'
                  }
                >
                  {text}
                </p>
              </Reveal>
            ))}

            {/* Discipline highlights */}
            <Reveal delay={0.6}>
              <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-forest-700/10 pt-8">
                {HIGHLIGHTS.map((item) => (
                  <li key={item.label} className="group">
                    <p className="text-[11px] tracking-[0.2em] uppercase text-gold-600 mb-1">
                      {item.label}
                    </p>
                    <p className="text-charcoal/75 text-sm group-hover:text-forest-700 transition-colors">
                      {item.value}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}