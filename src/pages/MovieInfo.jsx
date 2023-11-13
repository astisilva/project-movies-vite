import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import '../styles/style.css'; 






export const MovieInfo = () => {
  const api_key = import.meta.env.VITE_OPENDB_KEY
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState(null)

  useEffect(() => {
    // Fetch movie details based on the ID from the URL
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
      .then(response => response.json())
      .then(data => {
        console.log('Movie Details:', data);
        setMovieDetails(data);
      })
      .catch(error => console.error('Error fetching movie details:', error));
  }, [id, api_key]);

  if (!movieDetails) {
    return <div><h1>There are not details for this movie</h1></div>;
  }
 
  const backdropPath = 'https://image.tmdb.org/t/p/w1280';
  
  const formattedRating = movieDetails.vote_average.toFixed(1);


  return (
<div className="info-container">
  <NavBar />
  <img className='info-image' src={`${backdropPath}${movieDetails.backdrop_path}`} alt={movieDetails.title} />
  <div className="info-text">
    <img className='info-image-mini' src={`${backdropPath}${movieDetails.poster_path}`} alt={movieDetails.title} />
    <div className="info-details">
      <div className="title-and-rating">
        <h2>{movieDetails.title}</h2>
        <p className='rating'>⭐ {formattedRating} </p>
      </div>
      <p className='overview'>{movieDetails.overview}</p>
    </div>
  </div>
</div>
  )
}