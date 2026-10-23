import Reveal from '@/components/Reveal';
import Parallax from '@/components/Parallax';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function NowalExperience() {
  const aspects = [
    { label: 'Natural Surroundings', desc: 'Lush gardens and peaceful landscapes that invite stillness.' },
    { label: 'Wellness Facilities', desc: 'Therapy rooms, yoga spaces, and hydrotherapy areas.' },
    { label: 'Mindful Hospitality', desc: 'Attentive, personalised care throughout your stay.' },
    { label: 'Restorative Rhythms', desc: 'A daily schedule designed around natural cycles.' },
  ];

  return (
    <section className="py-20 md:py-32 bg-ivory">
      <div className="container-lux">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-4 flex items-center justify-center gap-3">
            <span className="gold-divider" />
            The Nowal Experience
            <span className="gold-divider" />
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-700 leading-[1.15] text-balance">
            A Retreat Where Every Detail Supports Your Wellbeing
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <Parallax
              src="https://images.pexels.com/photos/9650567/pexels-photo-9650567.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Lush resort garden from above"
              className="aspect-[16/10] w-full"
              speed={0.15}
            />
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5">
            <Parallax
              src="https://images.pexels.com/photos/14024977/pexels-photo-14024977.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Tropical garden with villas"
              className="aspect-[4/5] w-full"
              speed={0.15}
            />
          </Reveal>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aspects.map((aspect, i) => (
            <Reveal key={aspect.label} delay={i * 0.08}>
              <div className="border-t border-forest-700/15 pt-6">
                <h3 className="font-serif text-xl text-forest-700">{aspect.label}</h3>
                <p className="text-charcoal/60 text-sm mt-2 leading-relaxed">{aspect.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link to="/experiences" className="text-link inline-flex">
            Explore Available Experiences
            <ArrowRight size={14} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
