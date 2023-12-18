import React, { useEffect, useState } from "react";
import "./popcorn.css";

const KEY = "6b44cc4";

function MainApp() {
  const [query, setQuery] = useState("Fire proof");
  const [movies, setMovies] = useState([]);

  const handleChangeQuery = (e) => {
    setQuery(e.target.value);
  };
  const total_movies = movies.length;

  return (
    <div className="container">
      <NavBar>
        <Logo />
        <SearchBar query={query} handleChangeQuery={handleChangeQuery} />
        <Notification num={total_movies} />
      </NavBar>
      <Main query={query} movies={movies} setMovies={setMovies} />
    </div>
  );
}

function NavBar({ children }) {
  return <div className="navbar">{children}</div>;
}

function Logo() {
  return (
    <div className="logo">
      <p>
        <span>🍿</span>usePopcorn
      </p>
    </div>
  );
}

function SearchBar({ query, handleChangeQuery }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search movies"
        value={query}
        onChange={handleChangeQuery}
      />
    </div>
  );
}

function Notification({ num }) {
  return (
    <div className="notification">
      <span>Found {num} Result</span>
    </div>
  );
}

function Main({ query, movies, setMovies }) {
  // const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState("");
  const [watchedList, setWatchedList] = useState([]);
  const [showWatched, setShowWatched] = useState(false);
  const [movie, setMovie] = useState([]);
  const [isClose, setIsClose] = useState(true);
  const [watchedSummary, setWatchedSummary] = useState({
    count: 0,
    rating: 0,
    userRating: 0,
    minutes: 0,
  });

  const handleClose = () => {
    setMovieId(null);
    // console.log(isClose);
  };
  const handleSelectedMovie = (id) => {
    setMovieId((movieId) => (movieId === id ? null : id));
    setShowWatched(false);
  };
  const err = "⛔ Error fetching Movie";

  const handleAddMovie = (id) => {
    setWatchedList((prevMovies) => [...prevMovies, movie]);
    setShowWatched(true);
    console.log(movie);
    const result = {
      ...watchedList,
      count: parseInt(watchedList.count + 1),
      rating: parseInt(movie.rating + movie.imdbRating),
      userRating: 1,
      minutes:
        parseInt(movie.minutes) + parseInt(movie.Runtime.split(" ").at(0)),
    };

    setWatchedSummary(result);
  };

  const handleMovieDelete = (id) => {
    setWatchedList((watchedList) =>
      watchedList.filter((movie) => movie.imdbID !== id)
    );
  };

  useEffect(
    function () {
      setIsLoading(true);

      async function getMovies() {
        try {
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );
          if (!res.ok) throw new Error("Something went wrong fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          // console.log(data.Search);
          setHasError("");
        } catch (error) {
          if (err.name !== "AbortError") {
            setHasError(error.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setHasError("");
        return;
      }

      getMovies();
    },
    [query, setMovies]
  );

  return (
    <div className="content">
      <Box className="box">
        {isLoading && <Loader />}

        {!isLoading && !hasError && (
          <MoviesList
            movies={movies}
            handleSelectedMovie={handleSelectedMovie}
          />
        )}

        {!hasError && <Error message={hasError} />}
      </Box>
      <Box className="box">
        {movieId === null || !isClose ? (
          <Summary watch={watchedSummary} />
        ) : showWatched ? (
          <>
            <Summary watch={watchedSummary} />{" "}
            <WatchedListMovies
              watchedList={watchedList}
              handleMovieDelete={handleMovieDelete}
            />
          </>
        ) : (
          <MovieDetails
            movieId={movieId}
            handleAddMovie={handleAddMovie}
            movie={movie}
            setMovie={setMovie}
            onclose={handleClose}
            key={movieId}
          />
        )}
      </Box>
    </div>
  );
}

function Box({ children, className }) {
  return <div className={className}>{children}</div>;
}

function Summary({ watch }) {
  console.log(watch);
  return (
    <header className="box-header">
      <h4>Movies You Watched</h4>
      <div className="movies-rec">
        <div className="minutes">
          <div>
            <span>#️⃣ </span>
            <span>{watch.count} Movies</span>
          </div>
        </div>
        <div>
          <span>⭐ </span>
          <span>{watch.rating}</span>
        </div>
        <div>
          <span>🌟 </span>
          <span>{watch.userRating}</span>
        </div>
        <div>
          <span>⏲️ </span>
          <span>{watch.minutes} min</span>
        </div>
      </div>
    </header>
  );
}

function Loader() {
  return (
    <div className="loader">
      <span>Loading . . .</span>
    </div>
  );
}

function Error({ message }) {
  return (
    <div className="error">
      <span>{message}</span>
    </div>
  );
}

function MoviesList({ movies, handleSelectedMovie }) {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <Movie
            key={movie.imdbID}
            movie={movie}
            handleSelectedMovie={handleSelectedMovie}
          />
        );
      })}
    </ul>
  );
}

function Movie({ movie, handleSelectedMovie }) {
  return (
    <li className="movie" onClick={() => handleSelectedMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={movie.Title} />
      <div className="movieDetails">
        <p>{movie.Title}</p>
        <span>🗓️ {movie.Year}</span>
      </div>
    </li>
  );
}

function Button({ children, click, className }) {
  return (
    <>
      <button onClick={click} className={className}>
        {children}
      </button>
    </>
  );
}

function MovieDetails({ movieId, handleAddMovie, setMovie, movie, onclose }) {
  // console.log(`From the movieDetails ${movieId}`);
  useEffect(
    function () {
      async function getSelectedMovie() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${movieId}`
        );
        const data = await res.json();
        setMovie(data);
      }

      getSelectedMovie();
    },
    [movieId, setMovie]
  );

  return (
    <>
      <Button className="btn-back" click={onclose}>
        &larr;
      </Button>
      <div className="movie-details-container">
        <div className="movie-details-header">
          <img src={movie.Poster} alt={movie.Title} />
          <div className="movie-details-title">
            <h3>{movie.Title}</h3>
            <p>
              {movie.Released} - {movie.Runtime}
            </p>
            <p>{movie.Genre}</p>
            <p>
              {" "}
              ⭐ ImdbRating:{" "}
              {movie.imdbRating === "N/A" ? "N/A" : movie.imdbRating}
            </p>
          </div>
        </div>
        <div className="movie-rating-box">
          <p>Rating Stars</p>
          <Button
            className="btn-add"
            click={() => handleAddMovie(movie.imdbID)}
          >
            Add Movie
          </Button>
        </div>
        <div className="movie-details-desc">
          <p>{movie.Plot}</p>
          <p className="actors">Staring: {movie.Actors}</p>
          <p className="director">Director: {movie.Director}</p>
        </div>
      </div>
    </>
  );
}

function WatchedListMovies({ watchedList, handleMovieDelete }) {
  // console.log(watchedList);

  return (
    <>
      <ul>
        {watchedList.map((movie) => (
          <WatchedMovie
            key={movie.imdbID}
            movie={movie}
            handleMovieDelete={handleMovieDelete}
          />
        ))}
      </ul>
    </>
  );
}

function WatchedMovie({ movie, handleMovieDelete }) {
  return (
    <li className="watched-movie">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="watched-movie-details">
        <h5>{movie.Title}</h5>
        <div className="watched-movie-props">
          <div>
            <div>
              <span>⭐ {movie.imdbRating}</span>
            </div>
            <div>🌟 x.x</div>
            <div>⏲️ {movie.Runtime}</div>
          </div>
          <Button
            className="btn-delete"
            click={() => handleMovieDelete(movie.imdbID)}
          >
            x
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MainApp;
