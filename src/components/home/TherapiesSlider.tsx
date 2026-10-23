import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { therapies } from '@/data/therapies';

export default function TherapiesSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanLeft(scrollLeft > 10);
    setCanRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-20 md:py-32 bg-forest-700">
      <div className="container-lux">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal className="max-w-2xl">
            <p className="eyebrow-light mb-4">The Healing Therapies</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory leading-[1.15] text-balance">
              Therapies Rooted in Nature and Tradition
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canLeft}
              aria-label="Previous therapies"
              className="w-12 h-12 border border-ivory/30 flex items-center justify-center text-ivory hover:border-gold-400 hover:text-gold-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canRight}
              aria-label="Next therapies"
              className="w-12 h-12 border border-ivory/30 flex items-center justify-center text-ivory hover:border-gold-400 hover:text-gold-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowRight size={18} />
            </button>
          </Reveal>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={updateArrows}
        className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 md:px-12 lg:px-20 pb-4"
      >
        {therapies.map((therapy) => (
          <article
            key={therapy.slug}
            className="flex-shrink-0 w-[85vw] sm:w-[420px] snap-start group"
          >
            <Link to={`/therapies/${therapy.slug}`} className="block">
              <div className="overflow-hidden aspect-[3/4] relative">
                <img
                  src={therapy.image}
                  alt={therapy.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gold-400 text-xs tracking-[0.2em] uppercase mb-2">
                    {therapy.category}
                  </p>
                  <h3 className="font-serif text-2xl text-ivory mb-2">{therapy.title}</h3>
                  <p className="text-ivory/60 text-sm leading-relaxed line-clamp-2">
                    {therapy.shortDesc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-gold-400 text-xs tracking-wider uppercase">
                    Learn More
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
