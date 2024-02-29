import React, { useState } from 'react';
import { getDigits, removePiece } from '../../utils/gameHelpers';

interface SquareProps {
  pieceCount: number;
  coords: string;
}

const Square = ({ pieceCount, coords }: SquareProps) => {
  const [imgSrc, setImgSrc] = useState('');

  const rows = Math.sqrt(pieceCount);
  const height = `calc(var(--board-height) / ${rows})`;

  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const imgUrl = event.dataTransfer.getData('text');
    const digits = getDigits(imgUrl);
    if (digits === coords) {
      setImgSrc(imgUrl);
      removePiece(digits);
    }
  };

  return (
    <div
      className="square"
      id={`${coords}-square`}
      data-id={coords}
      style={{ height: height, width: height }}
      onDragOver={enableDropping}
      onDrop={handleDrop}
    >
      <img className="piece-img square-piece-img" src={imgSrc} />
    </div>
  );
}

export default Square;
