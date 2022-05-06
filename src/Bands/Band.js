import React from 'react';

export default function Band({ name, genre, subgenre, year_founded }) {
  return (
    <div className='band'>
      <h2>{name}</h2>
      <p>Genre: {genre}</p>
      <p>Subgenre: {subgenre}</p>
      <p>Year Formed: {year_founded}</p>
    </div>
  );
}
