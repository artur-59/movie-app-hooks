import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {
    return (
        <div>
            <h2>Name: {props.title}</h2>
            <p>Year: {props.year}</p>
            <p>Director: {props.director}</p>
            <Link to={`/movies/${props.id}`} >View movie details</Link>
        </div>
    )
}

export default Movie
