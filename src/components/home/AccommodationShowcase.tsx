import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Parallax from '@/components/Parallax';
import { rooms } from '@/data/accommodation';

export default function AccommodationShowcase() {
  return (
    <section className="py-20 md:py-32 bg-ivory">
      <div className="container-lux">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-16">
          <Reveal>
            <p className="eyebrow mb-4">A Stay Designed Around Wellbeing</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-700 leading-[1.15] text-balance">
              Restful Spaces Surrounded by Nature
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-charcoal/60 text-lg leading-relaxed">
              Our accommodations are designed to be an extension of the wellness
              experience — natural materials, peaceful views, and spaces that invite
              rest and reflection throughout your stay.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <Reveal key={room.slug} delay={i * 0.1}>
              <Link to={`/accommodation#${room.slug}`} className="group block">
                <div className="overflow-hidden aspect-[3/4] relative">
                  <Parallax
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full"
                    speed={0.1}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="mt-5">
                  <p className="text-xs tracking-[0.2em] uppercase text-sage-dark">
                    {room.occupancy} {'\u00B7'} {room.size}
                  </p>
                  <h3 className="font-serif text-2xl text-forest-700 mt-2 group-hover:text-gold-500 transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-charcoal/60 mt-2 text-sm leading-relaxed line-clamp-3">
                    {room.desc}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {room.amenities.slice(0, 3).map((amenity) => (
                      <li key={amenity} className="flex items-center gap-2 text-xs text-charcoal/50">
                        <Check size={12} className="text-gold-400" />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/accommodation" className="btn-primary">
            Explore Accommodation
            <ArrowRight size={16} />
          </Link>
          <Link to="/plan-your-stay" className="btn-outline">
            Enquire About Your Stay
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
