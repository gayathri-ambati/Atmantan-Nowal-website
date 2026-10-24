import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import NowalLogo from '@/components/Logo';
import { brand } from '@/data/homeContent';

/**
 * Sticky video hero. The logo starts big in the upper centre, then as you scroll it glides to the
 * bottom-left corner and shrinks (that is where the page vine grows from). The headline fades out.
 * The logo is an inline SVG, so no image file is needed.
 */
export default function HeroLogoVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const [p, setP] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let raf = 0;
    const calc = () => {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setP(Math.min(1, Math.max(0, -r.top / (r.height - window.innerHeight))));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(calc);
    };
    calc();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const q = Math.min(1, p / 0.8);
  const e = 1 - Math.pow(1 - q, 3);
  const left = 50 - 42 * e; // 50% → 8%
  const top = 33 + 51 * e; // 33% → 84%
  const scale = 1 - 0.55 * e;

  return (
    <section ref={sectionRef} className="relative h-[220vh]">
      <div className="sticky top-0 h-screen min-h-[600px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={brand.heroVideo}
          poster={brand.heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{ transform: `scale(${1 + p * 0.1})` }}
        />
        {/* dark wash + vignette so the logo and headline always read clearly */}
        <div className="absolute inset-0 bg-forest-900" style={{ opacity: 0.3 + p * 0.3 }} />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(0,0,0,0) 30%, rgba(0,0,0,.45) 100%)' }}
        />

        {/* Travelling logo (inline SVG, always visible) */}
        <div
          className="absolute will-change-transform transition-opacity duration-1000"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            opacity: mounted ? 1 : 0,
            transform: `translate(-50%, -50%) scale(${scale})`,
            width: 'min(26rem, 44vh, 80vw)',
          }}
        >
          <div
            className="absolute -inset-10 rounded-full blur-3xl"
            style={{ background: 'rgba(217,180,90,.25)', opacity: 1 - p }}
            aria-hidden
          />
          <NowalLogo className="relative w-full h-auto drop-shadow-[0_12px_30px_rgba(0,0,0,0.55)]" />
        </div>

        {/* Headline block, anchored to the bottom so it never collides with the logo */}
        <div
          className="absolute inset-x-0 bottom-0 px-6 pb-24 text-center"
          style={{ opacity: Math.max(0, 1 - p * 2.4), transform: `translateY(${p * -40}px)` }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-ivory leading-[1.05] text-balance">
            Nature Heals Best
          </h1>
          <p className="mt-4 text-ivory/85 text-base md:text-xl max-w-xl mx-auto leading-relaxed">
            Naturopathy, Ayurveda and mindful living in Jaipur.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/plan-your-stay" className="btn-gold">
              Begin Your Wellness Journey
              <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn-outline-light">
              Explore Nowal
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          style={{ opacity: Math.max(0, 1 - p * 8) }}
        >
          <div className="w-px h-8 bg-ivory/30 relative overflow-hidden">
            <span
              className="absolute top-0 left-0 w-px h-4 bg-gold-400"
              style={{ animation: 'scroll-indicator 1.8s ease-in-out infinite' }}
            />
          </div>
        </div>

        {/* Tagline once the logo has landed */}
        <p
          className="absolute left-[22%] bottom-[10%] hidden md:block font-serif text-2xl text-ivory"
          style={{ opacity: Math.max(0, (p - 0.7) / 0.3) }}
        >
          Take a health assessment, then plan your stay.
        </p>
      </div>
    </section>
  );
}