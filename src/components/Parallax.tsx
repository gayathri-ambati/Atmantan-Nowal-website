import { useEffect, useRef, useState } from 'react';

interface ParallaxProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  speed?: number;
  priority?: boolean;
}

export default function Parallax({
  src,
  alt,
  className = '',
  imgClassName = '',
  speed = 0.3,
  priority = false,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!imgRef.current) return;
    const handleScroll = () => {
      if (!ref.current || !imgRef.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.bottom > 0 && rect.top < windowHeight) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const offset = (progress - 0.5) * speed * 100;
        imgRef.current.style.transform = `scale(1.15) translateY(${offset}%)`;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, loaded]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover will-change-transform ${imgClassName}`}
        style={{ transform: 'scale(1.15)' }}
      />
    </div>
  );
}
