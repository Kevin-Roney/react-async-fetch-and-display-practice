import { useEffect } from 'react';
import { useState } from 'react';
import { getBands } from './services/fetch-utils.js';
import './App.css';

function App() {
  const [bands, setBands] = useState([]);

  useEffect(async () => {

    const bandsResponse = await getBands();

    setBands(bandsResponse);
  });
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
