import Piece from './Piece';

interface PieceContainerProps {
  pieceCount: number;
  puzzlePieces: string[];
}

const PieceContainer = ({ pieceCount, puzzlePieces }: PieceContainerProps) => {
  console.log('pieces:', puzzlePieces);
  return (
    <div id="piece-container">
      <div id="piece-container-pieces">
        {puzzlePieces.map((p) => (
          <Piece key={p} pieceCount={pieceCount} puzzlePiece={p} />
        ))}
      </div>
    </div>
  );
};

export default PieceContainer;
