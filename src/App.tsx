import { useState } from 'react';
import { PIECE_COUNTS } from './utils/data';
import { PuzzleImage } from './utils/types';
import Game from './components/Game/Game';
import Setup from './components/Setup/Setup';
import './App.css';

function App() {
  const [selectedImage, setSelectedImage] = useState<PuzzleImage | null>(null);
  const [pieceCount, setPieceCount] = useState<number>(PIECE_COUNTS[0]);
  const [puzzlePieces, setPuzzlePieces] = useState<string[]>([]);
  const [setupComplete, setSetupComplete] = useState(false);

  return (
    <div id="app">
      {!setupComplete || !selectedImage ? (
        <Setup
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          pieceCount={pieceCount}
          setPieceCount={setPieceCount}
          setPuzzlePieces={setPuzzlePieces}
          setSetupComplete={setSetupComplete}
        />
      ) : (
        <Game selectedImage={selectedImage} pieceCount={pieceCount} puzzlePieces={puzzlePieces} />
      )}
    </div>
  );
}

export default App;
