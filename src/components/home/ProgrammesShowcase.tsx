import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { programmes } from '@/data/programmes';

export default function ProgrammesShowcase() {
  return (
    <section className="py-20 md:py-32 bg-ivory">
      <div className="container-lux">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-4">Wellness Programmes</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-700 leading-[1.15] text-balance">
            Explore Our Pathways to Natural Wellbeing
          </h2>
          <p className="mt-4 text-charcoal/60 text-lg leading-relaxed">
            Each programme is designed to address different dimensions of wellness,
            from the elemental approach of naturopathy to the ancient science of
            Ayurveda and the restorative practices of yoga and meditation.
          </p>
        </Reveal>

        <div className="mt-16 space-y-12 md:space-y-20">
          {programmes.map((prog, i) => (
            <Reveal key={prog.slug}>
              <div
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  i % 2 === 1 ? 'lg:[direction:rtl]' : ''
                }`}
              >
                <div className={`group relative overflow-hidden lg:[direction:ltr]`}>
                  <Link to={`/programmes/${prog.slug}`}>
                    <div className="overflow-hidden aspect-[4/3]">
                      <img
                        src={prog.image}
                        alt={prog.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <span className="absolute top-6 left-6 font-serif text-5xl text-ivory/80">
                    {prog.number}
                  </span>
                </div>

                <div className="lg:[direction:ltr]">
                  <p className="eyebrow mb-3">{prog.eyebrow}</p>
                  <h3 className="font-serif text-3xl md:text-4xl text-forest-700">
                    {prog.title}
                  </h3>
                  <span className="gold-divider mt-4 block" />
                  <p className="mt-4 text-charcoal/70 text-lg leading-relaxed">
                    {prog.shortDesc}
                  </p>
                  <p className="mt-3 text-charcoal/50 leading-relaxed">
                    Typical duration: {prog.duration}
                  </p>
                  <Link
                    to={`/programmes/${prog.slug}`}
                    className="text-link mt-6 inline-flex"
                  >
                    Explore Programme
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
