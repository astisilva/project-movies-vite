import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Movies } from './Movies';




export const MoviesList = () => {


  const api_key = ''
  const [movies, setMovies]= useState([])



  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error(err));
  }, [])


  return (
    <section className='movie-list'>
<div>MoviesList</div>
{movies.map((movie)=>(
<NavLink key={movie.id} to={``}>
    <Movies title={movie.title} image={movie.poster.path} />
</NavLink>
  
  ))
}
    </section>
    
  )
}
