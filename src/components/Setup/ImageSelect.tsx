import { IMAGES } from '../../utils/data';
import { PuzzleImage } from '../../utils/types';
import ImageThumbnail from './ImageThumbnail';

export interface ImageSelectProps {
  image?: PuzzleImage | null;
  selectedImage: PuzzleImage | null;
  setSelectedImage: (value: PuzzleImage) => void;
}

const ImageSelect = ({ selectedImage, setSelectedImage }: ImageSelectProps) => {
  return (
    <div id="image-select" className="setup-select">
      <h2>Image Select</h2>
      <div className="setup-select-options">
        {IMAGES.map((image) => (
          <ImageThumbnail
            key={image.label}
            image={image}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSelect;
