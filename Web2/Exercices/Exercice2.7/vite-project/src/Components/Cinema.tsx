import MovieItem from "./MovieItem";

interface CinemaProps {
    name: string;
    movies: Movie[];
}
interface Movie {
    title: string;
    director: string;
}


const Cinema = (props: CinemaProps) => (
    <div>
        <h2>{props.name}</h2>
        <ul>
            {props.movies.map((movie) => (
                <MovieItem key={movie.title} movie={movie} ></MovieItem>
            ))}
        </ul>
    </div>
);


export default Cinema;