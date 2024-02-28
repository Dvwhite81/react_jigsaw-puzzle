import { getImgUrls } from './imageHelpers';
import Earth from '/earth.jpg';
import Sun from '/sun.jpg';

export const IMAGES = [
  {
    label: 'Earth',
    mainImage: Earth,
    pieces9: getImgUrls('earth-pieces-9', 9),
    pieces25: getImgUrls('earth-pieces-25', 25),
    pieces100: getImgUrls('earth-pieces-100', 100),
    pieces400: getImgUrls('earth-pieces-400', 400),
  },
  {
    label: 'Sun',
    mainImage: Sun,
    pieces9: getImgUrls('sun-pieces-9', 9),
    pieces25: getImgUrls('sun-pieces-25', 25),
    pieces100: getImgUrls('sun-pieces-100', 100),
    pieces400: getImgUrls('sun-pieces-400', 400),
  },
];

export const PIECE_COUNTS = [9, 25, 100, 400];
