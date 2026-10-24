import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { packages } from '@/data/homeContent';

const pad = (n: number) => String(n).padStart(2, '0');

export default function PackagesCarousel() {
    const [i, setI] = useState(0);
    const [paused, setPaused] = useState(false);
    const total = packages.length;

    const go = (n: number) => setI(((n % total) + total) % total);

    useEffect(() => {
        if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const id = setInterval(() => setI((x) => (x + 1) % total), 6000);
        return () => clearInterval(id);
    }, [paused, total]);

    const btn =
        'w-12 h-12 border border-forest-700/30 flex items-center justify-center text-forest-700 hover:border-gold-400 hover:text-gold-500 transition-colors';

    return (
        <section className="py-20 md:py-32 bg-sage/15">
            <div className="container-lux">
                <Reveal className="text-center max-w-3xl mx-auto mb-12">
                    <p className="eyebrow mb-4">Healing Packages</p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-700 leading-[1.15] text-balance">
                        Choose a Stay That Fits Your Recovery
                    </h2>
                </Reveal>

                <div
                    className="relative"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    onFocus={() => setPaused(true)}
                    onBlur={() => setPaused(false)}
                >
                    {/* thin outer frame, like a botanical plate */}
                    <div className="absolute -inset-4 md:-inset-6 border border-gold-500/50 pointer-events-none" aria-hidden />

                    <div className="overflow-hidden bg-ivory shadow-xl" aria-roledescription="carousel" aria-label="Healing packages">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${i * 100}%)` }}
                        >
                            {packages.map((pkg, idx) => (
                                <article
                                    key={pkg.slug}
                                    className="w-full flex-shrink-0 grid md:grid-cols-2"
                                    aria-hidden={idx !== i}
                                    aria-roledescription="slide"
                                >
                                    <div className="aspect-[4/3] md:aspect-auto md:min-h-[460px] overflow-hidden">
                                        <img src={pkg.image} alt={pkg.name} loading="lazy" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-8 md:p-12 flex flex-col justify-center">
                                        <p className="text-sm text-charcoal/50 tabular-nums flex items-center gap-3">
                                            {pad(idx + 1)} / {pad(total)}
                                            <span className="h-px w-10 bg-charcoal/30" />
                                        </p>
                                        <h3 className="font-serif text-3xl text-forest-700 mt-4">{pkg.name}</h3>
                                        <p className="font-serif text-xl md:text-2xl text-forest-700/80 mt-3 leading-snug">{pkg.tagline}</p>
                                        <p className="mt-5 text-charcoal/70 leading-relaxed">{pkg.text}</p>
                                        <p className="mt-4 flex items-center gap-2 text-sm text-charcoal/60">
                                            <Clock size={14} className="text-gold-500" />
                                            {pkg.duration}
                                        </p>
                                        <Link to={`/programmes/${pkg.slug}`} className="text-link mt-8 inline-flex" tabIndex={idx === i ? 0 : -1}>
                                            Explore Journey
                                            <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="mt-10 flex items-center justify-between gap-6">
                        <div className="flex gap-2" role="tablist" aria-label="Select package">
                            {packages.map((pkg, idx) => (
                                <button
                                    key={pkg.slug}
                                    role="tab"
                                    aria-selected={idx === i}
                                    aria-label={pkg.name}
                                    onClick={() => go(idx)}
                                    className={`h-1.5 transition-all duration-500 ${idx === i ? 'w-10 bg-gold-500' : 'w-5 bg-forest-700/25'}`}
                                />
                            ))}
                        </div>
                        <div className="flex gap-3">
                            <button className={btn} onClick={() => go(i - 1)} aria-label="Previous package">
                                <ArrowLeft size={18} />
                            </button>
                            <button className={btn} onClick={() => go(i + 1)} aria-label="Next package">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}