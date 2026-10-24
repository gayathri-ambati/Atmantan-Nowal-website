import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, Leaf, Flower2, Activity, HeartHandshake } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { targets } from '@/data/homeContent';

const iconMap = {
    droplets: Droplets,
    leaf: Leaf,
    flower: Flower2,
    activity: Activity,
    heart: HeartHandshake,
} as const;

export default function HealingTargets() {
    return (
        <section className="py-20 md:py-32 bg-ivory overflow-hidden">
            <div className="container-lux">
                <Reveal className="text-center max-w-3xl mx-auto mb-16">
                    <p className="eyebrow mb-4">Our Disciplines</p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-700 leading-[1.15] text-balance">
                        Nowal Healing Targets
                    </h2>
                    <p className="mt-4 text-charcoal/60 text-lg leading-relaxed">
                        Five disciplines, one plan. Your practitioner draws on each as your body needs it, so every day
                        of your stay works towards the same recovery.
                    </p>
                </Reveal>

                <div className="relative">
                    {/* winding branch behind the cards */}
                    <svg
                        className="hidden lg:block absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-40 pointer-events-none"
                        viewBox="0 0 1200 160"
                        preserveAspectRatio="none"
                        fill="none"
                        aria-hidden
                    >
                        <path
                            d="M0 100 C120 40 220 40 300 90 S480 140 600 80 S840 20 900 80 S1100 130 1200 60"
                            stroke="#8a5a3c"
                            strokeWidth="5"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>

                    <div className="relative grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {targets.map((item, i) => {
                            const Icon = iconMap[item.icon as keyof typeof iconMap];
                            return (
                                <Reveal key={item.slug} delay={i * 0.1} className={i % 2 === 0 ? 'lg:mt-20' : ''}>
                                    <Link
                                        to={`/therapies/${item.slug}`}
                                        className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                                    >
                                        <div className="aspect-[4/3] overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="px-5 pb-6">
                                            <span className="-mt-6 relative z-10 w-12 h-12 rounded-full bg-forest-700 text-ivory flex items-center justify-center border-4 border-white">
                                                <Icon size={18} />
                                            </span>
                                            <h3 className="font-serif text-xl text-forest-700 mt-3">{item.title}</h3>
                                            <p className="text-sm text-charcoal/60 mt-2 leading-relaxed">{item.text}</p>
                                            <span className="mt-4 inline-flex items-center gap-2 text-xs tracking-wider text-forest-700 group-hover:text-gold-500 transition-colors">
                                                Explore
                                                <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </Link>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}