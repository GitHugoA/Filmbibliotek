"use client";
import Image from "next/image";
import styles from "./page.module.css";
import InputField from "./components/InputField";
import Select from "./components/Select";
import Button from "./components/Button";
import Movie from "./components/Movie";
import MovieList from "./components/MovieList"
import { useEffect, useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState(0);
  const [movies, setMovies] = useState([

  ]);

  const addMovie = () => {
    if(title === "" || grade === 0){
      alert('Du måste ange både titel och betyg för att spara en film!');
    } else {
      setMovies((prevMovies) => [...prevMovies, {title, grade}]);
      setTitle("");
      setGrade(0);
    }
  }

  const deleteMovie = (movieToDelete) => {
    setMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.title !== movieToDelete)
    );
  };

  const sortMoviesAlphabetically = () => {
    const sortedMovies = [...movies].sort((a,b) => a.title.localeCompare(b.title));
    setMovies(sortedMovies);
  };

  const sortMoviesByGrade = () => {
    const sortedMovies = [...movies].sort((a,b) => b.grade - a.grade);
    setMovies(sortedMovies);
  }


  return (
    <div className="container">

        <h1>Min filmlista</h1>
        <legend>Lägg till en film</legend>
        <hr/>
        <InputField
        id="movieTitle"
        labelTitle="Titel: "
        placeholder="Titel här..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        />
        <Select
          id = "grade"
          labelTitle = "Betyg: "
          onChange={(e) => setGrade(Number(e.target.value))}
          value={grade}
        />
        <Button
          text="Spara film"
          onClick= {addMovie}
        />
        <MovieList movies={movies} onDelete={deleteMovie} />
        <Button
          text="Alfabetisk ordning"
          onClick={sortMoviesAlphabetically}
        />
        <Button
          text="Betygsordning"
          onClick={sortMoviesByGrade}
        />

    </div>
  );
}
