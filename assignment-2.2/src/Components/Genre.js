// src/Genre.js
import React from 'react';
import Movie from './Movie';

const Genre = ({ name, description, movieTitle1, movieTitle2 }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <Movie title={movieTitle1.details.title} year={movieTitle1.year} />
      <Movie title={movieTitle2.details.title} year={movieTitle2.year} />
    </div>
  );
};

export default Genre;