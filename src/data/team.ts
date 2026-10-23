export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: 'Dr. Nowal',
    role: 'Founder & Chief Wellness Director',
    image: 'https://images.pexels.com/photos/7904406/pexels-photo-7904406.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'The visionary behind Nowal NatureCare, Dr. Nowal established the wellness centre with a commitment to making natural healing accessible in a serene, restorative environment. The philosophy draws upon years of study and practice in naturopathy and traditional wellness systems.',
  },
  {
    name: 'Dr. Meena Sharma',
    role: 'Senior Naturopathy Physician',
    image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'A dedicated naturopathic physician with extensive experience in hydrotherapy, mud therapy, and dietary healing. Dr. Sharma guides personalised wellness programmes with attention to each guest\u2019s individual constitution and health goals.',
  },
  {
    name: 'Dr. Arvind Iyer',
    role: 'Ayurvedic Consultant',
    image: 'https://images.pexels.com/photos/8460094/pexels-photo-8460094.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'An Ayurvedic practitioner specialising in dosha assessment, traditional Panchakarma therapies, and Ayurvedic dietary guidance. Dr. Iyer brings deep knowledge of classical Ayurvedic texts to his consultations and treatment plans.',
  },
  {
    name: 'Priya Nair',
    role: 'Lead Yoga & Meditation Teacher',
    image: 'https://images.pexels.com/photos/32428850/pexels-photo-32428850.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'A certified yoga and meditation instructor with years of experience guiding students of all levels. Priya\u2019s sessions blend traditional Hatha yoga with mindfulness practices, creating accessible and meaningful experiences for every guest.',
  },
];
