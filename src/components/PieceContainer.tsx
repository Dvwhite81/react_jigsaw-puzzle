import { PuzzlePiece } from '../utils/types';
import Piece from './Piece';

interface PieceContainerProps {
  puzzlePieces: PuzzlePiece[];
}

const PieceContainer = ({ puzzlePieces }: PieceContainerProps) => {
  return (
    <div id="piece-container">
      {puzzlePieces.map((p) =>
        <Piece puzzlePiece={p} />
      )}
    </div>
  )
}

export default PieceContainer;
