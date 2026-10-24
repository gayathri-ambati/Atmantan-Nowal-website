import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { methods } from '@/data/homeContent';

export default function HealingMethods() {
    const [active, setActive] = useState(0);

    return (
        <section className="py-20 md:py-32 bg-ivory">
            <div className="container-lux">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-12">
                    <Reveal>
                        <p className="eyebrow mb-4">Our Approach</p>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-700 leading-[1.15] text-balance">
                            Nowal Healing Methods
                        </h2>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <p className="text-charcoal/60 text-lg leading-relaxed">
                            Four sides of a stay at Nowal: the grounds that slow you down, the care shaped around you, the
                            therapies that restore you, and the food and rhythm that carry it home.
                        </p>
                    </Reveal>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:h-[560px]">
                {methods.map((m, i) => {
                    const isActive = i === active;
                    return (
                        <div
                            key={m.title}
                            onMouseEnter={() => setActive(i)}
                            onFocus={() => setActive(i)}
                            className={`group relative overflow-hidden h-72 lg:h-auto transition-[flex] duration-700 ease-in-out ${isActive ? 'lg:flex-[3]' : 'lg:flex-1'
                                }`}
                        >
                            <img
                                src={m.image}
                                alt=""
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/20 to-transparent" />

                            <span className="absolute top-5 right-6 font-serif text-5xl text-ivory/50">{String(i + 1).padStart(2, '0')}</span>

                            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                                <h3 className="font-serif text-2xl text-ivory">{m.title}</h3>
                                <div
                                    className={`overflow-hidden transition-all duration-700 ${isActive ? 'lg:max-h-40 lg:opacity-100' : 'lg:max-h-0 lg:opacity-0'
                                        }`}
                                >
                                    <p className="mt-3 text-ivory/80 leading-relaxed max-w-md">{m.text}</p>
                                    <Link
                                        to={m.href}
                                        className="mt-4 inline-flex items-center gap-2 text-xs tracking-wider text-gold-400 hover:text-ivory transition-colors"
                                    >
                                        Explore
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}