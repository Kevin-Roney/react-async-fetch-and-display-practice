import React from 'react';
import Candy from './Candy';

export default function CandiesList({ candies }) {
  return (
    <div>
      {
        candies.map((candy, i) => 
          <Candy 
            key={`${candy.name}-${i}`}
            candy={candy}
          />)
      }
    </div>
  );
}
