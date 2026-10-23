import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { team } from '@/data/team';

export default function TeamSection() {
  return (
    <section className="py-20 md:py-32 bg-sage/15">
      <div className="container-lux">
        <Reveal className="max-w-3xl mb-16">
          <p className="eyebrow mb-4">The People Behind Nowal</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-700 leading-[1.15] text-balance">
            Experienced Practitioners Dedicated to Your Wellbeing
          </h2>
          <p className="mt-4 text-charcoal/60 text-lg leading-relaxed">
            Our team of wellness practitioners brings together expertise in naturopathy,
            Ayurveda, yoga, and nutrition, working collaboratively to guide each guest
            through their personalised wellness journey.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <div className="group">
                <div className="overflow-hidden aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-xl text-forest-700">{member.name}</h3>
                  <p className="text-gold-500 text-xs tracking-wider uppercase mt-1">
                    {member.role}
                  </p>
                  <p className="text-charcoal/50 text-sm mt-3 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Link to="/team" className="text-link inline-flex">
            Meet the Full Team
            <ArrowRight size={14} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
