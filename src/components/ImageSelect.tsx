import { useEffect, useState } from 'react';
import { IMAGES } from '../utils/imageHelpers';
import { PuzzleImage } from '../utils/types';

interface ImageSelectProps {
  image?: PuzzleImage | null;
  selectedImage: PuzzleImage | null;
  setSelectedImage: (value: PuzzleImage) => void;
}

const ImageSelect = ({ selectedImage, setSelectedImage }: ImageSelectProps) => {
  return (
    <div id="image-select" className="setup-select">
      <h4>Image Select</h4>
      <div className="setup-select-options">
        {IMAGES.map((image) => (
          <ImageThumbnail key={image.label} image={image} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        ))}
      </div>
    </div>
  );
};

const ImageThumbnail = ({ image, selectedImage, setSelectedImage }: ImageSelectProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedClass, setSelectedClass] = useState('');

  useEffect(() => {
    if (selectedImage === image) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  });

  useEffect(() => {
    if (isSelected) {
      setSelectedClass('selected-thumbnail');
    } else {
      setSelectedClass('');
    }
  });

  if (!image) return null;

  return (
    <div className={`setup-select-option image-select-option ${selectedClass}`}>
      <img
        key={image.label}
        className="thumbnail"
        onClick={() => setSelectedImage(image)}
        src={image.mainImage}
      />
    </div>
  );
};

export default ImageSelect;
