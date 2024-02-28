import { SyntheticEvent } from 'react';
import { PIECE_COUNTS } from '../../utils/data';

interface CountSelectProps {
  setPieceCount: (value: number) => void;
}

const CountSelect = ({ setPieceCount }: CountSelectProps) => {
  const handleChange = (e: SyntheticEvent) => {
    const inputValue = (e!.target as HTMLInputElement)!.value;
    console.log('inputValue:', inputValue);
    setPieceCount(Number(inputValue));
  };

  return (
    <div id="piece-count-select" className="setup-select">
      <h2>Number of Pieces</h2>
      <div className="setup-select-options">
        <select onChange={handleChange}>
          {PIECE_COUNTS.map((count) => (
            <option
              key={count}
              id={`piece-count-option-${count}`}
              value={count}
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
