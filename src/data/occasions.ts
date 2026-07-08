import { Occasion } from '../types';

export const occasions: Occasion[] = [
  {
    id: '1',
    name: 'Birthday',
    slug: 'birthday',
    image: 'https://images.pexels.com/photos-1133957/pexels-photo-1133957.jpeg?w=600',
  },
  {
    id: '2',
    name: 'Anniversary',
    slug: 'anniversary',
    image: 'https://images.pexels.com/photos-10289960/pexels-photo-10289960.jpeg?w=600',
  },
  {
    id: '3',
    name: "Valentine's Day",
    slug: 'valentine',
    image: 'https://images.pexels.com/photos-165853/pexels-photo-165853.jpeg?w=600',
  },
  {
    id: '4',
    name: "Mother's Day",
    slug: 'mothers-day',
    image: 'https://images.pexels.com/photos-1453574/pexels-photo-1453574.jpeg?w=600',
  },
  {
    id: '5',
    name: "Father's Day",
    slug: 'fathers-day',
    image: 'https://images.pexels.com/photos-1031645/pexels-photo-1031645.jpeg?w=600',
  },
  {
    id: '6',
    name: "Women's Day",
    slug: 'womens-day',
    image: 'https://images.pexels.com/photos-3672951/pexels-photo-3672951.jpeg?w=600',
  },
  {
    id: '7',
    name: 'Friendship Day',
    slug: 'friendship-day',
    image: 'https://images.pexels.com/photos-125417/pexels-photo-125417.jpeg?w=600',
  },
  {
    id: '8',
    name: 'Raksha Bandhan',
    slug: 'raksha-bandhan',
    image: 'https://images.pexels.com/photos-67692/pexels-photo-67692.jpeg?w=600',
  },
  {
    id: '9',
    name: 'Christmas',
    slug: 'christmas',
    image: 'https://images.pexels.com/photos-1661642/pexels-photo-1661642.jpeg?w=600',
  },
  {
    id: '10',
    name: 'New Year',
    slug: 'new-year',
    image: 'https://images.pexels.com/photos-1037992/pexels-photo-1037992.jpeg?w=600',
  },
  {
    id: '11',
    name: 'Graduation',
    slug: 'graduation',
    image: 'https://images.pexels.com/photos-1428189/pexels-photo-1428189.jpeg?w=600',
  },
  {
    id: '12',
    name: 'Proposal',
    slug: 'proposal',
    image: 'https://images.pexels.com/photos-936137/pexels-photo-936137.jpeg?w=600',
  },
  {
    id: '13',
    name: 'Wedding',
    slug: 'wedding',
    image: 'https://images.pexels.com/photos-169194/pexels-photo-169194.jpeg?w=600',
  },
  {
    id: '14',
    name: 'Baby Shower',
    slug: 'baby-shower',
    image: 'https://images.pexels.com/photos-5837132/pexels-photo-5837132.jpeg?w=600',
  },
];

export const getOccasionBySlug = (slug: string): Occasion | undefined => {
  return occasions.find(o => o.slug === slug);
};
