import React, { useState } from 'react';
import './App.css'
import LightToggle from './components/LightToggle';
import LottoNumbers from './components/LottoNumbers';
import ClickCounter from './components/ClickCounter';

const App: React.FC = () => {
  const [isLightsOn, setIsLightsOn] = useState(true);
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        backgroundColor: isLightsOn ? 'white' : 'black',
        color: isLightsOn ? 'black' : 'white',
        minHeight: '50vh',
        minWidth: '50vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h2>Light Toggle</h2>
      <LightToggle setIsLightsOn={setIsLightsOn} />
      <div style={{ margin: '10px 0' }}>The lights are {isLightsOn ? 'On' : 'Off'}</div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers setLottoNumbers={setLottoNumbers} />
      <div className="output" style={{ margin: '10px 0' }}>{lottoNumbers.join(', ')}</div>

      <h2>Click Counter</h2>
      <ClickCounter setCount={setCount} />
      <div className="output" style={{ margin: '10px 0' }}>Count: {count}</div>
    </div>
  );
};

export default App;
