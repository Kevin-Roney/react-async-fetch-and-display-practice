import { useEffect } from 'react';
import { useState } from 'react';
import { getBands } from './services/fetch-utils.js';
import './App.css';

function App() {
  const [bands, setBands] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    const bandsResponse = await getBands();



    setIsLoading(false);
    setBands(bandsResponse);
  });
  return (
    <div className="App">
      {
        isLoading
          ? <Spinner />
          : <BandsList 
            bands={bands}
          />
      }
    </div>
  );
}

export default App;
