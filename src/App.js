import { useEffect } from 'react';
import { useState } from 'react';
import { getBands } from './services/fetch-utils.js';
import { getInstruments } from './services/fetch-utils.js';
import { getCars } from './services/fetch-utils.js';
import BandsList from './Bands/BandsList';
import InstrumentsList from './Instruments/InstrumentsList.js';
import CarsList from './Cars/CarsList';
//import Spinner from './Spinner/Spinner';
import './App.css';

function App() {
  const [bands, setBands] = useState([]);
  const [instruments, setInstruments] = useState([]);
  const [cars, setCars] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    //setIsLoading(true);
    const bandsResponse = await getBands();
    const instrumentsResponse = await getInstruments();
    const carsResponse = await getCars();



    //setIsLoading(false);
    setBands(bandsResponse);
    setInstruments(instrumentsResponse);
    setCars(carsResponse);
  }, []);
  return (
    <div className="App">
      <h1>My Lists!</h1>
      <BandsList 
        bands={bands}
      />
      <InstrumentsList 
        instruments={instruments}
      />
      <CarsList 
        cars={cars}
      />
    </div>
  );
}

export default App;
