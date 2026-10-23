import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export default function Terms() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using the Nowal NatureCare website, you accept and agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our website or services.',
    },
    {
      title: 'Wellness Programme Information',
      content: 'The information provided on this website about our wellness programmes, therapies, and experiences is for general informational purposes. Our programmes are designed to support general health and wellbeing and complement, but do not replace, professional medical advice or treatment. We recommend consulting with a healthcare provider before beginning any wellness programme, particularly if you have specific health conditions.',
    },
    {
      title: 'Enquiries and Bookings',
      content: 'Submitting an enquiry through our website does not constitute a confirmed reservation. All bookings are subject to availability and confirmation by our team. We reserve the right to decline bookings at our discretion.',
    },
    {
      title: 'Cancellation and Refunds',
      content: 'Cancellation and refund policies are communicated at the time of booking confirmation. Specific terms may vary depending on the programme and duration of stay.',
    },
    {
      title: 'Website Content',
      content: 'All content on this website, including text, images, and design elements, is the property of Nowal NatureCare and may not be reproduced or used without prior written permission. Photography includes both property images and licensed stock imagery.',
    },
    {
      title: 'Limitation of Liability',
      content: 'Nowal NatureCare shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or participation in our programmes. Wellness results vary by individual, and we do not guarantee specific outcomes.',
    },
    {
      title: 'Governing Law',
      content: 'These terms and conditions are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts in Jaipur, Rajasthan.',
    },
  ];

  return (
    <>
      <PageHero
        image="https://images.pexels.com/photos/14024977/pexels-photo-14024977.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Legal"
        title="Terms & Conditions"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Terms & Conditions' }]}
      />

      <section className="py-20 md:py-32 bg-ivory">
        <div className="container-lux max-w-3xl">
          <Reveal>
            <p className="text-charcoal/50 text-sm mb-12">Last updated: October 2025</p>
          </Reveal>
          <div className="space-y-10">
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={i * 0.05}>
                <h2 className="font-serif text-2xl text-forest-700 mb-3">{section.title}</h2>
                <p className="text-charcoal/60 leading-relaxed">{section.content}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
