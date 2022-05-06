import React from 'react';
import Car from './Car';


export default function CarsList({ cars }) {
  return (
    <div className='car-list'>
      {
        cars.map((car, i) =>
          <Car 
            key={`${car.type}-${i}`}
            car={car}
          />)
      }
    </div>
  );
}
