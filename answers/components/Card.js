import React from 'react'

function Card ({ movie={} }) {

  return (
    <article className="card column is-one-quarter">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={movie.Poster} alt={movie.title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <h1 className="title is-4">{movie.Title}</h1>
            <h2 className="subtitle is-6">{movie.Year}</h2>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Card
