import React from 'react';
import Band from './Band';

export default function BandsList({ bands }) {
  return (
    <div>
      {
        bands.map((band, i) =>
          <Band 
            key={`${band.name}-${i}`}
            name={band.name}
            genre={band.genre}
            subgenre={band.subgenre}
            year_founded={band.year_founded}
          />)
      }
    </div>
  );
}
