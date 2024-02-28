interface SquareProps {
  pieceCount: number;
  coords: string;
}

const Square = ({ pieceCount, coords }: SquareProps) => {
  const rows = Math.sqrt(pieceCount);
  const height = `calc(var(--board-height) / ${rows})`;

  return (
    <div className="square" id={`${coords}-square`} style={{ height: height, width: height }} />
  );
}

export default Square;
