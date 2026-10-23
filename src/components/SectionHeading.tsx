import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  return (
    <Reveal
      className={`${isCenter ? 'text-center mx-auto' : ''} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <p className={`eyebrow mb-4 ${isCenter ? 'flex items-center justify-center gap-3' : ''}`}>
          {isCenter && <span className="gold-divider" />}
          {eyebrow}
          {isCenter && <span className="gold-divider" />}
        </p>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] ${
          light ? 'text-ivory' : 'text-forest-700'
        } ${isCenter ? 'text-balance' : ''}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? 'text-ivory/70' : 'text-charcoal/60'
          } ${isCenter ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
