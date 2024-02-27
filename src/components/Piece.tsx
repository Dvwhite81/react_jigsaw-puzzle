import { useEffect, useState } from 'react';
import { drawPiece } from '../utils/canvasHelpers';
import { PuzzlePiece } from '../utils/types';

interface PieceProps {
  context: CanvasRenderingContext2D | null;
  imageElement: HTMLImageElement | null;
  puzzlePiece: PuzzlePiece;
}

const Piece = ({ puzzlePiece }: PieceProps) => {

  return (
    <div className="piece">
      {puzzlePiece}
    </div>
  )
}

export default Piece;
