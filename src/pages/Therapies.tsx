import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import ScrollTree from '@/components/ScrollTree'; // Make sure this path is correct
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
        align="left"
      />

      {/* Main Content Area with Scroll Tree */}
      <section className="relative bg-[#fcfbf8] overflow-hidden py-20 md:py-32">
        
        {/* The Scroll Tree - positioned absolute to fill this section */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-24 xl:w-32 pointer-events-none z-0">
          <ScrollTree className="absolute inset-0 h-full w-full opacity-80" />
        </div>

        {/* Content Container - padded to avoid overlapping the tree */}
        <div className="container-lux relative z-10 lg:pl-24 max-w-7xl mx-auto">
          
          {/* Centered Intro Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <Reveal>
              <p className="eyebrow mb-4 justify-center flex items-center gap-3">
                <span className="gold-divider" />
                Our Offerings
                <span className="gold-divider" />
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-forest-900 leading-[1.15] text-balance mb-6">
                Ancient Practices for Modern Wellbeing
              </h2>
              <p className="text-forest-900/70 text-lg leading-relaxed">
                Explore our curated collection of therapeutic treatments. Each therapy is designed to restore balance, alleviate stress, and promote deep healing from within.
              </p>
            </Reveal>
          </div>

          {/* Therapies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {therapies.map((therapy, i) => (
              <Reveal key={therapy.slug} delay={(i % 3) * 0.1} className="h-full">
                <Link
                  to={`/therapies/${therapy.slug}`}
                  className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm border border-forest-900/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={therapy.image}
                      alt={therapy.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    />
                    {/* Gradient Overlay for text readability (if used over image) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-forest-900 text-[11px] font-semibold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full">
                      {therapy.category}
                    </div>
                  </div>
                  
                  {/* Content Body */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="mb-4">
                      <Leaf size={24} className="text-sage-dark/50 transition-colors duration-300 group-hover:text-gold-500" />
                    </div>
                    <h3 className="font-serif text-2xl text-forest-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                      {therapy.title}
                    </h3>
                    <p className="text-forest-900/60 text-sm leading-relaxed mb-6 line-clamp-3">
                      {therapy.shortDesc}
                    </p>
                    
                    {/* Footer Link */}
                    <div className="mt-auto pt-4 flex items-center text-gold-600 text-xs font-semibold tracking-[0.1em] uppercase">
                      Explore Therapy 
                      <ArrowRight 
                        size={14} 
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                      />
                    </div>
                  </div>
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