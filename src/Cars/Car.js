import React from 'react';

export default function Car({ car }) {
  return (
    <div className='car'>
      <h2>{car.brand} {car.type}</h2>
      <p>Year: {car.year}</p>
      <div className='interior'>Interior:
        {
          car.interior.map((interior, i) =>
            <p className='interior-item' key={i}>{interior}, </p>)
        }
      </div>
    </div>
  );
}
