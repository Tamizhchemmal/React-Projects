import { useEffect } from "react";
import "./App.css";
import logo from "./media/icons8-movie-64.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
const movieData = [
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDFhNzU4MTMtYzZmNS00ZDEzLTg2MjQtYmUzZDA1ZWU4OTkzXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg",
    Title: "The Science of Interstellar",
    Type: "movie",
    Year: "2015",
    imdbID: "tt4415360",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    Title: "Interstellar",
    Type: "movie",
    Year: "2014",
    imdbID: "tt0816692",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzE5MmExYzMtYjQxYi00ZDlkLTkzMTYtMWQzNTZkMjBiYWI2L2ltYWdlXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg",
    Title: "Interstellar Wars",
    Type: "movie",
    Year: "2016",
    imdbID: "tt5083736",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzE5MmExYzMtYjQxYi00ZDlkLTkzMTYtMWQzNTZkMjBiYWI2L2ltYWdlXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg",
    Title: "Interstellar Wars",
    Type: "movie",
    Year: "2016",
    imdbID: "tt5083736",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDFhNzU4MTMtYzZmNS00ZDEzLTg2MjQtYmUzZDA1ZWU4OTkzXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg",
    Title: "The Science of Interstellar",
    Type: "movie",
    Year: "2015",
    imdbID: "tt4415360",
  },
];

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

  console.log(movies);
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
        <ul>
          {movies?.map((movie) => (
            <li key={movie.imdbID}>{movie.Title}</li>
          ))}
        </ul>
      </div>
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
