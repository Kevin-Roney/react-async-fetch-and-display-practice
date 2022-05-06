import React from 'react';

export default function Candy({ candy }) {
  return (
    <div>
      <h2>{candy.name}</h2>
      <p>Brand: {candy.brand}</p>
      <p>Year Invented: {candy.year}</p>
      <div className='category'>
        Type:
        {
          candy.category.map((category, i) =>
            <p className='category-item' key={i}>{category},</p>)
        }
      </div>
    </div>
  );
}
