import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  image: string;
  primaryLabel?: string;
  primaryLink?: string;
  secondaryLabel?: string;
  secondaryLink?: string;
}

export default function CTASection({
  title,
  subtitle,
  image,
  primaryLabel = 'Plan Your Stay',
  primaryLink = '/plan-your-stay',
  secondaryLabel = 'Explore Our Programmes',
  secondaryLink = '/programmes',
}: CTASectionProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-forest-800/70" />
      </div>
      <div className="relative container-lux text-center">
        <p className="eyebrow mb-4 flex items-center justify-center gap-3">
          <span className="gold-divider" />
          Begin Your Journey
          <span className="gold-divider" />
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.1] max-w-3xl mx-auto text-balance">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-6 text-ivory/70 text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={primaryLink} className="btn-gold">
            {primaryLabel}
            <ArrowRight size={16} />
          </Link>
          <Link to={secondaryLink} className="btn-outline-light">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
