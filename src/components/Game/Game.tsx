import PieceContainer from './PieceContainer';
import './Game.css';

interface GameProps {
  pieceCount: number;
  puzzlePieces: string[];
}

const Game = ({ pieceCount, puzzlePieces }: GameProps) => {
  return (
    <div id="game">
      <PieceContainer pieceCount={pieceCount} puzzlePieces={puzzlePieces} />
    </div>
  );
};

export default Game;
