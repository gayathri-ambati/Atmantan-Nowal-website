import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import Logo from './Logo';
import { navItems, siteConfig } from '@/data/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (path: string) =>
    location.pathname === path ||
    (path !== '/' && location.pathname.startsWith(path));

  const isHome = location.pathname === '/';
  const headerBg = scrolled
    ? 'bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(38,61,48,0.08)]'
    : isHome
      ? 'bg-transparent'
      : 'bg-forest-700/90 backdrop-blur-sm';
  const textColor = scrolled ? 'text-forest-700' : isHome ? 'text-ivory' : 'text-ivory';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
        onMouseLeave={() => setMegaOpen(null)}
      >
        <div className="container-lux">
          <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-20 md:h-24'}`}>
            <Link to="/" aria-label="Nowal NatureCare home">
              <Logo variant={scrolled ? 'dark' : 'light'} />
            </Link>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navItems.map((item) => (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(item.mega ? item.label : null)}
                >
                  <Link
                    to={item.path}
                    className={`relative px-3 py-2 text-[0.78rem] font-semibold tracking-[0.1em] uppercase transition-colors duration-300 ${textColor} ${
                      isActive(item.path) ? 'text-gold-400' : ''
                    } hover:text-gold-400`}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <span className="absolute bottom-0 left-3 right-3 h-px bg-gold-400" />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link to="/plan-your-stay" className="btn-gold text-[0.72rem] px-6 py-3">
                Plan Your Stay
              </Link>
            </div>

            <button
              className={`lg:hidden p-2 ${textColor}`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {megaOpen && (
          <div
            className="hidden lg:block absolute top-full left-0 right-0 bg-ivory border-t border-forest-700/10 shadow-xl"
            onMouseEnter={() => setMegaOpen(megaOpen)}
          >
            <div className="container-lux py-8">
              <div className="grid grid-cols-3 gap-6 max-w-4xl">
                {navItems.find((n) => n.label === megaOpen)?.mega?.map((sub) => (
                  <Link
                    key={sub.path}
                    to={sub.path}
                    className="group block p-4 border border-transparent hover:border-gold-400/30 hover:bg-white/60 transition-all duration-300"
                    onClick={() => setMegaOpen(null)}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-serif text-lg text-forest-700 group-hover:text-gold-500 transition-colors">
                          {sub.label}
                        </p>
                        <p className="text-sm text-charcoal/60 mt-1 leading-relaxed">{sub.desc}</p>
                      </div>
                      <ChevronRight size={16} className="text-gold-400 mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-forest-700 overflow-y-auto">
          <div className="container-lux h-20 flex items-center justify-between">
            <Logo variant="light" />
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
              className="text-ivory p-2"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="container-lux py-8" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <div key={item.path} className="border-b border-ivory/10">
                {item.mega ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      className="w-full flex items-center justify-between py-4 text-ivory text-lg font-serif"
                    >
                      {item.label}
                      <ChevronRight
                        size={20}
                        className={`text-gold-400 transition-transform ${
                          mobileExpanded === item.label ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="pb-4 space-y-2">
                        <Link
                          to={item.path}
                          className="block py-2 pl-4 text-sage text-sm tracking-wide uppercase"
                        >
                          View All
                        </Link>
                        {item.mega.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className="block py-2 pl-4 text-ivory/70 text-sm hover:text-gold-400 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block py-4 text-ivory text-lg font-serif hover:text-gold-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-8">
              <Link to="/plan-your-stay" className="btn-gold w-full" onClick={() => setMobileOpen(false)}>
                Plan Your Stay
              </Link>
            </div>
            <div className="mt-8 space-y-3">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="block text-ivory/70 text-sm"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-ivory/70 text-sm"
              >
                {siteConfig.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
