import { useEffect, useState } from 'react';
import { ImageSelectProps } from './ImageSelect';

const ImageThumbnail = ({
  image,
  selectedImage,
  setSelectedImage,
}: ImageSelectProps) => {
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

export default ImageThumbnail;
