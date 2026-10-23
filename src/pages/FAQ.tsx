import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { faqs } from '@/data/faqs';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        image="https://images.pexels.com/photos/14024789/pexels-photo-14024789.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Frequently Asked Questions"
        title="Answers to Common Questions"
        subtitle="Everything you need to know about planning your wellness stay at Nowal NatureCare."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'FAQ' }]}
      />

      <section className="py-20 md:py-32 bg-ivory">
        <div className="container-lux max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.03}>
                <div className="border border-forest-700/10">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={open === i}
                  >
                    <span className="font-serif text-lg text-forest-700">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`text-gold-400 flex-shrink-0 transition-transform duration-300 ${
                        open === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: open === i ? '300px' : '0px' }}
                  >
                    <p className="px-5 pb-5 text-charcoal/60 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-12 p-6 bg-sage/15 text-center">
              <p className="text-charcoal/70">Still have questions?</p>
              <a href="/contact" className="text-link mt-3 inline-flex">
                Contact Our Team
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Ready to Plan Your Stay?"
        subtitle="Our team is here to help you create a personalised wellness experience."
        image="https://images.pexels.com/photos/14580738/pexels-photo-14580738.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
    </>
  );
}
