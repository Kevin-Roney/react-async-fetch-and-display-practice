import React from 'react';
import Band from './Band';

export default function BandsList({ bands }) {
  return (
    <div>
      {
        bands.map((band, i) =>
          <Band 
            key={`${band.name}-${i}`}
            bands={bands}
          />)
      }
    </div>
  );
}
