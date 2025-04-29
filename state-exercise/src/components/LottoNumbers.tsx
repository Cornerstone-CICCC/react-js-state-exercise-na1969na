
import React from 'react';

interface LottoNumbersProps {
  setLottoNumbers: React.Dispatch<React.SetStateAction<number[]>>;
}

const LottoNumbers: React.FC<LottoNumbersProps> = ({ setLottoNumbers }) => {
  const generateLottoNumbers = () => {
    const numbers = Array.from({ length: 7 }, () => Math.floor(Math.random() * 50) + 1);
    setLottoNumbers(numbers);
  };

  return (
    <button onClick={generateLottoNumbers}>
      Generate Lotto Numbers
    </button>
  );
};

export default LottoNumbers;