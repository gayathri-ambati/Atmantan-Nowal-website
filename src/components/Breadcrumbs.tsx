import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  path?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 flex-wrap">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {item.path ? (
            <Link
              to={item.path}
              className="text-xs tracking-wider uppercase text-ivory/60 hover:text-gold-400 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-xs tracking-wider uppercase text-gold-400">{item.label}</span>
          )}
          {i < items.length - 1 && (
            <ChevronRight size={12} className="text-ivory/30" />
          )}
        </span>
      ))}
    </nav>
  );
}
