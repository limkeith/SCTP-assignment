// src/Components/Container.js
import React from 'react';
import Genre from './Genre';

function Container() {
  return (
    <div>
      <header>
        <h1>Movie App</h1>
      </header>
      <Genre 
        name="Comedy" 
        description="Light-hearted movies"
        movieTitle1={{ details: { title: "Movie 1" }, year: 2020 }}
        movieTitle2={{ details: { title: "Movie 2" }, year: 2021 }}
      />
      <Genre 
        name="Romance" 
        description="Love stories"
        movieTitle1={{ details: { title: "Movie 3" }, year: 2019 }}
        movieTitle2={{ details: { title: "Movie 4" }, year: 2022 }}
      />
    </div>
  );
}

export default Container;