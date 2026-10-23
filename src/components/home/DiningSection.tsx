import Reveal from '@/components/Reveal';
import Parallax from '@/components/Parallax';

export default function DiningSection() {
  return (
    <section className="py-20 md:py-32 bg-ivory">
      <div className="container-lux">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="eyebrow mb-4">Nourishment & Mindful Dining</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-700 leading-[1.15] text-balance">
                Food as a Form of Care
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <span className="gold-divider mt-6 block" />
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                At Nowal NatureCare, dining is an integral part of the wellness journey.
                Our kitchen prepares freshly made, plant-based meals using seasonal
                ingredients, served in a calm and mindful setting.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="mt-4 text-charcoal/60 leading-relaxed">
                Each guest's dietary plan is informed by their wellness programme
                and individual needs, with guidance from our nutrition team. Meals are
                simple, nourishing, and designed to support the body's natural
                rhythms.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
                {[
                  'Plant-based cuisine',
                  'Seasonal ingredients',
                  'Personalised meal plans',
                  'Mindful dining setting',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    <span className="text-sm text-charcoal/70">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="order-1 lg:order-2">
            <Parallax
              src="https://images.pexels.com/photos/34227785/pexels-photo-34227785.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Healthy plant-based dining spread"
              className="aspect-[4/5] w-full"
              speed={0.15}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
