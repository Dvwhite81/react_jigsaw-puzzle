import { getDigits } from "../../utils/gameHelpers";

interface PieceProps {
  pieceCount: number;
  puzzlePiece: string;
}

const Piece = ({ pieceCount, puzzlePiece }: PieceProps) => {
  const rows = Math.sqrt(pieceCount);
  const height = `calc(var(--board-height) / ${rows})`;

  const digits = getDigits(puzzlePiece);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    if (!event.target) return;

    event.dataTransfer?.setData('text', puzzlePiece);
  }

  return (
    <div
      id={`piece-${digits}`}
      className="piece"
      style={{ height: height, width: height }}
      draggable="true"
      onDragStart={handleDragStart}
    >
      <img className="piece-img" src={puzzlePiece} />
    </div>
  );
}

export default Piece;
