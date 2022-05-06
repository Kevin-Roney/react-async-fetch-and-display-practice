import React from 'react';

export default function Instrument({ name, string_count, year_invented }) {
  return (
    <div className='instrument'>
      <h2>{name}</h2>
      <p>Number of Strings: {string_count}</p>
      <p>Year Invented: {year_invented}</p>
    </div>
  );
}
