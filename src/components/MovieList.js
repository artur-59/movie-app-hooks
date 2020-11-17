import React, { useState } from "react";
import moviesArray from "./MoviesArray";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useState(moviesArray);
  return (
    <div>
        <Movie title='Fight Club' />
      {movies.map((movie) => {
          <Movie title={movie.title} />
      })}
    </div>
  );
};

export default MovieList;
