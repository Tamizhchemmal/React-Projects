import { useEffect } from "react";
import "./App.css";
import logo from "./media/icons8-movie-64.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function App() {
  const [movies, setMovies] = useState([]);

  const search = "interstellar";

  useEffect(function () {
    async function fetchdata() {
      await fetch(`http://www.omdbapi.com/?apikey=4f2ff70a&s=${search}`)
        .then((data) => data.json())
        .then((movieslist) => setMovies(movieslist.Search));
    }
    fetchdata();
  }, []);

  return (
    <>
      <div className="box">
        <Navbar />
        <Main movies={movies} />
      </div>
    </>
  );
}

function Navbar() {
  return (
    <>
      <div className="navbar-div container">
        <Logo />
        <Search />
        <ResultCount />
      </div>
    </>
  );
}

function Main({ movies }) {
  return (
    <>
      <div className="main-div">
        <MovieList movies={movies} />
        <WatchListBox />
      </div>
    </>
  );
}

function MovieList({ movies }) {
  return (
    <>
      <div className="movielist-div">
        <button>-</button>
        <ul>
          {movies?.map((movie) => (
            <Movie movie={movie} />
          ))}
        </ul>
      </div>
    </>
  );
}

function Movie({ movie }) {
  return (
    <>
      <li key={movie.imdbID}>
        <img src={movie.Poster}></img>
        <p>
          <span>{movie.Title}</span>
          <span>{movie.Year}</span>
        </p>
      </li>
    </>
  );
}

function WatchListBox() {
  return (
    <>
      <div className="watchlist-div"></div>
    </>
  );
}

function Logo() {
  return (
    <>
      <div className="logo-div">
        <img src={logo} alt="logo"></img>
        <span className="app-name">MovieBox</span>
      </div>
    </>
  );
}

function Search() {
  return (
    <>
      <div className="search-div">
        <input type="search" placeholder="Search Movies..."></input>
      </div>
    </>
  );
}

function ResultCount() {
  return (
    <>
      <div className="search-div">We Found num Results✌️</div>
    </>
  );
}
