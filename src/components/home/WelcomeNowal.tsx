import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Parallax from '@/components/Parallax';

export default function WelcomeNowal() {
  return (
    <section className="py-20 md:py-32 bg-ivory">
      <div className="container-lux">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative">
              <Parallax
                src="https://images.pexels.com/photos/8834648/pexels-photo-8834648.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Tranquil forest setting at Nowal NatureCare"
                className="aspect-[4/5] w-full"
                speed={0.15}
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block">
                <div className="bg-gold-400 px-8 py-6">
                  <p className="font-serif text-4xl text-forest-700">15+</p>
                  <p className="text-xs tracking-[0.2em] uppercase text-forest-700/70 mt-1">
                    Years of Wellness Care
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow mb-4">The Nowal Philosophy</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-700 leading-[1.15]">
                Where Nature Nurtures Your Wellbeing
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <span className="gold-divider mt-6 block" />
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                Nowal NatureCare is a wellness sanctuary in Jaipur, Rajasthan, where the
                timeless principles of naturopathy, Ayurveda, and mindful living come
                together in a serene natural setting. Our approach is grounded in the
                understanding that the body possesses an inherent capacity for balance
                and renewal when supported by the elements of nature.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="mt-4 text-charcoal/60 leading-relaxed">
                Through personalised programmes, therapeutic treatments, nourishing
                cuisine, and a peaceful environment, we invite our guests to slow down,
                listen inward, and reconnect with the rhythms of natural wellbeing.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <Link to="/our-story" className="text-link mt-8 inline-flex">
                Discover Our Story
                <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
