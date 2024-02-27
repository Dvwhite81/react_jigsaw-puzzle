import Earth from '/earth.jpg';
import Sun from '/sun.jpg';

export const IMAGES = [
  {
    label: 'Earth',
    mainImage: Earth,
    pieces400: Array.from('/earth-pieces-400'),
  },
  {
    label: 'Sun',
    mainImage: Sun,
    pieces400: Array.from('/sun-pieces-400'),
  },
];

export const PIECE_COUNTS = [
  400,
  200,
  100,
  50
];
