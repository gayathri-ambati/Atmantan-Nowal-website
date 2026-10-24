import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { programmes, type Programme } from '@/data/programmes';
import ScrollTree from '@/components/ScrollTree'; // <-- Ensure this path is correct for your ScrollTree component

// --- Programme List Item Component ---
function ProgrammeFeature({ prog, index }: { prog: Programme; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative w-full py-16 md:py-24 border-b border-forest-900/5 last:border-0">
      <div className={`flex flex-col gap-10 md:gap-16 lg:gap-24 md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        
        {/* Image Side */}
        <Reveal className="w-full md:w-1/2" y={40}>
          <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[5/4] overflow-hidden rounded-[2rem] shadow-2xl group">
            <img
              src={prog.image}
              alt={prog.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />
            {/* Soft overlay to make it look premium */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </Reveal>

        {/* Content Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <Reveal delay={0.1}>
            <span className="text-gold-600 font-serif text-lg tracking-widest block mb-2">
              {prog.number}
            </span>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-forest-900 leading-[1.1] mb-6">
              {prog.title}
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-forest-900/70 text-lg leading-relaxed mb-8 max-w-xl">
              {prog.longDesc ? prog.longDesc.split('.')[0] + '.' : prog.shortDesc}
            </p>
          </Reveal>

          {/* Signature Therapies */}
          <Reveal delay={0.25}>
            <div className="mb-8">
              <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-forest-900/50 uppercase mb-4">
                <Leaf size={14} className="text-sage-dark" />
                Signature Therapies
              </p>
              <div className="flex flex-wrap gap-2.5">
                {/* Using the first 5 offerings as therapies tags */}
                {prog.offerings.slice(0, 5).map((offering) => (
                  <span
                    key={offering.title}
                    className="inline-block bg-white border border-forest-900/10 rounded-full px-4 py-2 text-sm text-forest-900/80 shadow-sm transition-colors hover:border-gold-400/50 hover:bg-gold-50"
                  >
                    {offering.title}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <Link
              to={`/programmes/${prog.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-forest-900 group w-fit"
            >
              <span className="relative pb-1">
                Explore {prog.title}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-forest-900/30 transition-all duration-300 group-hover:bg-gold-400 group-hover:h-[2px]" />
              </span>
              <ArrowRight
                size={16}
                className="text-gold-500 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

// --- Main Page Component ---
export default function Programmes() {
  return (
    <>
      <PageHero
        image="https://images.pexels.com/photos/13849088/pexels-photo-13849088.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Our Offerings"
        title="Pathways to Natural Wellbeing"
        subtitle="Personalised programmes drawing upon naturopathy, Ayurveda, yoga, nutrition, acupuncture, and physiotherapy — each designed to address different dimensions of wellness."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Wellness Programmes' }]}
        align="left"
      />

      {/* Main Content Area - relative so the tree can span the full height */}
      <section className="relative bg-[#fcfbf8] overflow-hidden">
        
        {/* The Scroll Tree - positioned absolute to fill this section */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-24 xl:w-32 pointer-events-none z-0">
          <ScrollTree className="absolute inset-0 h-full w-full opacity-80" />
        </div>

        {/* Content Container - z-10 to sit above the tree */}
        <div className="container-lux relative z-10 py-16 md:py-24">
          
          <Reveal className="max-w-3xl mb-12 lg:pl-16">
            <p className="eyebrow mb-4 flex items-center gap-3">
              <span className="gold-divider" />
              Six Disciplines
            </p>
            <h2 className="font-serif text-3xl leading-[1.15] text-forest-900 md:text-5xl text-balance mb-6">
              Choose a path, or combine several
            </h2>
            <p className="text-lg leading-relaxed text-forest-900/70">
              Each programme can stand alone or be woven into a longer stay. Your consultation
              shapes the duration, therapies, and daily rhythm around you.
            </p>
          </Reveal>

          {/* Programme List - lg:pl-16 to avoid overlapping the tree */}
          <div className="lg:pl-16 max-w-6xl mx-auto">
            {programmes.map((prog, i) => (
              <ProgrammeFeature key={prog.slug} prog={prog} index={i} />
            ))}
          </div>

        </div>
      </section>

      <CTASection
        title="Not Sure Which Programme Is Right for You?"
        subtitle="Our team can help you choose the pathway that best aligns with your wellness goals."
        image="https://images.pexels.com/photos/9650567/pexels-photo-9650567.jpeg?auto=compress&cs=tinysrgb&w=1920"
        primaryLabel="Make an Enquiry"
        secondaryLabel="Contact Us"
        secondaryLink="/contact"
      />
    </>
  );
}