import React from 'react';
import Stopwatch from './components/Stopwatch';
import Numbers from './components/Numbers';
import Partners from './components/Partners';
import Timeline from './components/Timeline';
import { useState } from 'react';
import './light-mode.css';
function App() {
  const eventDate = '2023-07-20T00:00:00';

  const [mode, setMode] = useState('dark');
  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`App ${mode}`}>
      <button onClick={toggleMode}>Change theme</button>
      <Stopwatch targetDate={eventDate} mode={mode}/>
      <Numbers mode={mode}/>
      <Partners mode={mode} />
      <Timeline mode={mode} />
    </div>
  );
}

export default App;
