import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { programmes } from '@/data/programmes';

export default function Programmes() {
  return (
    <>
      <PageHero
        image="https://images.pexels.com/photos/13849088/pexels-photo-13849088.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Wellness Programmes"
        title="Pathways to Natural Wellbeing"
        subtitle="Personalised programmes drawing upon naturopathy, Ayurveda, yoga, nutrition, acupuncture, and physiotherapy — each designed to address different dimensions of wellness."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Wellness Programmes' }]}
      />

      <section className="py-20 md:py-32 bg-ivory">
        <div className="container-lux">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmes.map((prog, i) => (
              <Reveal key={prog.slug} delay={i * 0.08}>
                <Link
                  to={`/programmes/${prog.slug}`}
                  className="group block"
                >
                  <div className="overflow-hidden aspect-[3/4] relative">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 to-transparent" />
                    <span className="absolute top-6 right-6 font-serif text-4xl text-ivory/60">
                      {prog.number}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-gold-400 text-xs tracking-[0.2em] uppercase mb-2">
                        {prog.eyebrow}
                      </p>
                      <h3 className="font-serif text-2xl text-ivory mb-2">
                        {prog.title}
                      </h3>
                      <p className="text-ivory/60 text-sm leading-relaxed line-clamp-2">
                        {prog.shortDesc}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-2 text-gold-400 text-xs tracking-wider uppercase">
                        Explore Programme
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
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
