import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { siteConfig } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-forest-700 text-ivory">
      <div className="container-lux py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-6 text-ivory/60 text-sm leading-relaxed max-w-xs">
              A sanctuary for natural wellness in Jaipur, Rajasthan, where ancient healing
              traditions meet mindful living.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center border border-ivory/20 hover:border-gold-400 hover:text-gold-400 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center border border-ivory/20 hover:border-gold-400 hover:text-gold-400 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 flex items-center justify-center border border-ivory/20 hover:border-gold-400 hover:text-gold-400 transition-colors"
              >
                <Youtube size={16} />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 flex items-center justify-center border border-ivory/20 hover:border-gold-400 hover:text-gold-400 transition-colors"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="eyebrow mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Nowal', path: '/about' },
                { label: 'Wellness Programmes', path: '/programmes' },
                { label: 'Therapies', path: '/therapies' },
                { label: 'Accommodation', path: '/accommodation' },
                { label: 'Experiences', path: '/experiences' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Blog', path: '/blog' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-ivory/60 text-sm hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-6">Information</h4>
            <ul className="space-y-3">
              {[
                { label: 'Contact', path: '/contact' },
                { label: 'Plan Your Stay', path: '/plan-your-stay' },
                { label: 'FAQ', path: '/faq' },
                { label: 'Privacy Policy', path: '/privacy-policy' },
                { label: 'Terms & Conditions', path: '/terms' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-ivory/60 text-sm hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-ivory/60 text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-gold-400" />
                <span>{siteConfig.addressShort}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="flex-shrink-0 mt-0.5 text-gold-400" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="text-ivory/60 text-sm hover:text-gold-400 transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="flex-shrink-0 mt-0.5 text-gold-400" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-ivory/60 text-sm hover:text-gold-400 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory/40 text-xs">
            {'\u00A9'} {new Date().getFullYear()} Nowal NatureCare. All rights reserved.
          </p>
          <p className="text-ivory/40 text-xs">
            Jaipur, Rajasthan, India
          </p>
        </div>
      </div>
    </footer>
  );
}
