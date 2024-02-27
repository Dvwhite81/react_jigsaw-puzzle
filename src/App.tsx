import { useState } from 'react';
import { PuzzleImage, PuzzlePiece } from './utils/types';
import PieceContainer from './components/PieceContainer';
import Setup from './components/Setup';
import './App.css';

function App() {
  const [selectedImage, setSelectedImage] = useState<PuzzleImage | null>(null);
  const [pieceCount, setPieceCount] = useState<number | null>(null);
  const [puzzlePieces, setPuzzlePieces] = useState<PuzzlePiece[]>([]);

  console.log('selectedImage:', selectedImage);
  console.log('pieceCount:', pieceCount);
  return (
    <div id="App">
      {(!selectedImage || !pieceCount) ? (
        <Setup selectedImage={selectedImage} setSelectedImage={setSelectedImage} setPieceCount={setPieceCount} />
      ) : (
          <PieceContainer puzzlePieces={puzzlePieces} />
      )}
    </div>
  );
}

export default App;
