import React from 'react'

const Movie = (props) => {
    return (
        <div>
            <h2>Name: {props.title}</h2>
            <p>Year: {props.year}</p>
            <p>Director: {props.director}</p>
        </div>
    )
}

export default Movie
