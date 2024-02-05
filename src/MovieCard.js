import React from 'react'
import {Link} from 'react-router-dom'

const MovieCard = ({movie}) => {
  return (
    <div className='movie' style={{backgroundImage: `url(${movie.posterUrl})`}}>
        <h2 className='movie__title'>{movie.title}</h2>
        <span className='movie__description'>{movie.description}</span>
        <div className="movie__imdb">
            <div className="movie__rating">
                <i className="fa-solid fa-star" style={{color: "#FFD43B"}}>{movie.rating}</i>
            </div>
            <Link to={`/trailer/${movie.id}`} className='movie__imdb-button' >Trailer</Link>
        </div>
    </div>
  )
}

export default MovieCard