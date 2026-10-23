import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Parallax from '@/components/Parallax';

export default function YogaSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <Parallax
        src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Yoga practice at sunrise"
        className="absolute inset-0"
        speed={0.2}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-800/70 to-forest-800/20" />

      <div className="relative container-lux py-20 md:py-32">
        <div className="max-w-xl">
          <Reveal>
            <p className="eyebrow mb-4">Yoga, Meditation & Mindful Living</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.1] text-balance">
              Find Stillness in the Everyday.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-ivory/80 text-lg leading-relaxed">
              In the quiet hours of morning, as light filters through the trees, our
              yoga and meditation sessions offer a space to breathe, to move gently,
              and to reconnect with the stillness that lives beneath the surface of
              daily life.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link to="/programmes/yoga-meditation" className="btn-outline-light mt-8">
              Discover Available Experiences
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
