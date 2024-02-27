import { PuzzlePiece } from "./types";

export const getPieces = (imageSrc: string) => {
  const rows = 3;
  const cols = 3;

  const imageElement = new Image();
  imageElement.src = imageSrc;

  const imageWidth = 300;
  const imageHeight = 300;
  const pieceWidth = imageWidth / cols;
  const pieceHeight = imageHeight / rows;

  return [
    { col: 0, row: 0, width: pieceWidth, height: pieceHeight },
    { col: 1, row: 0, width: pieceWidth, height: pieceHeight },
    { col: 2, row: 0, width: pieceWidth, height: pieceHeight },
    { col: 0, row: 1, width: pieceWidth, height: pieceHeight },
    { col: 1, row: 1, width: pieceWidth, height: pieceHeight },
    { col: 2, row: 1, width: pieceWidth, height: pieceHeight },
    { col: 0, row: 2, width: pieceWidth, height: pieceHeight },
    { col: 1, row: 2, width: pieceWidth, height: pieceHeight },
    { col: 2, row: 2, width: pieceWidth, height: pieceHeight },
  ];
}

export const shufflePieces = (a: PuzzlePiece[]) => {
  for (
    var j, x, i = a.length;
    i;
    j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x
  );
  return a;
}

export const drawPiece = (
  context: CanvasRenderingContext2D,
  imageElement: HTMLImageElement,
  piece: PuzzlePiece,
) => {
  const drawing = context.drawImage(
    imageElement,
    piece.width,
    piece.height,
    piece.width,
    piece.height,
    piece.col * piece.width,
    piece.row * piece.height,
    piece.width,
    piece.height,
  );

  console.log('drawing:', drawing);

  return drawing;
}

export const drawPieces = (
  context: CanvasRenderingContext2D,
  imageElement: HTMLImageElement,
  pieces: PuzzlePiece[],
  rows: number,
  cols: number,
) => {

  shufflePieces(pieces);

  let i = 0;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const p = pieces[i++];

      context.drawImage(
        imageElement,
        x * p.width,
        y * p.height,
        p.width,
        p.height,
        p.col * p.width,
        p.row * p.height,
        p.width,
        p.height,
      );
    }
  }
};
