export const siteConfig = {
  name: 'Nowal NatureCare',
  tagline: 'A Sanctuary for Natural Wellness',
  phone: '+91 98290 12345',
  phoneRaw: '+919829012345',
  email: 'stay@nowalnaturecare.com',
  address: 'Nowal NatureCare, Jamdoli, Agra Road, Jaipur, Rajasthan 302031, India',
  addressShort: 'Jamdoli, Agra Road, Jaipur, Rajasthan 302031',
  whatsapp: '919829012345',
  social: {
    instagram: 'https://www.instagram.com/nowalnaturecare',
    facebook: 'https://www.facebook.com/nowalnaturecare',
    youtube: 'https://www.youtube.com/@nowalnaturecare',
  },
};

export const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About Nowal',
    path: '/about',
    mega: [
      { label: 'Our Story', path: '/our-story', desc: 'The journey and philosophy behind Nowal NatureCare' },
      { label: 'Founder & Wellness Team', path: '/team', desc: 'Meet the practitioners who guide your wellbeing' },
      { label: 'About Nowal', path: '/about', desc: 'Our approach to natural healing and mindful living' },
    ],
  },
  {
    label: 'Wellness Programmes',
    path: '/programmes',
    mega: [
      { label: 'Naturopathy', path: '/programmes/naturopathy', desc: 'Natural healing through the five elements' },
      { label: 'Ayurveda', path: '/programmes/ayurveda', desc: 'Ancient wisdom for balanced living' },
      { label: 'Yoga & Meditation', path: '/programmes/yoga-meditation', desc: 'Union of body, breath, and mind' },
      { label: 'Diet & Nutrition', path: '/programmes/diet-nutrition', desc: 'Food as medicine, nourishment as care' },
      { label: 'Acupuncture', path: '/programmes/acupuncture', desc: 'Restoring energy flow through precise practice' },
      { label: 'Physiotherapy', path: '/programmes/physiotherapy', desc: 'Restoring movement, strength, and function' },
    ],
  },
  {
    label: 'Therapies',
    path: '/therapies',
    mega: [
      { label: 'All Therapies', path: '/therapies', desc: 'Explore our complete range of healing therapies' },
      { label: 'Mud Therapy', path: '/therapies/mud-therapy', desc: 'Earth-based healing for body and skin' },
      { label: 'Hydrotherapy', path: '/therapies/hydrotherapy', desc: 'Water-based therapeutic treatments' },
      { label: 'Massage Therapy', path: '/therapies/massage-therapy', desc: 'Therapeutic touch for deep relaxation' },
    ],
  },
  {
    label: 'Accommodation',
    path: '/accommodation',
    mega: [
      { label: 'Rooms & Suites', path: '/accommodation', desc: 'A stay designed around wellbeing' },
      { label: 'Accommodation Guidelines', path: '/accommodation/guidelines', desc: 'What to expect during your stay' },
    ],
  },
  { label: 'Experiences', path: '/experiences' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const programmeAreas = [
  'Naturopathy',
  'Ayurveda',
  'Yoga & Meditation',
  'Diet & Nutrition',
  'Acupuncture',
  'Physiotherapy',
  'General Wellness',
];
