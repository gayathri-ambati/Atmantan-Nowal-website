import { useParams, Navigate, Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { getTherapy } from '@/data/therapies';
import { siteConfig } from '@/data/site';

export default function TherapyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const therapy = slug ? getTherapy(slug) : undefined;

  if (!therapy) return <Navigate to="/therapies" replace />;

  return (
    <>
      <PageHero
        image={therapy.image}
        eyebrow={`${therapy.category}`}
        title={therapy.title}
        subtitle={therapy.shortDesc}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Therapies', path: '/therapies' },
          { label: therapy.title },
        ]}
      />

      <section className="py-20 md:py-32 bg-ivory">
        <div className="container-lux max-w-4xl">
          <Reveal>
            <p className="eyebrow mb-4">About This Therapy</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl text-forest-700 leading-[1.15]">
              {therapy.title}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <span className="gold-divider mt-6 block" />
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
              {therapy.longDesc}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-sage/15">
        <div className="container-lux max-w-4xl">
          <Reveal>
            <p className="eyebrow mb-4">How It Works</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-charcoal/70 text-lg leading-relaxed">{therapy.howItWorks}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12">
              <h3 className="font-serif text-2xl text-forest-700 mb-6">What to Expect</h3>
              <ul className="space-y-3">
                {therapy.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-charcoal/70">
                    <Check size={18} className="text-gold-400 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-ivory">
        <div className="container-lux max-w-4xl">
          <Reveal>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/plan-your-stay" className="btn-primary">
                Enquire About This Therapy
                <ArrowRight size={16} />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=I%20am%20interested%20in%20${encodeURIComponent(therapy.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Enquire on WhatsApp
              </a>
              <Link to="/therapies" className="btn-outline">
                View All Therapies
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Experience This Therapy During Your Stay"
        subtitle="Our practitioners are ready to guide you through a personalised wellness experience."
        image={therapy.image}
        secondaryLabel="Explore Programmes"
        secondaryLink="/programmes"
      />
    </>
  );
}
