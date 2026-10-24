// ─────────────────────────────────────────────────────────────
// All homepage content lives here. Swap text, images and videos
// with your own assets (videos in /public/videos, images in /public/images).
// ─────────────────────────────────────────────────────────────
const px = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const brand = {
  name: 'Nowal NatureCare',
  heroVideo: '/videos/hero.mp4',
  heroPoster: px(14580738, 1920),
  whatsapp: 'https://wa.me/910000000000', // replace with your number
};

/* 2 - Healing cycle */
export const cycleSteps = [
  {
    title: 'Join Nowal',
    text: 'Enquire and register in a few minutes.',
    detail:
      'Start with a short enquiry: your name, your health concern and when you would like to visit. Our coordinator calls you back within a day and answers every question before you commit to anything.',
    points: ['Call-back within a day', 'No payment to enquire', 'Choose your preferred dates'],
    image: px(8834648, 800),
  },
  {
    title: 'Health Assessment',
    text: 'Share your history and wellness goals.',
    detail:
      'Complete a guided questionnaire on sleep, digestion, stress, activity and medical history. This becomes the baseline we measure your recovery against.',
    points: ['Guided online questionnaire', 'Upload any past reports', 'Takes about 15 minutes'],
    image: px(577269, 800),
  },
  {
    title: 'Talk to a Practitioner',
    text: 'A one-to-one consultation shapes your plan.',
    detail:
      'A naturopathy or Ayurveda doctor reviews your assessment, explains what they see, and designs a programme matched to your body, your goals and the days you have.',
    points: ['One-to-one with a doctor', 'Plan matched to your goals', 'Clear answers before you arrive'],
    image: px(1051838, 800),
  },
  {
    title: 'Begin Healing at Nowal',
    text: 'Therapies, yoga and nourishing food begin.',
    detail:
      'You arrive, settle in, and your plan begins. Your care team adjusts it daily as your body responds.',
    points: ['Daily therapies and yoga', 'Plant-based mindful meals', 'Plan adjusted as you respond'],
    image: px(34227785, 800),
  },
  {
    title: 'Measure Your Progress',
    text: 'Review changes with your care team.',
    detail:
      'Before you leave we repeat the key checks and compare them with your baseline, so you can see what changed.',
    points: ['Repeat checks against baseline', 'See changes in sleep and stress', 'Written summary to take home'],
    image: px(14580738, 800),
  },
  {
    title: 'Continue With Follow-up',
    text: 'Take your routine home with ongoing support.',
    detail:
      'You go home with a diet, yoga and lifestyle plan, plus scheduled check-ins with your practitioner so the progress keeps going.',
    points: ['Home diet and yoga plan', 'Scheduled practitioner check-ins', 'Support whenever you need it'],
    image: px(8834648, 800),
  },
];

/* 3 - Stories */
export const videoStories = [
  { name: 'Guest story one', caption: 'Why I came back to Nowal', video: '/videos/story-1.mp4', poster: px(1051838, 900) },
  { name: 'Guest story two', caption: 'Ten days that reset my routine', video: '/videos/story-2.mp4', poster: px(577269, 900) },
  { name: 'Guest story three', caption: 'Recovering with naturopathy', video: '/videos/story-3.mp4', poster: px(8834648, 900) },
];

export const textStories = [
  { quote: 'I arrived sceptical and left sleeping better than I have in years. The team never rushed me.', name: 'Guest Name', role: 'Detox Programme' },
  { quote: 'Every therapy, meal and yoga session felt chosen for me, not copied from a menu.', name: 'Guest Name', role: 'Stress Management' },
  { quote: 'My doctor noticed the difference in my reports within weeks of returning home.', name: 'Guest Name', role: 'Lifestyle Reset' },
  { quote: 'The setting alone is healing. The care on top of it made the stay unforgettable.', name: 'Guest Name', role: 'Rejuvenation' },
];

/* 4 - Healing targets (disciplines) */
export const targets = [
  { slug: 'naturopathy', title: 'Naturopathy', icon: 'droplets', image: px(8834648, 700), text: 'Mud, water, sun and air: the elements drawing out the body’s own power to heal.' },
  { slug: 'ayurveda', title: 'Ayurveda', icon: 'leaf', image: px(1051838, 700), text: 'Herbal and oil therapies matched to your constitution.' },
  { slug: 'yoga-meditation', title: 'Yoga & Meditation', icon: 'flower', image: px(577269, 700), text: 'Daily practice that brings breath, body and mind back into balance.' },
  { slug: 'physiotherapy', title: 'Physiotherapy', icon: 'activity', image: px(34227785, 700), text: 'Guided movement and rehabilitation to restore strength and free motion.' },
  { slug: 'holistic-therapies', title: 'Holistic Therapies', icon: 'heart', image: px(14580738, 700), text: 'Acupressure and cupping to restore the flow of vital energy.' },
];

/* 5 - Packages */
export const packages = [
  { slug: 'detox', name: 'Detox & Cleanse', tagline: 'Clear the body, calm the system.', duration: '7–14 days', image: px(14580738), text: 'Fasting protocols, hydrotherapy and plant-based meals designed to release accumulated toxins.' },
  { slug: 'stress', name: 'Stress Relief', tagline: 'Slow down, sleep deeper.', duration: '5–10 days', image: px(1051838), text: 'Guided meditation, abhyanga and breathing practice to settle a busy mind.' },
  { slug: 'nerve-advantage', name: 'Nerve Advantage', tagline: 'Measure how settled your mind and nerves are.', duration: '7 days', image: px(577269), text: 'Combines heart-rate variability, sleep and stress markers with your daily habits to show how your nervous system is holding up.' },
  { slug: 'weight', name: 'Weight & Metabolism', tagline: 'Sustainable change, not crash plans.', duration: '14–21 days', image: px(34227785), text: 'Personalised nutrition, movement and therapies to rebuild metabolic health.' },
  { slug: 'rejuvenation', name: 'Rejuvenation', tagline: 'Restore energy and resilience.', duration: '7–14 days', image: px(8834648), text: 'A restorative blend of Ayurvedic therapies, yoga and mindful dining.' },
];

/* 6 - Offer */
export const offer = {
  badge: 'Seasonal offer',
  title: 'Winter Wellness Retreat',
  highlight: '10% off',
  text: 'Book your stay now and get 10% off. Valid on stays of 7 nights or more.',
  image: px(8834648, 1000),
  terms: 'T&C apply.',
};

/* 7 - Methods */
export const methods = [
  { title: 'Nature & Healing', text: 'Seventy acres of orchard, lake and quiet, where recovery begins by simply being outdoors.', image: px(14580738, 900), href: '/about' },
  { title: 'Personalised Care', text: 'A practitioner who follows your case from first consultation to your last day.', image: px(577269, 900), href: '/programmes' },
  { title: 'Ayurveda & Therapies', text: 'Oil, herb and hands-on therapies that restore you from the inside out.', image: px(1051838, 900), href: '/therapies' },
  { title: 'Nourishment & Lifestyle', text: 'Freshly prepared plant-based meals and daily rhythms that you can carry home.', image: px(34227785, 900), href: '/plan-your-stay' },
];