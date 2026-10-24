// import Reveal from '@/components/Reveal';
// import SectionHeading from '@/components/SectionHeading';
// import { ABOUT_VALUES } from './aboutValues.data';

// export default function AboutValues() {
//   return (
//     <section
//       id="values"
//       className="relative py-20 md:py-32 bg-sage/15"
//       aria-labelledby="values-heading"
//     >
//       <div className="container-lux">
//         <SectionHeading
//           eyebrow="Our Values"
//           title="The Principles That Guide Everything We Do"
//           align="center"
//         />

//         <ul className="mt-16 grid md:grid-cols-3 gap-8 list-none">
//           {ABOUT_VALUES.map((value, i) => (
//             <Reveal as="li" key={value.title} delay={i * 0.08}>
//               <div className="border-t border-forest-700/15 pt-6">
//                 <h3 className="font-serif text-xl text-forest-700">
//                   {value.title}
//                 </h3>
//                 <p className="text-charcoal/60 text-sm mt-2 leading-relaxed">
//                   {value.desc}
//                 </p>
//               </div>
//             </Reveal>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }



import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { ABOUT_VALUES } from './aboutValues.data';

// Optional icon map — falls back to a numeral if none provided
const ICONS: Record<string, string> = {
  'Root-cause healing': '❋',
  'Personalised care': '❦',
  'Sustainable wellbeing': '✧',
};

export default function AboutValues() {
  return (
    <section
      id="values"
      className="relative py-20 md:py-32 bg-sage/15 overflow-hidden"
      aria-labelledby="values-heading"
    >
      {/* Decorative background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-forest-700/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-forest-700/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl"
      />

      <div className="container-lux relative">
        <SectionHeading
          eyebrow="Our Values"
          title="The Principles That Guide Everything We Do"
          align="center"
        />

        <ul className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8 list-none">
          {ABOUT_VALUES.map((value, i) => {
            const icon = ICONS[value.title] ?? String(i + 1).padStart(2, '0');
            return (
              <Reveal as="li" key={value.title} delay={i * 0.08}>
                <article
                  className="group relative h-full bg-ivory/80 backdrop-blur-sm border border-forest-700/10 rounded-sm p-7 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-700/10 hover:border-forest-700/25"
                >
                  {/* Top accent line that grows on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-7 md:left-8 h-px w-10 bg-gold-500 transition-all duration-500 group-hover:w-20"
                  />

                  {/* Icon / numeral medallion */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      aria-hidden="true"
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest-700/5 text-forest-700 font-serif text-xl transition-colors duration-500 group-hover:bg-forest-700 group-hover:text-ivory"
                    >
                      {icon}
                    </span>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-forest-700/40">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl text-forest-700 leading-snug">
                    {value.title}
                  </h3>
                  <p className="text-charcoal/65 text-sm md:text-[15px] mt-3 leading-relaxed">
                    {value.desc}
                  </p>

                  {/* Bottom-right corner flourish */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-gold-500/0 transition-all duration-500 group-hover:border-gold-500/60 group-hover:w-8 group-hover:h-8"
                  />
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}