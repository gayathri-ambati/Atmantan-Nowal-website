import Reveal from '@/components/Reveal';
import Parallax from '@/components/Parallax';

export default function WellnessPhilosophy() {
  const pillars = [
    { title: 'Nature', text: 'The foundation of all healing — earth, water, air, sunlight, and the restorative power of natural surroundings.' },
    { title: 'Tradition', text: 'Drawing upon the wisdom of naturopathy and Ayurveda, systems of care that have nurtured wellbeing for millennia.' },
    { title: 'Nourishment', text: 'Food as a form of care — freshly prepared, plant-based, and aligned with individual wellness needs.' },
    { title: 'Movement', text: 'Yoga, breathing practices, and mindful movement to keep the body vibrant and the mind clear.' },
    { title: 'Mindfulness', text: 'Meditation and stillness as daily practices, creating space for awareness and inner balance.' },
    { title: 'Personal Care', text: 'Individualised programmes designed in consultation with experienced wellness practitioners.' },
  ];

  return (
    <section className="py-20 md:py-32 bg-sage/15">
      <div className="container-lux">
        <Reveal className="text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4 flex items-center justify-center gap-3">
            <span className="gold-divider" />
            A Distinctive Philosophy
            <span className="gold-divider" />
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-700 leading-[1.15] text-balance">
            Ancient Wisdom. Thoughtful Care. A More Balanced You.
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <Parallax
              src="https://images.pexels.com/photos/577269/pexels-photo-577269.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Wooden bridge amidst lush greenery at the resort"
              className="aspect-[3/2] w-full"
              speed={0.15}
            />
          </Reveal>
          <div className="space-y-8">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="flex gap-6 items-start border-b border-forest-700/10 pb-6 last:border-0">
                  <span className="font-serif text-2xl text-gold-400 flex-shrink-0 w-8">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-forest-700">{pillar.title}</h3>
                    <p className="text-charcoal/60 mt-1 leading-relaxed">{pillar.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
