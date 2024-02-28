import { PuzzlePiece } from './types';
import { pad } from './imageHelpers';

export const getGridCoords = (pieceCount: number) => {
  const coords = [];
  for (let i = 1; i <= pieceCount; i++) {
    const coord = pad(i.toString());
    coords.push(coord);
  }

  return coords;
};

export const shufflePieces = (a: PuzzlePiece[]) => {
  for (
    var j, x, i = a.length;
    i;
    j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x
  );
  return a;
}
