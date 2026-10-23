import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { getProgramme } from '@/data/programmes';
import { siteConfig } from '@/data/site';

export default function ProgrammeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const programme = slug ? getProgramme(slug) : undefined;

  if (!programme) return <Navigate to="/programmes" replace />;

  return (
    <>
      <PageHero
        image={programme.image}
        eyebrow={`Programme ${programme.number} \u2014 ${programme.eyebrow}`}
        title={programme.title}
        subtitle={programme.shortDesc}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Programmes', path: '/programmes' },
          { label: programme.title },
        ]}
      />

      <section className="py-20 md:py-32 bg-ivory">
        <div className="container-lux max-w-4xl">
          <Reveal>
            <p className="eyebrow mb-4">Overview</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl text-forest-700 leading-[1.15]">
              {programme.title}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <span className="gold-divider mt-6 block" />
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
              {programme.longDesc}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-8 p-6 bg-sage/15 border-l-2 border-gold-400">
              <p className="text-xs tracking-[0.2em] uppercase text-sage-dark mb-2">
                Philosophy
              </p>
              <p className="text-forest-700 font-serif text-xl leading-relaxed">
                {programme.philosophy}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <p className="mt-8 text-sm text-charcoal/50">
              <span className="font-semibold text-charcoal/70">Typical Duration:</span>{' '}
              {programme.duration}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-sage/15">
        <div className="container-lux">
          <Reveal className="max-w-3xl mb-16">
            <p className="eyebrow mb-4">What We Offer</p>
            <h2 className="font-serif text-3xl md:text-4xl text-forest-700 leading-[1.15]">
              Treatments and Practices Within This Programme
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {programme.offerings.map((offering, i) => (
              <Reveal key={offering.title} delay={i * 0.08}>
                <div className="border-t border-forest-700/15 pt-6">
                  <h3 className="font-serif text-xl text-forest-700">{offering.title}</h3>
                  <p className="text-charcoal/60 mt-2 leading-relaxed">{offering.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-ivory">
        <div className="container-lux max-w-4xl">
          <Reveal>
            <p className="eyebrow mb-4">Your Experience</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl text-forest-700 leading-[1.15]">
              What a Typical Day Includes
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {programme.experiences.map((exp) => (
                <li key={exp} className="flex items-center gap-3 text-charcoal/70">
                  <Check size={16} className="text-gold-400 flex-shrink-0" />
                  {exp}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link to="/plan-your-stay" className="btn-primary">
                Enquire About This Programme
                <ArrowRight size={16} />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=I%20am%20interested%20in%20the%20${encodeURIComponent(programme.title)}%20programme`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Ready to Begin?"
        subtitle={`Start your ${programme.title} journey at Nowal NatureCare.`}
        image={programme.image}
        secondaryLabel="View All Programmes"
        secondaryLink="/programmes"
      />
    </>
  );
}
