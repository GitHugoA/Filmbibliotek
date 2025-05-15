import React from 'react';
import Movie from '../Movie';
import styles from './movielist.module.css';

const MovieList = ({movies, onDelete}) => {
    return(
        <div className="mt-3">
        <h2>Filmer</h2>
        <ul className={styles.movies}>
            {movies.map((movie) => (
                <Movie key={movie.title} movie={movie} onDelete={onDelete} />
            ))}
        </ul>
        </div>
    );
};

export default MovieList;