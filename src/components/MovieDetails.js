import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieDetails = () => {
const [movieDetails, setMovieDetails] = useState([]);
useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json`)
    .then(response => {
        console.log(response.data.movies);
        console.log(props.match)
    })
  }, [])
    return (
        <div>
            
        </div>
    )
}

export default MovieDetails
