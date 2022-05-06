import { useEffect } from 'react';
import { useState } from 'react';
import { getBands } from './services/fetch-utils.js';
import { getInstruments } from './services/fetch-utils.js';
import { getCars } from './services/fetch-utils.js';
import { getCandies } from './services/fetch-utils.js';
import BandsList from './Bands/BandsList';
import InstrumentsList from './Instruments/InstrumentsList.js';
import CarsList from './Cars/CarsList';
import CandiesList from './Candies/CandiesList';
//import Spinner from './Spinner/Spinner';
import './App.css';

function App() {
  const [bands, setBands] = useState([]);
  const [instruments, setInstruments] = useState([]);
  const [cars, setCars] = useState([]);
  const [candies, setCandies] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    //setIsLoading(true);
    const bandsResponse = await getBands();
    const instrumentsResponse = await getInstruments();
    const carsResponse = await getCars();
    const candiesResponse = await getCandies();



    //setIsLoading(false);
    setBands(bandsResponse);
    setInstruments(instrumentsResponse);
    setCars(carsResponse);
    setCandies(candiesResponse);
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
      <CandiesList 
        candies={candies}
      />
    </div>
  );
}

export default App;
