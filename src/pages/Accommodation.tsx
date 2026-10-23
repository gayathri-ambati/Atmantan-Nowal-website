import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { rooms } from '@/data/accommodation';

export default function Accommodation() {
  return (
    <>
      <PageHero
        image="https://images.pexels.com/photos/14025911/pexels-photo-14025911.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Accommodation"
        title="A Stay Designed Around Wellbeing"
        subtitle="Natural materials, peaceful views, and spaces that invite rest and reflection — our accommodations extend the wellness experience into every moment of your stay."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Accommodation' }]}
      />

      <section className="py-20 md:py-32 bg-ivory">
        <div className="container-lux space-y-20 md:space-y-32">
          {rooms.map((room, i) => (
            <div
              key={room.slug}
              id={room.slug}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center scroll-mt-24 ${
                i % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}
            >
              <Reveal className="lg:[direction:ltr]">
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={room.image}
                    alt={room.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
              <div className="lg:[direction:ltr]">
                <Reveal>
                  <p className="text-xs tracking-[0.2em] uppercase text-sage-dark">
                    {room.occupancy} {'\u00B7'} {room.size}
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="font-serif text-3xl md:text-4xl text-forest-700 mt-2">
                    {room.name}
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <span className="gold-divider mt-4 block" />
                </Reveal>
                <Reveal delay={0.3}>
                  <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                    {room.desc}
                  </p>
                </Reveal>
                <Reveal delay={0.4}>
                  <ul className="mt-6 grid grid-cols-2 gap-2">
                    {room.amenities.map((amenity) => (
                      <li key={amenity} className="flex items-center gap-2 text-sm text-charcoal/60">
                        <Check size={14} className="text-gold-400 flex-shrink-0" />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.5}>
                  <Link to="/plan-your-stay" className="text-link mt-8 inline-flex">
                    Enquire About This Room
                    <ArrowRight size={14} />
                  </Link>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Plan Your Stay at Nowal NatureCare"
        subtitle="Choose the accommodation that suits your wellness journey and let us take care of the rest."
        image="https://images.pexels.com/photos/14024977/pexels-photo-14024977.jpeg?auto=compress&cs=tinysrgb&w=1920"
        secondaryLabel="View Accommodation Guidelines"
        secondaryLink="/accommodation/guidelines"
      />
    </>
  );
}
