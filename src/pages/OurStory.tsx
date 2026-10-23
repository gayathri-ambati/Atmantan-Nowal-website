import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Parallax from '@/components/Parallax';
import CTASection from '@/components/CTASection';

export default function OurStory() {
  return (
    <>
      <PageHero
        image="https://images.pexels.com/photos/34056729/pexels-photo-34056729.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Our Story"
        title="The Journey That Shaped Nowal NatureCare"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Our Story' },
        ]}
      />

      <section className="py-20 md:py-32 bg-ivory">
        <div className="container-lux max-w-4xl">
          <Reveal>
            <p className="eyebrow mb-4">The Beginning</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-700 leading-[1.15]">
              From a Vision of Healing to a Sanctuary of Wellness
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <span className="gold-divider mt-6 block" />
          </Reveal>

          <div className="mt-8 space-y-6 text-charcoal/70 text-lg leading-relaxed">
            <Reveal delay={0.3}>
              <p>
                Nowal NatureCare began with a deep conviction in the healing power of
                nature. The founder, inspired by years of study in naturopathic
                medicine and traditional wellness systems, envisioned a place where
                people could step away from the demands of modern life and reconnect
                with the fundamental rhythms of natural wellbeing.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p>
                In Jaipur, Rajasthan, that vision took physical form — a wellness
                sanctuary set amid gardens and natural greenery, designed not as a
                clinical facility but as a home for healing. Every element, from the
                architecture to the daily schedule, was conceived to support the
                principles of naturopathy: that the body heals itself when given the
                right conditions, and that those conditions are found in nature.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-sage/15">
        <div className="container-lux">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <Parallax
                src="https://images.pexels.com/photos/14024789/pexels-photo-14024789.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Garden pathway to resort"
                className="aspect-[4/3] w-full"
                speed={0.15}
              />
            </Reveal>
            <div>
              <Reveal>
                <p className="eyebrow mb-4">The Growth</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-serif text-3xl md:text-4xl text-forest-700 leading-[1.15]">
                  Building a Team United by Purpose
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-charcoal/70 leading-relaxed">
                  Over the years, Nowal NatureCare has grown from a small naturopathic
                  centre into a comprehensive wellness destination. The journey has
                  been guided by a commitment to authenticity — bringing in
                  practitioners trained in the classical traditions of naturopathy,
                  Ayurveda, yoga, and physiotherapy, and creating an environment where
                  these disciplines complement one another.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-4 text-charcoal/60 leading-relaxed">
                  Today, the centre offers personalised wellness programmes, a range
                  of therapeutic treatments, comfortable accommodations, and daily
                  experiences designed to support every dimension of wellbeing —
                  physical, mental, and spiritual.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-ivory">
        <div className="container-lux max-w-4xl">
          <Reveal>
            <p className="eyebrow mb-4">Looking Forward</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl text-forest-700 leading-[1.15]">
              A Continuing Commitment to Natural Wellness
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
              As we look to the future, our commitment remains unchanged — to provide
              a sanctuary where natural healing is accessible, where traditions are
              honoured, and where every guest is supported on their individual journey
              toward balance and renewal. We continue to evolve our programmes and
              facilities, always guided by the principles that brought Nowal
              NatureCare into being.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Become Part of the Nowal Story"
        subtitle="Experience the sanctuary that has been crafted with care for your wellbeing."
        image="https://images.pexels.com/photos/6872305/pexels-photo-6872305.jpeg?auto=compress&cs=tinysrgb&w=1920"
        secondaryLabel="Meet Our Team"
        secondaryLink="/team"
      />
    </>
  );
}
