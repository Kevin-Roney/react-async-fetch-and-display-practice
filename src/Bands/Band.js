import React from 'react';

export default function Band({ bands }) {
  return (
    <div className='band'>
      <h2>{bands.name}</h2>
      <p>Genre: {bands.genre}</p>
      <p>Subgenre: {bands.subgenre}</p>
      <p>Year Formed: {bands.year_founded}</p>
    </div>
  );
}
