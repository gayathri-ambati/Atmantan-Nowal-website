import Breadcrumbs from './Breadcrumbs';
import Parallax from './Parallax';
import type { Crumb } from './Breadcrumbs';

interface PageHeroProps {
  image: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  align?: 'left' | 'center'; // <-- Added align prop
}

export default function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  align = 'center', // Defaults to center to preserve existing pages
}: PageHeroProps) {
  return (
    <section className="relative h-[55vh] min-h-[420px] md:h-[60vh] flex items-end overflow-hidden">
      <Parallax src={image} alt={title} className="absolute inset-0" speed={0.15} priority />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-800/80 via-forest-800/30 to-forest-800/20" />
      
      {/* Added dynamic alignment classes here */}
      <div
        className={`relative container-lux pb-12 md:pb-16 flex flex-col w-full ${
          align === 'left' ? 'items-start text-left' : 'items-center text-center'
        }`}
      >
        {breadcrumbs && (
          <div className="mb-4">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.1] max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-ivory/70 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}