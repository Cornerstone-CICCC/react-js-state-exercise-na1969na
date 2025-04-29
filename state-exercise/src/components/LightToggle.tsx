
import React from 'react';

interface LightToggleProps {
  setIsLightsOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LightToggle: React.FC<LightToggleProps> = ({ setIsLightsOn }) => {
  return (
    <button onClick={() => setIsLightsOn((prev) => !prev)}>
      Toggle Lights
    </button>
  );
};

export default LightToggle;