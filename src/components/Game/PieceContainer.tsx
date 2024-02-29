import { shufflePieces } from '../../utils/gameHelpers';
import Piece from './Piece';

interface PieceContainerProps {
  pieceCount: number;
  puzzlePieces: string[];
}

const PieceContainer = ({ pieceCount, puzzlePieces }: PieceContainerProps) => {
  const shuffledPieces = shufflePieces(puzzlePieces);
  return (
    <div id="piece-container">
      <div id="piece-container-pieces">
        {shuffledPieces.map((p) => (
          <Piece key={p} pieceCount={pieceCount} puzzlePiece={p} />
        ))}
      </div>
    </div>
  );
};

export default PieceContainer;
