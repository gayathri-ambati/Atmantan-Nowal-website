import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp, ChevronDown, Play, ArrowRight, Quote } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { videoStories, textStories } from '@/data/homeContent';

function VerticalNav({
    index,
    total,
    onPrev,
    onNext,
    label,
}: {
    index: number;
    total: number;
    onPrev: () => void;
    onNext: () => void;
    label: string;
}) {
    const btn =
        'w-11 h-11 rounded-full bg-white border border-forest-700/15 shadow flex items-center justify-center text-forest-700 hover:text-gold-500 transition-colors';
    return (
        <div className="flex lg:flex-col items-center gap-3">
            <button className={btn} onClick={onPrev} aria-label={`Previous ${label}`}>
                <ChevronUp size={18} />
            </button>
            <span className="text-sm text-charcoal/60 tabular-nums">
                {index + 1} / {total}
            </span>
            <button className={btn} onClick={onNext} aria-label={`Next ${label}`}>
                <ChevronDown size={18} />
            </button>
        </div>
    );
}

export default function HealingStories() {
    const [v, setV] = useState(0);
    const [t, setT] = useState(0);
    const [playing, setPlaying] = useState(false);

    const wrap = (n: number, len: number) => (n + len) % len;

    // text testimonials rotate by themselves
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const id = setInterval(() => setT((x) => wrap(x + 1, textStories.length)), 7000);
        return () => clearInterval(id);
    }, []);

    const goV = (d: number) => {
        setPlaying(false);
        setV((x) => wrap(x + d, videoStories.length));
    };
    const story = videoStories[v];
    const text = textStories[t];

    return (
        <section className="py-20 md:py-32 bg-sage/15 overflow-hidden">
            <div className="container-lux">
                <Reveal className="text-center max-w-3xl mx-auto mb-16">
                    <p className="eyebrow mb-4">Guest Stories</p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-700 leading-[1.15] text-balance">
                        Nowal Healing Stories
                    </h2>
                    <p className="mt-4 text-charcoal/60 text-lg leading-relaxed">
                        Hear how personalised care, natural therapies and mindful living have shaped the wellness
                        journeys of our guests.
                    </p>
                </Reveal>

                <div className="grid lg:grid-cols-2 gap-14 lg:gap-8 items-center">
                    {/* Video story */}
                    <Reveal>
                        <div className="flex flex-col lg:flex-row items-center gap-6">
                            <div
                                key={v}
                                className="relative w-full max-w-[520px] aspect-[4/3] overflow-hidden border-4 border-forest-700 shadow-2xl animate-[fade-up_0.6s_ease-out]"
                                style={{ borderRadius: '58% 42% 46% 54% / 52% 48% 52% 48%' }}
                            >
                                {playing ? (
                                    <video src={story.video} poster={story.poster} controls autoPlay playsInline className="w-full h-full object-cover" />
                                ) : (
                                    <>
                                        <img src={story.poster} alt={story.name} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-forest-900/30" />
                                        <button
                                            onClick={() => setPlaying(true)}
                                            aria-label={`Play: ${story.caption}`}
                                            className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-ivory/90 text-forest-700 flex items-center justify-center hover:scale-105 transition-transform"
                                        >
                                            <Play size={28} className="ml-1" fill="currentColor" />
                                        </button>
                                        <p className="absolute bottom-[14%] inset-x-[14%] text-center font-serif text-ivory text-lg">
                                            {story.caption}
                                        </p>
                                    </>
                                )}
                            </div>
                            <VerticalNav index={v} total={videoStories.length} onPrev={() => goV(-1)} onNext={() => goV(1)} label="video story" />
                        </div>
                    </Reveal>

                    {/* Text story */}
                    <Reveal delay={0.15}>
                        <div className="flex flex-col lg:flex-row items-center gap-6 lg:justify-end">
                            <VerticalNav
                                index={t}
                                total={textStories.length}
                                onPrev={() => setT((x) => wrap(x - 1, textStories.length))}
                                onNext={() => setT((x) => wrap(x + 1, textStories.length))}
                                label="testimonial"
                            />
                            <div
                                key={t}
                                className="relative w-full max-w-[520px] bg-ivory border border-forest-700/10 shadow-xl p-10 md:p-14 animate-[fade-up_0.6s_ease-out]"
                                style={{ borderRadius: '8% 50% 8% 50% / 8% 40% 8% 40%' }}
                            >
                                <Quote size={28} className="text-gold-400 mb-4" />
                                <p className="font-serif text-xl md:text-2xl text-forest-700 leading-relaxed">{text.quote}</p>
                                <div className="mt-6">
                                    <p className="font-serif text-lg text-forest-700">{text.name}</p>
                                    <p className="text-xs tracking-wider text-gold-500 uppercase mt-1">{text.role}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 lg:text-right">
                            <Link to="/testimonials" className="text-link inline-flex">
                                Read all stories
                                <ArrowRight size={14} />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}