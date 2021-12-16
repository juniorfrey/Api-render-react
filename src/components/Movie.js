import React, { useContext } from 'react'
import UserContext from '../contexts/UseContext';

const Movie = ({movie}) => {
    
  const {user, toggleFavoriteMovieToUser} = useContext(UserContext);

    const imgStyle = {
        height: '260px',
        objectFit:'cover',
        //objectPosition:'top'
    }

    const isFavorite = user?.favoriteMovies?.includes(movie.id);
    
    return (
      <div className="card">
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="card-img-top"
          style={imgStyle}
        />
        <div className="card-body">
          <h4>{movie.title}</h4>
          <button
            className={`btn  ${
              isFavorite ? "btn-success" : "btn-outline-primary"
            }  btn-sm`}
            onClick={() => toggleFavoriteMovieToUser(movie.id)}
          >
            Favoritos
          </button>
        </div>
      </div>
    );
}

export default Movie
