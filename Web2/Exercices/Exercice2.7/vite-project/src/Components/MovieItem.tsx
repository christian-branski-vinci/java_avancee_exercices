import { useState } from "react";
import type { Movie } from "../types";
interface MovieItemProps {
    movie: Movie
}
const MovieItem=({movie}: MovieItemProps)=>{
    const [isVisible, setIsVisible]= useState(false);
    return(
         <li onClick={() => setIsVisible(!isVisible)}>
      <p>
        <strong>{movie.title}</strong> - Réalisateur : {movie.director}
      </p>
      <p>{isVisible ? <i>{movie.description}</i> : null}</p>
    </li>
    )
}

export default MovieItem;