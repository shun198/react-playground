import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // function FetchMovieHandler() {
  //   fetch('https://swapi.dev/api/films/', {
  //     method: 'GET',
  //   })
  //     .then((response) => {
  //       console.log('responseの中身');
  //       console.log(response);
  //       console.log('-------');
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log('dataの中身');
  //       console.log(data);
  //       console.log('-------');
  //       const transformedMovies = data.results.map((movieData) => {
  //         console.log('movieDataの中身');
  //         console.log(movieData);
  //         console.log('-------');
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           openingText: movieData.opening_crawl,
  //           releaseDate: movieData.release_date,
  //         };
  //       });
  //       console.log('transformedMoviesの中身');
  //       console.log(transformedMovies);
  //       console.log('-------');
  //       setMovies(transformedMovies);
  //     });
  // }

  const FetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // API
      const response = await fetch('https://swapi.dev/api/films/', {
        method: 'GET',
      });
      // 間違ったAPI
      // const response = await fetch('https://swapi.dev/api/film/', {
      //   method: 'GET',
      // });
      if (response.status === 404) {
        throw new Error(
          '404 Not Found! Check if you are accessing the right url'
        );
      } else if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      console.log('responseの中身');
      console.log(response);
      console.log('-------');
      console.log('dataの中身');
      console.log(data);
      console.log('-------');
      const transformedMovies = data.results.map((movieData) => {
        console.log('movieDataの中身');
        console.log(movieData);
        console.log('-------');
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      console.log('transformedMoviesの中身');
      console.log(transformedMovies);
      console.log('-------');
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    FetchMovieHandler();
  }, [FetchMovieHandler]);

  let content = <p>No movies found</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={FetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
