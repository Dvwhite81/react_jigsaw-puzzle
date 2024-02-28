import { getGridCoords } from '../../utils/gameHelpers';
import { PuzzleImage } from '../../utils/types';
import Square from './Square';

interface BoardProps {
  selectedImage: PuzzleImage;
  pieceCount: number;
}

const Board = ({ selectedImage, pieceCount }: BoardProps) => {
  const coords = getGridCoords(pieceCount);
  const cols = Math.sqrt(pieceCount);

  return (
    <div id="board" style={{ backgroundImage: `url(${selectedImage.mainImage})`, gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {coords.map((c) =>
        <Square key={c} pieceCount={pieceCount} coords={c} />
      )}
    </div>
  );
};

export default Board;
