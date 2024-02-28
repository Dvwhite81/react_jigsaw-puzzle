interface PieceProps {
  pieceCount: number;
  puzzlePiece: string;
}

const Piece = ({ pieceCount, puzzlePiece }: PieceProps) => {
  const rows = Math.sqrt(pieceCount);
  const height = `calc(var(--board-height) / ${rows})`;

  return (
    <div className="piece" style={{ height: height, width: height }}>
      <img className="piece-img" src={puzzlePiece} />
    </div>
  )
}

export default Piece;
