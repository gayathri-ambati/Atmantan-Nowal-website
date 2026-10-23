export interface Room {
  slug: string;
  name: string;
  image: string;
  desc: string;
  amenities: string[];
  occupancy: string;
  size: string;
}

export const rooms: Room[] = [
  {
    slug: 'garden-cottage',
    name: 'Garden Cottage',
    image: 'https://images.pexels.com/photos/14025910/pexels-photo-14025910.jpeg?auto=compress&cs=tinysrgb&w=1600',
    desc: 'A serene cottage surrounded by greenery, featuring natural wood interiors, a comfortable queen bed, and a private sit-out overlooking the gardens. Designed for quiet reflection and rest.',
    amenities: ['Queen bed', 'Private sit-out', 'Garden view', 'En-suite bathroom', 'Natural ventilation', 'Tea service'],
    occupancy: '1\u20132 guests',
    size: '28 sqm',
  },
  {
    slug: 'wellness-suite',
    name: 'Wellness Suite',
    image: 'https://images.pexels.com/photos/14025911/pexels-photo-14025911.jpeg?auto=compress&cs=tinysrgb&w=1600',
    desc: 'A spacious suite with a separate sitting area, canopy bed, and refined wooden interiors. The Wellness Suite offers ample space for rest, reading, and quiet practice during your stay.',
    amenities: ['King bed', 'Separate sitting area', 'Canopy bed', 'En-suite bathroom', 'Reading nook', 'Tea service'],
    occupancy: '2 guests',
    size: '42 sqm',
  },
  {
    slug: 'forest-villa',
    name: 'Forest Villa',
    image: 'https://images.pexels.com/photos/14025908/pexels-photo-14025908.jpeg?auto=compress&cs=tinysrgb&w=1600',
    desc: 'Our most spacious accommodation, featuring a generous bedroom, private veranda, and views of the surrounding greenery. The Forest Villa is ideal for longer wellness stays.',
    amenities: ['King bed', 'Private veranda', 'Garden and forest views', 'En-suite bathroom', 'Lounge area', 'Tea service', 'Yoga mat'],
    occupancy: '2\u20133 guests',
    size: '55 sqm',
  },
];

export const getRoom = (slug: string) => rooms.find((r) => r.slug === slug);
