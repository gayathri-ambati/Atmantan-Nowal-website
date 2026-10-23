import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Parallax from '@/components/Parallax';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <Parallax
        src="https://images.pexels.com/photos/14580738/pexels-photo-14580738.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Serene natural wellness landscape at Nowal NatureCare"
        className="absolute inset-0"
        speed={0.2}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-800/40 via-forest-800/20 to-forest-800/50" />

      <div className="relative container-lux text-center pt-20">
        <p
          className="eyebrow text-gold-400 mb-6 opacity-0"
          style={{ animation: 'fade-up 1s ease-out 0.3s forwards' }}
        >
          A Sanctuary for Natural Wellness
        </p>
        <h1
          className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-ivory leading-[1.05] max-w-5xl mx-auto opacity-0 text-balance"
          style={{ animation: 'fade-up 1.2s ease-out 0.5s forwards' }}
        >
          Return to Nature.
          <br />
          Rediscover Yourself.
        </h1>
        <p
          className="mt-8 text-ivory/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-0"
          style={{ animation: 'fade-up 1s ease-out 0.8s forwards' }}
        >
          An invitation to slow down, restore balance, and reconnect with the natural
          rhythms of wellbeing at Nowal NatureCare.
        </p>
        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center opacity-0"
          style={{ animation: 'fade-up 1s ease-out 1.1s forwards' }}
        >
          <Link to="/plan-your-stay" className="btn-gold">
            Begin Your Wellness Journey
            <ArrowRight size={16} />
          </Link>
          <Link to="/about" className="btn-outline-light">
            Explore Nowal
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-ivory/50 text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-ivory/30 relative overflow-hidden">
          <span
            className="absolute top-0 left-0 w-px h-6 bg-gold-400"
            style={{ animation: 'scroll-indicator 1.8s ease-in-out infinite' }}
          />
        </div>
        <ChevronDown size={16} className="text-ivory/40" />
      </div>
    </section>
  );
}
