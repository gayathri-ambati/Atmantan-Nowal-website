import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { team } from '@/data/team';

export default function Team() {
  return (
    <>
      <PageHero
        image="https://images.pexels.com/photos/31185782/pexels-photo-31185782.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Founder & Wellness Team"
        title="The Practitioners Who Guide Your Journey"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Team' }]}
      />

      <section className="py-20 md:py-32 bg-ivory">
        <div className="container-lux">
          <Reveal className="max-w-3xl mb-16">
            <p className="eyebrow mb-4">Our People</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-700 leading-[1.15]">
              Dedicated to the Practice of Natural Healing
            </h2>
            <p className="mt-4 text-charcoal/60 text-lg leading-relaxed">
              Our team brings together experience across naturopathy, Ayurveda, yoga,
              and physiotherapy. Each practitioner is committed to providing
              personalised, attentive care throughout your wellness journey.
            </p>
          </Reveal>

          <div className="space-y-16 md:space-y-24">
            {team.map((member, i) => (
              <Reveal key={member.name}>
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                  <div className="overflow-hidden aspect-[4/5] lg:[direction:ltr] max-w-md mx-auto lg:mx-0 w-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:[direction:ltr]">
                    <p className="text-gold-500 text-xs tracking-[0.2em] uppercase mb-3">
                      {member.role}
                    </p>
                    <h3 className="font-serif text-3xl md:text-4xl text-forest-700">
                      {member.name}
                    </h3>
                    <span className="gold-divider mt-4 block" />
                    <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Begin Your Journey with Our Team"
        subtitle="Our practitioners are ready to guide you through a personalised wellness experience."
        image="https://images.pexels.com/photos/14580738/pexels-photo-14580738.jpeg?auto=compress&cs=tinysrgb&w=1920"
        secondaryLabel="Explore Programmes"
        secondaryLink="/programmes"
      />
    </>
  );
}
