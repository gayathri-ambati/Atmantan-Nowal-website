export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  width: 'portrait' | 'landscape' | 'panorama';
}

export const galleryImages: GalleryImage[] = [
  { src: 'https://images.pexels.com/photos/14580738/pexels-photo-14580738.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Serene tropical oasis with lush greenery and pond', category: 'Nature', width: 'landscape' },
  { src: 'https://images.pexels.com/photos/14025910/pexels-photo-14025910.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Cozy bedroom with wooden decor and canopy bed', category: 'Accommodation', width: 'portrait' },
  { src: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Yoga practice at sunrise', category: 'Yoga', width: 'landscape' },
  { src: 'https://images.pexels.com/photos/37719647/pexels-photo-37719647.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Soothing massage therapy session', category: 'Therapies', width: 'landscape' },
  { src: 'https://images.pexels.com/photos/9650567/pexels-photo-9650567.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Lush resort garden from above', category: 'Nature', width: 'landscape' },
  { src: 'https://images.pexels.com/photos/13865894/pexels-photo-13865894.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Woman meditating in lush garden', category: 'Meditation', width: 'portrait' },
  { src: 'https://images.pexels.com/photos/34227785/pexels-photo-34227785.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Healthy plant-based dining spread', category: 'Dining', width: 'landscape' },
  { src: 'https://images.pexels.com/photos/14025911/pexels-photo-14025911.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Spacious wooden bedroom with canopy bed', category: 'Accommodation', width: 'portrait' },
  { src: 'https://images.pexels.com/photos/5276195/pexels-photo-5276195.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Stone gazebo in tropical garden', category: 'Nature', width: 'landscape' },
  { src: 'https://images.pexels.com/photos/8312859/pexels-photo-8312859.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Acupuncture treatment in progress', category: 'Therapies', width: 'landscape' },
  { src: 'https://images.pexels.com/photos/38494113/pexels-photo-38494113.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Traditional Ayurvedic Kati Basti therapy', category: 'Therapies', width: 'landscape' },
  { src: 'https://images.pexels.com/photos/14024977/pexels-photo-14024977.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Tropical garden with villas and palm trees', category: 'Nature', width: 'landscape' },
  { src: 'https://images.pexels.com/photos/5876514/pexels-photo-5876514.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Healthy dining with chickpeas and pumpkin', category: 'Dining', width: 'landscape' },
  { src: 'https://images.pexels.com/photos/13849088/pexels-photo-13849088.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Yoga warrior pose above cloudscape', category: 'Yoga', width: 'landscape' },
  { src: 'https://images.pexels.com/photos/14025024/pexels-photo-14025024.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Elegant hotel room with king bed and ceiling fan', category: 'Accommodation', width: 'landscape' },
  { src: 'https://images.pexels.com/photos/6914825/pexels-photo-6914825.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Sound healing with Tibetan singing bowl', category: 'Experiences', width: 'portrait' },
  { src: 'https://images.pexels.com/photos/7222571/pexels-photo-7222571.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Relaxation in indoor swimming pool', category: 'Facilities', width: 'landscape' },
  { src: 'https://images.pexels.com/photos/32629853/pexels-photo-32629853.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Yoga practice by serene water', category: 'Yoga', width: 'landscape' },
  { src: 'https://images.pexels.com/photos/34056729/pexels-photo-34056729.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Stone path through lush tropical garden', category: 'Nature', width: 'landscape' },
  { src: 'https://images.pexels.com/photos/12932911/pexels-photo-12932911.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Mud therapy treatment at spa', category: 'Therapies', width: 'landscape' },
  { src: 'https://images.pexels.com/photos/31185782/pexels-photo-31185782.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Group meditation session outdoors', category: 'Meditation', width: 'portrait' },
  { src: 'https://images.pexels.com/photos/14024789/pexels-photo-14024789.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Garden pathway leading to tropical resort', category: 'Nature', width: 'landscape' },
];

export const galleryCategories = ['All', 'Nature', 'Accommodation', 'Yoga', 'Meditation', 'Therapies', 'Dining', 'Facilities', 'Experiences'];
