import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { MovieCard } from "./MovieCard";
import '../styles/style.css'; 


export const MoviesList = () => {

  const api_key = import.meta.env.VITE_OPENDB_KEY
  console.log(api_key)
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false); 
      });
  }, []);



  return (
    <div className='movie-list'>
       {loading ? (
        <div>Loading...</div>
      ) : (
        movies.map((movie) => {
          console.log('movie console', movie)
          return (<NavLink key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard title={movie.title} image={movie.poster_path || ''} release={movie.release_date
} />
          </NavLink>)
        })
      )}
    </div>
  );

}
