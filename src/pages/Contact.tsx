import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { siteConfig } from '@/data/site';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const contactCards = [
    { icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phoneRaw}` },
    { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: `https://wa.me/${siteConfig.whatsapp}` },
    { icon: MapPin, label: 'Address', value: siteConfig.addressShort, href: 'https://maps.google.com/?q=Jamdoli+Agra+Road+Jaipur' },
  ];

  return (
    <>
      <PageHero
        image="https://images.pexels.com/photos/32261804/pexels-photo-32261804.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Contact"
        title="Get in Touch with Nowal NatureCare"
        subtitle="We welcome your questions about our programmes, therapies, accommodation, and wellness experiences."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
      />

      <section className="py-20 md:py-32 bg-ivory">
        <div className="container-lux">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactCards.map((card, i) => (
              <Reveal key={card.label} delay={i * 0.08}>
                <a
                  href={card.href}
                  target={card.icon === MapPin ? '_blank' : undefined}
                  rel={card.icon === MapPin ? 'noopener noreferrer' : undefined}
                  className="group block p-6 border border-forest-700/10 hover:border-gold-400/40 transition-colors text-center"
                >
                  <div className="w-12 h-12 mx-auto flex items-center justify-center bg-forest-700/5 group-hover:bg-gold-400/10 transition-colors">
                    <card.icon size={20} className="text-forest-700 group-hover:text-gold-500 transition-colors" />
                  </div>
                  <p className="eyebrow mt-4 text-sage-dark">{card.label}</p>
                  <p className="mt-2 text-charcoal/70 text-sm">{card.value}</p>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <Reveal>
              <p className="eyebrow mb-4">Send a Message</p>
              <h2 className="font-serif text-3xl md:text-4xl text-forest-700 leading-[1.15]">
                We're Here to Help
              </h2>
              <span className="gold-divider mt-6 block" />
              <p className="mt-6 text-charcoal/60 leading-relaxed">
                Whether you're planning a wellness retreat, have questions about our
                programmes, or need guidance choosing the right experience, our team
                is ready to assist.
              </p>
              <div className="mt-8 flex items-center gap-3 text-charcoal/60">
                <Clock size={16} className="text-gold-400" />
                <span className="text-sm">We typically respond within 24 hours.</span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              {sent ? (
                <div className="p-8 bg-sage/15 border border-sage/30 text-center">
                  <div className="w-16 h-16 mx-auto bg-gold-400/20 flex items-center justify-center rounded-full">
                    <Send size={24} className="text-gold-500" />
                  </div>
                  <h3 className="font-serif text-2xl text-forest-700 mt-4">Message Sent</h3>
                  <p className="text-charcoal/60 mt-2 text-sm">
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
                    className="text-link mt-6 inline-flex"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-charcoal/60 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-forest-700/15 focus:border-gold-400 outline-none transition-colors text-charcoal"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-charcoal/60 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-forest-700/15 focus:border-gold-400 outline-none transition-colors text-charcoal"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-charcoal/60 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-forest-700/15 focus:border-gold-400 outline-none transition-colors text-charcoal"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-charcoal/60 mb-2">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-forest-700/15 focus:border-gold-400 outline-none transition-colors text-charcoal resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                    <Send size={16} />
                  </button>
                  <p className="text-xs text-charcoal/40 text-center">
                    Your information is used only to respond to your enquiry.
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
