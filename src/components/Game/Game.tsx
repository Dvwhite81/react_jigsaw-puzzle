import { PuzzleImage } from '../../utils/types';
import Board from './Board';
import PieceContainer from './PieceContainer';
import './Game.css';

interface GameProps {
  selectedImage: PuzzleImage;
  pieceCount: number;
  puzzlePieces: string[];
}

const Game = ({ selectedImage, pieceCount, puzzlePieces }: GameProps) => {
  return (
    <div id="game">
      <PieceContainer
        pieceCount={pieceCount}
        puzzlePieces={puzzlePieces}
      />
      <Board
        selectedImage={selectedImage}
        pieceCount={pieceCount}
      />
    </div>
  );
};

export default Game;
