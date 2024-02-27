import { PuzzleImage } from '../utils/types';
import ImageSelect from './ImageSelect';
import CountSelect from './CountSelect';

interface SetupProps {
  selectedImage: PuzzleImage | null;
  setSelectedImage: (value: PuzzleImage) => void;
  setPieceCount: (value: number) => void;
}

const Setup = ({ selectedImage, setSelectedImage, setPieceCount }: SetupProps) => {
  return (
    <div id="setup">
      <ImageSelect selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      <CountSelect setPieceCount={setPieceCount} />
    </div>
  );
};

export default Setup;
