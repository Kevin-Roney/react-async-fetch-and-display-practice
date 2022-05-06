import React from 'react';

export default function Car({ car }) {
  return (
    <div className='car'>
      <h2>{car.brand} {car.type}</h2>
      <p>{car.year}</p>
      <div className='interior'>
        {
          car.interior.map((interior, i) =>
            <p key={i}>{interior}</p>)
        }
      </div>
    </div>
  );
}
