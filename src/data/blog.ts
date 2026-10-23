export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string[];
}

export const articles: BlogArticle[] = [
  {
    slug: 'five-elements-naturopathy',
    title: 'The Five Elements: Foundations of Naturopathic Healing',
    excerpt: 'Understanding how earth, water, fire, air, and ether form the basis of natural wellness practices.',
    date: 'March 15, 2025',
    readTime: '5 min read',
    category: 'Naturopathy',
    image: 'https://images.pexels.com/photos/5480263/pexels-photo-5480263.jpeg?auto=compress&cs=tinysrgb&w=1600',
    content: [
      'Naturopathy draws upon one of the oldest understandings of the natural world — that all of existence is composed of five great elements. These elements, known in the Indian tradition as the Panchamahabhutas, are earth (prithvi), water (jala), fire (agni), air (vayu), and ether or space (akasha).',
      'Each element contributes specific qualities to the body and the environment. Earth provides structure and stability. Water governs fluidity and circulation. Fire drives transformation and digestion. Air regulates movement and breath. Ether offers space — the room in which all processes occur.',
      'In naturopathic practice, the understanding is that when these elements are in balance within the body, health and vitality follow naturally. When they become disturbed — through poor diet, stress, lack of movement, or environmental factors — the body\u2019s natural rhythms are disrupted, and imbalance may manifest.',
      'Naturopathic therapies work with these elements directly. Mud therapy uses the earth. Hydrotherapy uses water. Sun exposure and warmth work with fire. Breathing practices engage air. And the spaciousness of a calm, unhurried environment honours ether.',
      'The goal is not to forcefully intervene but to create the conditions in which the body\u2019s own healing intelligence can restore equilibrium. This is the essence of the naturopathic approach at Nowal NatureCare — gentle, natural, and rooted in an ancient understanding of the relationship between the individual and the elements.',
    ],
  },
  {
    slug: 'morning-yoga-rituals',
    title: 'Beginning the Day: Simple Morning Yoga Rituals',
    excerpt: 'A gentle sequence of postures and breathing practices to start your day with intention and ease.',
    date: 'February 28, 2025',
    readTime: '4 min read',
    category: 'Yoga',
    image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1600',
    content: [
      'The way we begin our morning often shapes the quality of the entire day. In the yogic tradition, the early hours — known as Brahma Muhurta — are considered the most conducive time for practice. The world is quiet, the air is fresh, and the mind is naturally more receptive.',
      'A morning yoga practice need not be long or strenuous. Even fifteen to twenty minutes of gentle movement and conscious breathing can create a sense of alignment that carries through the hours ahead.',
      'Begin with a few moments of stillness. Sit comfortably, close your eyes, and simply notice your breath. Allow the body to settle. Then, with an awareness of the spine being long and the shoulders being relaxed, begin gentle warm-up movements — neck rolls, shoulder rotations, and gentle spinal twists.',
      'Move into a few foundational postures. Tadasana (mountain pose) to ground and align. A gentle sequence of Surya Namaskar (sun salutations) to awaken the body with breath-led movement. Trikonasana (triangle pose) to open the sides of the body. Bhujangasana (cobra pose) to gently energise the spine.',
      'Conclude with pranayama. A few rounds of Anulom Vilom (alternate nostril breathing) can bring a sense of balance to the nervous system. Finish with a short meditation, sitting quietly and resting in the stillness you have cultivated.',
    ],
  },
  {
    slug: 'mindful-eating',
    title: 'Mindful Eating: Nourishment as a Wellness Practice',
    excerpt: 'How the way we eat matters as much as what we eat, and simple ways to bring awareness to meals.',
    date: 'February 10, 2025',
    readTime: '4 min read',
    category: 'Nutrition',
    image: 'https://images.pexels.com/photos/34227785/pexels-photo-34227785.jpeg?auto=compress&cs=tinysrgb&w=1600',
    content: [
      'In many traditional wellness systems, food is considered one of the most powerful influences on health. But it is not only the quality of the food that matters — the manner in which we eat also shapes how the body receives and processes nourishment.',
      'Mindful eating is the practice of bringing full attention to the experience of eating. Rather than consuming food while distracted by screens, conversations, or racing thoughts, we slow down and engage the senses.',
      'Begin by noticing the appearance of your meal. The colours, the arrangement, the steam rising from a warm dish. Take a moment to appreciate the journey the ingredients have taken to reach your plate. This simple act of recognition can shift the nervous system into a more receptive state.',
      'Eat slowly. Chew thoroughly. Notice the textures and flavours as they unfold. Put the utensils down between bites. This not only supports digestion — which begins in the mouth with the action of chewing and saliva — but also allows the body\u2019s natural satiety signals to register.',
      'At Nowal NatureCare, meals are served in a calm, unhurried setting. Guests are encouraged to eat in silence or in gentle conversation, to savour each bite, and to leave the table feeling nourished rather than overfull. This approach transforms eating from a routine activity into a meaningful part of the wellness journey.',
    ],
  },
  {
    slug: 'ayurveda-doshas',
    title: 'Understanding the Three Doshas in Ayurveda',
    excerpt: 'An introduction to Vata, Pitta, and Kapha — the fundamental energies that shape individual constitution.',
    date: 'January 22, 2025',
    readTime: '6 min read',
    category: 'Ayurveda',
    image: 'https://images.pexels.com/photos/105028/pexels-photo-105028.jpeg?auto=compress&cs=tinysrgb&w=1600',
    content: [
      'Central to Ayurvedic understanding is the concept of the three doshas — Vata, Pitta, and Kapha. These are the fundamental energies that govern physiological and psychological functions, and every individual has a unique combination of all three.',
      'Vata is associated with the elements of air and ether. It governs movement — breath, circulation, nerve impulses, and the elimination of waste. When Vata is in balance, there is creativity, flexibility, and a sense of lightness. When disturbed, it may manifest as anxiety, dryness, or restlessness.',
      'Pitta is associated with fire and water. It governs transformation — digestion, metabolism, and the processing of information and emotion. Balanced Pitta brings clarity, focus, and warmth. When excessive, it may lead to irritability, inflammation, or a sense of intensity that feels difficult to manage.',
      'Kapha is associated with earth and water. It provides structure, stability, and lubrication. Balanced Kapha manifests as calm, strength, and devotion. When out of balance, it may lead to sluggishness, heaviness, or attachment.',
      'Ayurvedic consultation assesses an individual\u2019s prakriti (natural constitution) and vikriti (current state of imbalance). Treatment and dietary recommendations are then tailored to restore balance to the affected doshas. This personalised approach is what makes Ayurveda a deeply individualised system of care.',
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
