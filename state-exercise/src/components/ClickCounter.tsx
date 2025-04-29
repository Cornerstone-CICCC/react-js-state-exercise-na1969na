
import React from 'react';

interface ClickCounterProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const ClickCounter: React.FC<ClickCounterProps> = ({ setCount }) => {
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>
      Click Counter
    </button>
  );
};

export default ClickCounter;