import React, { useState, useEffect } from "react";
import moviesArray from "./MoviesArray";
import Movie from "./Movie";
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState(moviesArray);
  const [recentMovies, setRecentMovies] = useState(false);
  const recentMoviesHandler = () => {
      setRecentMovies(!recentMovies);
  }
  
  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json`)
    .then(movieDataBase => setMovies(movieDataBase.data.movies))
  }, [])
  return (
    <div>
        <button onClick={recentMoviesHandler}>{recentMovies ? 'Show all movies' : 'Display recent movies only'}</button>
      {movies
      .filter((movie) => {
          return(
              recentMovies ?
              movie.year > 2000
              :
              movies
          )
      })
      .map((movie) => 
          <Movie {...movie} key={movie.id}/>
      )}
    </div>
  );
};

export default MovieList;
