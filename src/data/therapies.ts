export interface Therapy {
  slug: string;
  title: string;
  category: string;
  image: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  howItWorks: string;
}

export const therapies: Therapy[] = [
  {
    slug: 'mud-therapy',
    title: 'Mud Therapy',
    category: 'Naturopathy',
    image: 'https://images.pexels.com/photos/12932911/pexels-photo-12932911.jpeg?auto=compress&cs=tinysrgb&w=1600',
    shortDesc: 'Earth-based treatments using mineral-rich mud to support skin health, draw out impurities, and soothe joint discomfort.',
    longDesc: 'Mud therapy involves the application of specially prepared, mineral-rich earth to the body. This naturopathic treatment is valued for its ability to draw out impurities, support skin health, and provide soothing relief for joints and muscles. The cool, dense quality of therapeutic mud creates a gentle compressive effect that can ease inflammation and promote a sense of grounded calm.',
    howItWorks: 'Fine, mineral-rich mud is carefully selected and prepared for therapeutic use. It is applied to specific areas of the body or used as a full-body pack, left in place for a prescribed duration, then removed. The treatment is typically followed by a cleansing rinse and a period of rest.',
    benefits: [
      'Supports skin health and natural glow',
      'Helps draw out impurities',
      'May soothe joint and muscle discomfort',
      'Promotes a sense of grounding and calm',
    ],
  },
  {
    slug: 'hydrotherapy',
    title: 'Hydrotherapy',
    category: 'Naturopathy',
    image: 'https://images.pexels.com/photos/7222571/pexels-photo-7222571.jpeg?auto=compress&cs=tinysrgb&w=1600',
    shortDesc: 'Therapeutic use of water in varying temperatures and forms to stimulate circulation and support the body\u2019s natural processes.',
    longDesc: 'Hydrotherapy is a core naturopathic treatment that uses water in various forms — warm, cool, steam, and ice — and delivery methods to stimulate circulation, support detoxification, and promote relaxation. At Nowal NatureCare, hydrotherapy is integrated into many wellness programmes as a gentle yet effective way to support the body\u2019s natural healing responses.',
    howItWorks: 'Water applications range from warm and cold compresses to immersion baths, steam treatments, and contrast therapies. The practitioner selects the appropriate temperature, duration, and method based on the individual\u2019s condition and wellness goals.',
    benefits: [
      'Stimulates blood circulation',
      'Supports the body\u2019s natural detoxification',
      'Promotes deep relaxation',
      'Can help ease muscular tension',
    ],
  },
  {
    slug: 'massage-therapy',
    title: 'Massage Therapy',
    category: 'Therapeutic Touch',
    image: 'https://images.pexels.com/photos/37719647/pexels-photo-37719647.jpeg?auto=compress&cs=tinysrgb&w=1600',
    shortDesc: 'Therapeutic massage techniques to release tension, improve circulation, and promote deep relaxation.',
    longDesc: 'Massage therapy at Nowal NatureCare encompasses a range of therapeutic techniques — from Ayurvedic abhyanga with warm herbal oils to deep tissue and relaxation massage. Each session is tailored to the individual\u2019s needs, whether the goal is to release muscular tension, support circulation, or simply experience deep restorative rest.',
    howItWorks: 'A consultation precedes each session to determine the most appropriate technique and focus areas. The therapist then applies the chosen method — oil-based, dry, or pressure-specific — with attention to the individual\u2019s comfort and response throughout the treatment.',
    benefits: [
      'Releases muscular tension',
      'Improves blood and lymph circulation',
      'Promotes deep relaxation',
      'Supports a sense of physical and mental ease',
    ],
  },
  {
    slug: 'physiotherapy-treatment',
    title: 'Physiotherapy',
    category: 'Movement & Recovery',
    image: 'https://images.pexels.com/photos/20860616/pexels-photo-20860616.jpeg?auto=compress&cs=tinysrgb&w=1600',
    shortDesc: 'Guided therapeutic exercise and manual techniques to restore mobility, strength, and functional movement.',
    longDesc: 'Physiotherapy treatments at Nowal NatureCare combine hands-on manual techniques with guided therapeutic exercise to address movement restrictions, build strength, and support recovery. Our practitioners work with each guest to develop a personalised plan that aligns with their wellness goals and physical condition.',
    howItWorks: 'Following a comprehensive physical assessment, the physiotherapist designs a programme that may include manual therapy, guided exercises, stretching protocols, and education on body mechanics. Sessions are conducted one-on-one with ongoing progress evaluation.',
    benefits: [
      'Improves mobility and flexibility',
      'Builds strength and stability',
      'Supports recovery from injury',
      'Enhances body awareness and posture',
    ],
  },
  {
    slug: 'acupuncture-therapy',
    title: 'Acupuncture',
    category: 'Energy & Balance',
    image: 'https://images.pexels.com/photos/8313427/pexels-photo-8313427.jpeg?auto=compress&cs=tinysrgb&w=1600',
    shortDesc: 'Fine-needle therapy to support the body\u2019s energy pathways and natural healing responses.',
    longDesc: 'Acupuncture is offered as a complementary therapy within Nowal NatureCare\u2019s integrated wellness approach. Using extremely fine, sterile needles placed at specific points, the practitioner works to support the body\u2019s natural energy flow and promote a state of balance and ease.',
    howItWorks: 'An initial assessment determines the treatment approach. The practitioner then places very fine needles at carefully selected points. The needles remain in place for a prescribed period while the guest rests quietly. Sessions are conducted in a calm, supportive environment.',
    benefits: [
      'Supports the body\u2019s natural balance',
      'Promotes a sense of calm and relaxation',
      'Complements other wellness therapies',
      'Integrated into holistic treatment plans',
    ],
  },
  {
    slug: 'ayurvedic-therapies',
    title: 'Ayurvedic Therapies',
    category: 'Ayurveda',
    image: 'https://images.pexels.com/photos/38407790/pexels-photo-38407790.jpeg?auto=compress&cs=tinysrgb&w=1600',
    shortDesc: 'Traditional Ayurvedic treatments including abhyanga, shirodhara, and kati basti, tailored to individual constitution.',
    longDesc: 'Our Ayurvedic therapy offerings include traditional treatments such as abhyanga (warm herbal oil massage), shirodhara (continuous oil flow on the forehead), and kati basti (localized oil pooling for the back). Each treatment is selected and adapted based on the guest\u2019s dosha constitution and wellness objectives.',
    howItWorks: 'An Ayurvedic consultation determines the individual\u2019s dosha balance and guides the selection of therapies, oils, and herbs. Treatments are then administered by trained practitioners, with the sequence and duration adjusted to the individual\u2019s needs.',
    benefits: [
      'Nourishes skin and tissues',
      'Calms the nervous system',
      'Supports circulation and lymphatic flow',
      'Promotes a deep sense of restoration',
    ],
  },
];

export const getTherapy = (slug: string) => therapies.find((t) => t.slug === slug);
