import React from 'react'
import '../styles/style.css';


export const MovieCard = ({ title, image, release }) => {
  const fallbackImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className='movie-card'>
      <img className='movie-card-image' src={image ? `${posterBaseUrl}${image}` : fallbackImage} alt={title} />
      <div className='movie-card-text'>
        <h1>{title}</h1>
        <p>{release}</p>
      </div>

    </div>
  )

}
