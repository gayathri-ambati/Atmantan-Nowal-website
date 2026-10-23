import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { experiences } from '@/data/experiences';

export default function Experiences() {
  return (
    <>
      <PageHero
        image="https://images.pexels.com/photos/35960307/pexels-photo-35960307.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Experiences"
        title="Daily Practices and Immersive Wellness Activities"
        subtitle="From sunrise yoga to evening meditation circles, sound healing, and nature walks — each experience is designed to deepen your connection with natural wellbeing."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Experiences' }]}
      />

      <section className="py-20 md:py-32 bg-ivory">
        <div className="container-lux">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {experiences.map((exp, i) => (
              <Reveal key={exp.slug} delay={i * 0.08}>
                <article className="group">
                  <div className="overflow-hidden aspect-[3/2]">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="text-gold-500 text-xs tracking-[0.2em] uppercase">
                        {exp.title}
                      </p>
                      <span className="flex items-center gap-1 text-xs text-charcoal/40">
                        <Clock size={12} />
                        {exp.duration}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl text-forest-700">{exp.title}</h3>
                    <p className="mt-2 text-charcoal/60 leading-relaxed">
                      {exp.shortDesc}
                    </p>
                    <p className="mt-3 text-charcoal/50 text-sm leading-relaxed">
                      {exp.longDesc}
                    </p>
                    <Link to="/plan-your-stay" className="text-link mt-4 inline-flex">
                      Enquire Now
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Immerse Yourself in the Nowal Experience"
        subtitle="Every experience is included as part of our comprehensive wellness programmes."
        image="https://images.pexels.com/photos/32629853/pexels-photo-32629853.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
    </>
  );
}
