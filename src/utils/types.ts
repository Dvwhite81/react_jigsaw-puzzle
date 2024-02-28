export interface PuzzleImage {
  label: string;
  mainImage: string;
  pieces9: string[];
  pieces25: string[];
  pieces100: string[];
  pieces400: string[];
}

export interface PuzzlePiece {
  row: number;
  col: number;
  height: number;
  width: number;
}
