export interface Programme {
  slug: string;
  title: string;
  eyebrow: string;
  number: string;
  image: string;
  shortDesc: string;
  longDesc: string;
  philosophy: string;
  offerings: { title: string; description: string }[];
  experiences: string[];
  duration: string;
}

export const programmes: Programme[] = [
  {
    slug: 'naturopathy',
    title: 'Naturopathy',
    eyebrow: 'The Five Elements',
    number: '01',
    image: 'https://images.pexels.com/photos/5480263/pexels-photo-5480263.jpeg?auto=compress&cs=tinysrgb&w=1600',
    shortDesc: 'Natural healing through the elemental forces of earth, water, fire, air, and ether.',
    longDesc: 'Naturopathy is a holistic system of healing that draws upon the five great elements — earth, water, fire, air, and ether — to support the body\u2019s inherent self-healing capacity. At Nowal NatureCare, naturopathic practice integrates dietary regulation, therapeutic fasting, hydrotherapy, mud therapy, and lifestyle counselling to restore balance and vitality.',
    philosophy: 'The foundation of naturopathic care lies in the understanding that the human body possesses an innate ability to heal itself. When the elements within are brought into harmony through natural means, the body redirects its energy toward restoration and renewal.',
    offerings: [
      { title: 'Detoxification Programmes', description: 'Structured cleansing protocols using diet, hydrotherapy, and fasting guidance to support the body\u2019s natural elimination processes.' },
      { title: 'Hydrotherapy Treatments', description: 'Therapeutic applications of water in varying temperatures and forms to stimulate circulation and support healing.' },
      { title: 'Mud Therapy', description: 'Application of mineral-rich earth preparations to draw out impurities and support skin and joint health.' },
      { title: 'Diet & Lifestyle Counselling', description: 'Personalised guidance on eating patterns, daily routines, and natural living practices tailored to individual constitution.' },
    ],
    experiences: [
      'Morning hydrotherapy sessions',
      'Guided detoxification protocols',
      'Personalised dietary planning',
      'Yoga and breathing practices',
      'Nature walks in the resort gardens',
      'Wellness counselling sessions',
    ],
    duration: '7 to 21 days',
  },
  {
    slug: 'ayurveda',
    title: 'Ayurveda',
    eyebrow: 'Ancient Wisdom',
    number: '02',
    image: 'https://images.pexels.com/photos/38494113/pexels-photo-38494113.jpeg?auto=compress&cs=tinysrgb&w=1600',
    shortDesc: 'Time-honoured Indian system of medicine addressing balance through dosha-specific care.',
    longDesc: 'Ayurveda, the ancient science of life, offers a comprehensive approach to health and wellbeing that has been practised in India for thousands of years. At Nowal NatureCare, Ayurvedic treatments are tailored to individual constitutions — Vata, Pitta, and Kapha — with therapies designed to restore equilibrium, support digestion, and promote longevity.',
    philosophy: 'Ayurveda teaches that health is a state of balance between body, mind, and consciousness. When the three doshas are in harmony, digestion is strong, tissues are nourished, and the individual experiences a sense of vitality and clarity.',
    offerings: [
      { title: 'Abhyanga (Oil Massage)', description: 'Warm herbal oil massage tailored to individual dosha to nourish tissues, improve circulation, and calm the nervous system.' },
      { title: 'Shirodhara', description: 'Continuous flow of warm herbal oil on the forehead to deeply relax the mind and soothe the nervous system.' },
      { title: 'Kati Basti', description: 'Localized oil pooling therapy for the back, supporting spinal health and muscular tension release.' },
      { title: 'Ayurvedic Consultation', description: 'Constitutional assessment to determine dosha balance and recommend personalised diet, lifestyle, and therapeutic protocols.' },
    ],
    experiences: [
      'Dosha-specific consultations',
      'Traditional Ayurvedic therapies',
      'Herbal formulations and guidance',
      'Therapeutic yoga sessions',
      'Ayurvedic dietary recommendations',
      'Meditation and breathing practices',
    ],
    duration: '7 to 28 days',
  },
  {
    slug: 'yoga-meditation',
    title: 'Yoga & Meditation',
    eyebrow: 'Union & Stillness',
    number: '03',
    image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1600',
    shortDesc: 'Practices for the union of body, breath, and mind in a serene natural setting.',
    longDesc: 'Yoga and meditation form the heart of the wellness journey at Nowal NatureCare. Set against the tranquil backdrop of our gardens and natural surroundings, our programmes guide guests through asana practice, pranayama (breathing techniques), and meditation to cultivate physical vitality, mental clarity, and inner stillness.',
    philosophy: 'Yoga is not merely physical exercise but a path toward integration — of body with breath, of mind with awareness, of the individual with the natural world. Meditation deepens this integration by revealing the stillness that dwells beneath the surface of daily life.',
    offerings: [
      { title: 'Hatha Yoga Sessions', description: 'Foundational postures and alignment-focused practice suitable for all levels, emphasising steadiness and ease.' },
      { title: 'Pranayama (Breathing Practices)', description: 'Guided breathing techniques to regulate energy, calm the mind, and support respiratory and nervous system health.' },
      { title: 'Guided Meditation', description: 'Sessions in mindfulness, breath awareness, and body scan practices to cultivate presence and inner calm.' },
      { title: 'Restorative Yoga', description: 'Gentle, supported postures using props to allow deep relaxation and nervous system restoration.' },
    ],
    experiences: [
      'Sunrise yoga sessions',
      'Evening meditation by the gardens',
      'Pranayama workshops',
      'Yoga Nidra (guided relaxation)',
      'Group and individual sessions',
      'Outdoor practice in natural settings',
    ],
    duration: '3 to 14 days',
  },
  {
    slug: 'diet-nutrition',
    title: 'Diet & Nutrition',
    eyebrow: 'Food as Care',
    number: '04',
    image: 'https://images.pexels.com/photos/5876514/pexels-photo-5876514.jpeg?auto=compress&cs=tinysrgb&w=1600',
    shortDesc: 'Wholesome, plant-forward nutrition designed to support healing and vitality.',
    longDesc: 'At Nowal NatureCare, nutrition is understood as a cornerstone of wellness. Our dietary approach emphasizes freshly prepared, plant-based meals using seasonal ingredients, served in a mindful and restorative setting. Each guest\u2019s dietary plan is informed by their wellness programme and individual needs.',
    philosophy: 'What we eat shapes how we feel, think, and heal. Food, when prepared simply and eaten mindfully, becomes a form of nourishment that supports the body\u2019s natural rhythms and contributes to lasting wellbeing.',
    offerings: [
      { title: 'Personalised Nutrition Plans', description: 'Dietary guidance tailored to individual wellness goals, constitution, and programme requirements.' },
      { title: 'Plant-Based Dining', description: 'Seasonal, freshly prepared vegetarian and vegan meals using whole ingredients and traditional preparation methods.' },
      { title: 'Juice & Detox Support', description: 'Freshly pressed juices and cleansing protocols as part of structured detoxification programmes.' },
      { title: 'Nutritional Counselling', description: 'Education on mindful eating, food combinations, and sustainable dietary habits for long-term wellness.' },
    ],
    experiences: [
      'Seasonal plant-based meals',
      'Fresh fruit and vegetable juices',
      'Mindful dining sessions',
      'Nutritional workshops',
      'Cooking demonstrations',
      'Personalised dietary guidance',
    ],
    duration: 'Integrated into all programmes',
  },
  {
    slug: 'acupuncture',
    title: 'Acupuncture',
    eyebrow: 'Energy & Balance',
    number: '05',
    image: 'https://images.pexels.com/photos/8312859/pexels-photo-8312859.jpeg?auto=compress&cs=tinysrgb&w=1600',
    shortDesc: 'Precise therapeutic practice to support the body\u2019s energy pathways and natural balance.',
    longDesc: 'Acupuncture is a therapeutic practice that involves the precise application of fine needles at specific points on the body to support natural energy flow and promote balance. At Nowal NatureCare, acupuncture is offered as part of an integrated wellness approach, complementing naturopathic and Ayurvedic therapies.',
    philosophy: 'According to traditional understanding, the body\u2019s vital energy flows along defined pathways. When this flow is disrupted, discomfort and imbalance may arise. Acupuncture seeks to restore harmonious flow, supporting the body\u2019s natural healing processes.',
    offerings: [
      { title: 'Acupuncture Sessions', description: 'Individualised treatment sessions conducted by qualified practitioners in a calm, supportive environment.' },
      { title: 'Initial Assessment', description: 'Comprehensive evaluation to understand individual needs and develop a personalised treatment approach.' },
      { title: 'Integrated Therapy Plans', description: 'Acupuncture combined with naturopathy, diet, and yoga for a comprehensive wellness experience.' },
    ],
    experiences: [
      'Individualised acupuncture sessions',
      'Complementary wellness therapies',
      'Relaxation in therapeutic settings',
      'Post-session rest and integration',
      'Ongoing progress assessment',
    ],
    duration: 'Sessions integrated into programmes',
  },
  {
    slug: 'physiotherapy',
    title: 'Physiotherapy',
    eyebrow: 'Movement & Recovery',
    number: '06',
    image: 'https://images.pexels.com/photos/20860622/pexels-photo-20860622.jpeg?auto=compress&cs=tinysrgb&w=1600',
    shortDesc: 'Restoring movement, strength, and function through guided therapeutic exercise.',
    longDesc: 'Physiotherapy at Nowal NatureCare focuses on restoring mobility, strength, and functional movement through evidence-based therapeutic exercise and manual techniques. Our physiotherapy services support guests recovering from injury, managing chronic conditions, or seeking to improve physical function as part of their wellness journey.',
    philosophy: 'Movement is fundamental to wellness. When the body moves freely and without restriction, energy circulates, tissues remain healthy, and the individual experiences a greater sense of capability and ease.',
    offerings: [
      { title: 'Physical Assessment', description: 'Detailed evaluation of movement, strength, and function to identify areas needing therapeutic attention.' },
      { title: 'Therapeutic Exercise', description: 'Guided exercise programmes designed to improve strength, flexibility, and functional movement patterns.' },
      { title: 'Manual Therapy', description: 'Hands-on techniques to address joint mobility, soft tissue tension, and movement restrictions.' },
      { title: 'Postural Correction', description: 'Assessment and guidance for improving posture and body mechanics in daily activities.' },
    ],
    experiences: [
      'One-on-one physiotherapy sessions',
      'Personalised exercise programmes',
      'Postural and movement assessment',
      'Integrated wellness planning',
      'Ongoing progress monitoring',
      'Education on body mechanics',
    ],
    duration: 'Sessions integrated into programmes',
  },
];

export const getProgramme = (slug: string) => programmes.find((p) => p.slug === slug);
