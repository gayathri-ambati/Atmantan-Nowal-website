import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: 'Information We Collect',
      content: 'When you submit an enquiry or contact us through this website, we collect the information you provide, including your name, email address, phone number, city or country, and any details you share about your wellness interests or requirements. We do not collect information through cookies beyond what is necessary for the basic functioning of the website.',
    },
    {
      title: 'How We Use Your Information',
      content: 'The information you provide is used solely to respond to your enquiries, help plan your stay, and communicate with you about our wellness programmes and services. We do not use your personal information for marketing purposes without your explicit consent.',
    },
    {
      title: 'Information Sharing',
      content: 'We do not sell, rent, or share your personal information with third parties. Your information is accessible only to the Nowal NatureCare team members involved in responding to your enquiry and planning your visit.',
    },
    {
      title: 'Data Security',
      content: 'We take reasonable measures to protect your personal information from unauthorised access, alteration, or disclosure. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
    },
    {
      title: 'Your Rights',
      content: 'You have the right to request access to the personal information we hold about you, request corrections, or request that we delete your information. To exercise any of these rights, please contact us using the details provided on our Contact page.',
    },
    {
      title: 'Changes to This Policy',
      content: 'We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.',
    },
  ];

  return (
    <>
      <PageHero
        image="https://images.pexels.com/photos/34056729/pexels-photo-34056729.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Legal"
        title="Privacy Policy"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Privacy Policy' }]}
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
