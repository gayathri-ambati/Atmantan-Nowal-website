import type { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

const FROM = {
  left: 'translateX(-90px)',
  right: 'translateX(90px)',
  up: 'translateY(70px)',
  down: 'translateY(-70px)',
  zoom: 'scale(0.82)',
  tilt: 'translateY(70px) rotate(5deg)',
} as const;

interface EnterProps {
  children: ReactNode;
  from?: keyof typeof FROM;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

/** Slides/zooms its children in once, the first time they scroll into view. */
export default function Enter({ children, from = 'up', delay = 0, duration = 0.9, className = '', threshold = 0.15 }: EnterProps) {
  const { ref, inView } = useInView<HTMLDivElement>(threshold);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : FROM[from],
        transition: `opacity ${duration}s ease ${delay}s, transform ${duration}s cubic-bezier(.22,1,.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}