'use client';

import Reveal from '@/components/Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  showDivider?: boolean;
  titleClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  showDivider = false,
  titleClassName = 'font-serif text-3xl md:text-4xl text-forest-700 leading-[1.15]',
}: SectionHeadingProps) {
  return (
    <>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className={titleClassName}>{title}</h2>
      </Reveal>
      {showDivider && (
        <Reveal delay={0.2}>
          <span className="gold-divider mt-6 block" />
        </Reveal>
      )}
    </>
  );
}