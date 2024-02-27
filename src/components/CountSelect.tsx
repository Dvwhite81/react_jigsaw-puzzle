import { SyntheticEvent } from 'react';
import { PIECE_COUNTS } from '../utils/imageHelpers';

interface CountSelectProps {
  setPieceCount: (value: number) => void;
}

const CountSelect = ({ setPieceCount }: CountSelectProps) => {
  const handleChange = (e: SyntheticEvent) => {
    const inputValue = (e!.target as HTMLInputElement)!.value;
    setPieceCount(Number(inputValue));
  };

  return (
    <div id="piece-count-select" className="setup-select">
      <h4>Number of Pieces</h4>
      <div className="setup-select-options">
        <select>
          {PIECE_COUNTS.map((count) => (
            <option
              key={count}
              id={`piece-count-option-${count}`}
              value={count}
              onChange={handleChange}
            >
              {count}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CountSelect;
