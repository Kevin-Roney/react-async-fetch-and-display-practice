import React from 'react';
import Instrument from './Instrument';

export default function InstrumentsList({ instruments }) {
  return (
    <div>
      {
        instruments.map((instrument, i) => 
          <Instrument 
            key={`${instrument.name}-${i}`}
            name={instrument.name}
            string_count={instrument.string_count}
            year_invented={instrument.year_invented}
          />
        )
      }
    </div>
  );
}
