import "./App.css";
import logo from "./media/icons8-movie-64.png";

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
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

function Navbar() {
  return (
    <>
      <div className="navbar-div">
        <Logo />
        <Search />
        <ResultCount />
      </div>
    </>
  );
}

function Main() {
  return (
    <>
      <div className="main-div">
        <MovieList />
        <WatchListBox />
      </div>
    </>
  );
}

function MovieList() {
  return (
    <>
      <div className="movielist-div"></div>
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
