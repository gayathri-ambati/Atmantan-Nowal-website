import { useState } from 'react';
import { Send, Check, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { programmeAreas } from '@/data/site';
import { rooms } from '@/data/accommodation';
import { siteConfig } from '@/data/site';

export default function PlanYourStay() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', city: '',
    arrival: '', departure: '', guests: '1',
    interest: '', accommodation: '', requirements: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your full name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number';
    if (!form.arrival) e.arrival = 'Please select an arrival date';
    if (!form.departure) e.departure = 'Please select a departure date';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <PageHero
        image="https://images.pexels.com/photos/40402920/pexels-photo-40402920.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Plan Your Stay"
        title="Begin Your Wellness Journey at Nowal NatureCare"
        subtitle="Share your preferences with us and our team will help you plan a personalised wellness retreat."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Plan Your Stay' }]}
      />

      <section className="py-20 md:py-32 bg-ivory">
        <div className="container-lux">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <Reveal className="lg:col-span-1">
              <p className="eyebrow mb-4">Enquiry</p>
              <h2 className="font-serif text-3xl md:text-4xl text-forest-700 leading-[1.15]">
                Tell Us About Your Wellness Goals
              </h2>
              <span className="gold-divider mt-6 block" />
              <p className="mt-6 text-charcoal/60 leading-relaxed">
                Complete the form and our team will respond within 24 hours to help
                you plan your stay. For immediate assistance, reach us on WhatsApp.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-charcoal/70 hover:text-gold-500 transition-colors"
                >
                  <MessageCircle size={18} className="text-gold-400" />
                  <span className="text-sm">Enquire on WhatsApp</span>
                </a>
                <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-3 text-charcoal/70 hover:text-gold-500 transition-colors">
                  <span className="text-sm">{siteConfig.phone}</span>
                </a>
              </div>

              <div className="mt-8 p-5 bg-sage/15 border-l-2 border-gold-400">
                <p className="text-xs text-charcoal/50 leading-relaxed">
                  This is an enquiry form, not a confirmed booking. Our team will
                  contact you to finalise availability, programme details, and
                  reservation. No payment is required at this stage.
                </p>
              </div>
            </Reveal>

            <div className="lg:col-span-2">
              {submitted ? (
                <Reveal>
                  <div className="p-8 md:p-12 bg-sage/15 border border-sage/30 text-center">
                    <div className="w-16 h-16 mx-auto bg-gold-400/20 flex items-center justify-center rounded-full">
                      <Check size={28} className="text-gold-500" />
                    </div>
                    <h3 className="font-serif text-3xl text-forest-700 mt-6">Enquiry Received</h3>
                    <p className="text-charcoal/60 mt-3 max-w-md mx-auto leading-relaxed">
                      Thank you, {form.name}. We have received your enquiry and our
                      team will contact you within 24 hours to help plan your
                      wellness stay.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href={`https://wa.me/${siteConfig.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                      >
                        <MessageCircle size={16} />
                        Continue on WhatsApp
                      </a>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="btn-primary"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                </Reveal>
              ) : (
                <Reveal delay={0.1}>
                  <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8 bg-white border border-forest-700/10">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Full Name *" error={errors.name}>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={inputClass(!!errors.name)}
                        />
                      </Field>
                      <Field label="Email *" error={errors.email}>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={inputClass(!!errors.email)}
                        />
                      </Field>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Phone Number *" error={errors.phone}>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className={inputClass(!!errors.phone)}
                        />
                      </Field>
                      <Field label="City / Country">
                        <input
                          type="text"
                          value={form.city}
                          onChange={(e) => setForm({ ...form, city: e.target.value })}
                          className={inputClass(false)}
                        />
                      </Field>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Arrival Date *" error={errors.arrival}>
                        <input
                          type="date"
                          required
                          min={today}
                          value={form.arrival}
                          onChange={(e) => setForm({ ...form, arrival: e.target.value })}
                          className={inputClass(!!errors.arrival)}
                        />
                      </Field>
                      <Field label="Departure Date *" error={errors.departure}>
                        <input
                          type="date"
                          required
                          min={form.arrival || today}
                          value={form.departure}
                          onChange={(e) => setForm({ ...form, departure: e.target.value })}
                          className={inputClass(!!errors.departure)}
                        />
                      </Field>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Number of Guests">
                        <select
                          value={form.guests}
                          onChange={(e) => setForm({ ...form, guests: e.target.value })}
                          className={inputClass(false)}
                        >
                          {['1', '2', '3', '4', '5+'].map((n) => (
                            <option key={n} value={n}>{n}</option>
                          ))}
                        </select>
                      </Field>
                      <Field label="Area of Wellness Interest">
                        <select
                          value={form.interest}
                          onChange={(e) => setForm({ ...form, interest: e.target.value })}
                          className={inputClass(false)}
                        >
                          <option value="">Select an area</option>
                          {programmeAreas.map((area) => (
                            <option key={area} value={area}>{area}</option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    <Field label="Preferred Accommodation">
                      <select
                        value={form.accommodation}
                        onChange={(e) => setForm({ ...form, accommodation: e.target.value })}
                        className={inputClass(false)}
                      >
                        <option value="">No preference</option>
                        {rooms.map((room) => (
                          <option key={room.slug} value={room.name}>{room.name}</option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Additional Requirements">
                      <textarea
                        rows={4}
                        value={form.requirements}
                        onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                        placeholder="Any specific needs, dietary requirements, or questions..."
                        className={`${inputClass(false)} resize-none`}
                      />
                    </Field>

                    <button type="submit" className="btn-primary w-full">
                      Submit Enquiry
                      <Send size={16} />
                    </button>

                    <p className="text-xs text-charcoal/40 text-center">
                      By submitting this form, you agree to be contacted by our team
                      regarding your enquiry. Your information is kept private and used
                      only for this purpose.
                    </p>
                  </form>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function inputClass(hasError: boolean) {
  return `w-full px-4 py-3 bg-ivory border ${
    hasError ? 'border-red-400' : 'border-forest-700/15 focus:border-gold-400'
  } outline-none transition-colors text-charcoal`;
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs tracking-wider uppercase text-charcoal/60 mb-2">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
