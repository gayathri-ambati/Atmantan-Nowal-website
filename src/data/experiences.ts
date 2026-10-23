export interface Experience {
  slug: string;
  title: string;
  image: string;
  shortDesc: string;
  longDesc: string;
  duration: string;
}

export const experiences: Experience[] = [
  {
    slug: 'sound-healing',
    title: 'Sound Healing',
    image: 'https://images.pexels.com/photos/6914825/pexels-photo-6914825.jpeg?auto=compress&cs=tinysrgb&w=1600',
    shortDesc: 'A meditative experience using Tibetan singing bowls to create vibrations that support deep relaxation.',
    longDesc: 'Sound healing sessions at Nowal NatureCare use traditional Tibetan singing bowls to create resonant vibrations that envelop the body in sound. Guests lie comfortably while the practitioner guides the session, allowing the tones to support a state of deep rest and inner stillness.',
    duration: '45 minutes',
  },
  {
    slug: 'nature-walks',
    title: 'Guided Nature Walks',
    image: 'https://images.pexels.com/photos/34056729/pexels-photo-34056729.jpeg?auto=compress&cs=tinysrgb&w=1600',
    shortDesc: 'Morning walks through the resort gardens and surrounding natural landscapes with a knowledgeable guide.',
    longDesc: 'Begin your day with a guided walk through the resort\u2019s gardens and nearby natural trails. Our guides share insights about local flora, the principles of natural living, and the restorative power of spending time in green surroundings.',
    duration: '60 minutes',
  },
  {
    slug: 'yoga-sessions',
    title: 'Group Yoga Sessions',
    image: 'https://images.pexels.com/photos/35960307/pexels-photo-35960307.jpeg?auto=compress&cs=tinysrgb&w=1600',
    shortDesc: 'Daily group yoga sessions suitable for all levels, held in our open-air practice spaces.',
    longDesc: 'Join our daily group yoga sessions in serene open-air settings. Our experienced instructors guide practitioners of all levels through asana sequences, breathing practices, and relaxation techniques, with modifications offered to suit individual needs.',
    duration: '60\u201390 minutes',
  },
  {
    slug: 'meditation-circle',
    title: 'Evening Meditation Circle',
    image: 'https://images.pexels.com/photos/31185782/pexels-photo-31185782.jpeg?auto=compress&cs=tinysrgb&w=1600',
    shortDesc: 'A gentle evening gathering for guided meditation and shared stillness as the day closes.',
    longDesc: 'As the day gently closes, guests are invited to join our evening meditation circle. These sessions offer a space for guided mindfulness practice, breath awareness, and quiet reflection — a peaceful way to transition from the activity of the day into the rest of the evening.',
    duration: '30 minutes',
  },
  {
    slug: 'cooking-workshop',
    title: 'Wellness Cooking Workshop',
    image: 'https://images.pexels.com/photos/34227755/pexels-photo-34227755.jpeg?auto=compress&cs=tinysrgb&w=1600',
    shortDesc: 'Hands-on sessions demonstrating simple, nourishing plant-based recipes you can recreate at home.',
    longDesc: 'Our wellness cooking workshops introduce guests to the principles of mindful, plant-based cooking. Learn to prepare simple yet nourishing dishes using seasonal ingredients, and discover how the practices of natural wellness can be carried into everyday kitchen life.',
    duration: '90 minutes',
  },
  {
    slug: 'hydrotherapy-session',
    title: 'Hydrotherapy Experience',
    image: 'https://images.pexels.com/photos/3967818/pexels-photo-3967818.jpeg?auto=compress&cs=tinysrgb&w=1600',
    shortDesc: 'A curated hydrotherapy session using therapeutic water applications to stimulate circulation and relaxation.',
    longDesc: 'Experience the restorative effects of water through a guided hydrotherapy session. Our practitioners use warm and cool water applications, steam, and immersion techniques to support circulation, ease tension, and promote a deep sense of physical renewal.',
    duration: '45 minutes',
  },
];

export const getExperience = (slug: string) => experiences.find((e) => e.slug === slug);
