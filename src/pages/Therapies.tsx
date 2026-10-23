import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { therapies } from '@/data/therapies';

export default function Therapies() {
  return (
    <>
      <PageHero
        image="https://images.pexels.com/photos/37719647/pexels-photo-37719647.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Healing Therapies"
        title="Therapeutic Treatments Rooted in Tradition"
        subtitle="A range of natural therapies including mud therapy, hydrotherapy, massage, acupuncture, and Ayurvedic treatments — each administered by trained practitioners."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Therapies' }]}
      />

      <section className="py-20 md:py-32 bg-ivory">
        <div className="container-lux">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapies.map((therapy, i) => (
              <Reveal key={therapy.slug} delay={i * 0.08}>
                <Link to={`/therapies/${therapy.slug}`} className="group block">
                  <div className="overflow-hidden aspect-[4/5] relative">
                    <img
                      src={therapy.image}
                      alt={therapy.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-gold-400 text-xs tracking-[0.2em] uppercase mb-1">
                        {therapy.category}
                      </p>
                      <h3 className="font-serif text-xl text-ivory">{therapy.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-charcoal/60 text-sm leading-relaxed line-clamp-3">
                    {therapy.shortDesc}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-gold-500 text-xs tracking-wider uppercase">
                    Learn More
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Experience These Therapies in Person"
        subtitle="Book a stay and explore our range of therapeutic treatments tailored to your needs."
        image="https://images.pexels.com/photos/8834648/pexels-photo-8834648.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
    </>
  );
}
