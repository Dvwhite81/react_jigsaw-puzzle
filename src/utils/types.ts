export interface PuzzleImage {
  label: string;
  mainImage: string;
  pieces400: string[];
}

export interface PuzzlePiece {
  row: number;
  col: number;
  height: number;
  width: number;
}
