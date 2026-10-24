import { Link } from 'react-router-dom';
import { MessageCircle, Sparkles } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { brand, offer } from '@/data/homeContent';

export default function OfferBanner() {
    return (
        <section className="py-16 md:py-24 bg-ivory">
            <div className="container-lux">
                <Reveal>
                    <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden bg-forest-800 shadow-2xl">
                        <div className="aspect-[4/3] md:aspect-auto md:min-h-[420px]">
                            <img src={offer.image} alt={offer.title} loading="lazy" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-8 md:p-14 flex flex-col justify-center bg-gradient-to-br from-forest-800 to-forest-900">
                            <span className="inline-flex items-center gap-2 self-start rounded-full border border-gold-400/50 px-4 py-1.5 text-xs tracking-wider text-gold-400">
                                <Sparkles size={14} />
                                {offer.badge}
                            </span>
                            <h2 className="font-serif text-3xl md:text-4xl text-ivory mt-6">{offer.title}</h2>
                            <p className="font-serif text-6xl md:text-7xl text-gold-400 mt-4">{offer.highlight}</p>
                            <p className="mt-5 text-ivory/80 leading-relaxed max-w-md">{offer.text}</p>
                            <div className="mt-8 flex flex-wrap items-center gap-6">
                                <Link to="/plan-your-stay" className="btn-gold">
                                    Book Now
                                </Link>
                                <a
                                    href={brand.whatsapp}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-ivory hover:text-gold-400 transition-colors"
                                >
                                    <MessageCircle size={18} />
                                    Ask on WhatsApp
                                </a>
                            </div>
                            <p className="mt-8 pt-4 border-t border-ivory/15 text-xs text-ivory/50">{offer.terms}</p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}