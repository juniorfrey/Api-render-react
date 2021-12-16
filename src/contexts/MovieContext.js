import React, {createContext} from 'react'
import initialMovies from '../consts/initialMovies';


const MovieContext = createContext();
const MovieProvider = ({children}) => {

    const data = { movies: initialMovies }

    return (
        <MovieContext.Provider value={data}>
            {children}
        </MovieContext.Provider>
    )
}

export { MovieProvider };
export default MovieContext
