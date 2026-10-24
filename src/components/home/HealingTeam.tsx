import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { team } from '@/data/team';

export default function HealingTeam() {
  const members = team.slice(0, 6);

  return (
    <section className="py-20 md:py-32 bg-forest-800">
      <div className="container-lux">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-16">
          <Reveal>
            <p className="eyebrow-light mb-4">Meet Your Healers</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.1]">Healing Team</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-ivory/70 text-lg leading-relaxed">
              Naturopaths, physiotherapists, yoga teachers and dieticians who stay with your case from the
              first consultation to the day you go home.
            </p>
            <Link to="/team" className="btn-outline-light mt-6 inline-flex">
              Meet the whole team
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory lg:grid lg:grid-cols-6 lg:overflow-visible pb-4">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08} className="flex-shrink-0 w-[60vw] sm:w-[220px] lg:w-auto snap-start">
              <Link to="/team" className="group block">
                <div className="relative p-2">
                  {/* arch outline that offsets on hover */}
                  <span
                    className="absolute inset-0 rounded-t-full border border-gold-400/40 translate-x-2 -translate-y-2 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
                    aria-hidden
                  />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-t-full">
                    <img
                      src={m.image}
                      alt={m.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <h3 className="font-serif text-lg text-ivory mt-5 group-hover:text-gold-400 transition-colors">{m.name}</h3>
                <p className="text-gold-400 text-xs tracking-wider mt-1 leading-relaxed">{m.role}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}