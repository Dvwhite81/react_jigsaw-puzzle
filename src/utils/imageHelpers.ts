import { PuzzleImage } from './types';

export const pad = (str: string) => {
  while (str.length < 3) {
    str = '0' + str;
  }
  return str;
}

export const getImgUrls = (directory: string, count: number) => {
  const urls = [];

  const baseUrl = `/src/assets/images/${directory}`;
  console.log('baseUrl:', baseUrl);

  for (let i = 1; i <= count; i++) {
    const str = pad(i.toString());
    const imgUrl = `${baseUrl}/image_part_${str}.jpg`;
    urls.push(imgUrl);
  }

  return urls;
}

export const getImgPieces = (selectedImage: PuzzleImage, pieceCount: number) => {
  switch (pieceCount) {
    case 9:
      return selectedImage.pieces9;
    case 25:
      return selectedImage.pieces25;
    case 100:
      return selectedImage.pieces100;
    case 400:
      return selectedImage.pieces400;
    default:
      return selectedImage.pieces9;
  }
}
