import { pad } from './imageHelpers';

export const getGridCoords = (pieceCount: number) => {
  const coords = [];
  for (let i = 1; i <= pieceCount; i++) {
    const coord = pad(i.toString());
    coords.push(coord);
  }

  return coords;
};

export const getDigits = (url: string) => {
  const parts = url.split('.');
  const last = parts[0].slice(-3);

  return last;
}

export const shufflePieces = (a: string[]) => {
  for (
    var j, x, i = a.length;
    i;
    j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x
  );
  return a;
};

export const removePiece = (digits: string) => {
  const pieceContainer = document.querySelector('#piece-container-pieces');
  console.log('pieceContainer:', pieceContainer);
  const piece = pieceContainer?.querySelector(`#piece-${digits}`);
  console.log('piece:', piece);
  piece?.remove();
}
