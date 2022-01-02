import React from 'react'
import classes from './Movie.module.css';

function Movie(props) {
    return (
        <li className={classes.movie}>
            <h2>{props.title}</h2>
            <h3>{ props.releaseDae}</h3>
            <p>{ props.openingText}</p>
        </li>
    )
}

export default Movie
