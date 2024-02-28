import { PuzzleImage } from '../../utils/types';
import ImageSelect from './ImageSelect';
import CountSelect from './CountSelect';
import './Setup.css';
import { getImgPieces } from '../../utils/imageHelpers';

interface SetupProps {
  selectedImage: PuzzleImage | null;
  setSelectedImage: (value: PuzzleImage) => void;
  pieceCount: number | null;
  setPieceCount: (value: number) => void;
  setPuzzlePieces: (value: string[]) => void;
  setSetupComplete: (value: boolean) => void;
}

const Setup = ({
  selectedImage,
  setSelectedImage,
  pieceCount,
  setPieceCount,
  setPuzzlePieces,
  setSetupComplete,
}: SetupProps) => {
  const handleClick = () => {
    if (selectedImage && pieceCount) {
      const pieces = getImgPieces(selectedImage, pieceCount);
      setPuzzlePieces(pieces);
      setSetupComplete(true);
    }
  };
  return (
    <div id="setup">
      <ImageSelect
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <CountSelect setPieceCount={setPieceCount} />
      <div id="setup-info" className="setup-select">
        <h3>Image Selected: {selectedImage?.label}</h3>
        <h3>Piece Count: {pieceCount}</h3>

        <button type="button" onClick={handleClick}>
          Play
        </button>
      </div>
    </div>
  );
};

export default Setup;
