import type { Movie } from "../../type";

interface movieProps{
    movies: Movie[];
}

const MovieMenu = ({movies} : movieProps)=>{
    return(
    <table className="MovieMenu">
        <thead>
            <tr>
                <th>title</th>
                <th>director</th>
                <th>duration</th>
                <th>url</th>
                <th>description</th>
                <th>budget</th>
            </tr>
        </thead>
        <tbody>
            {movies.map((movie)=>(
            <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.director}</td>
                <td>{movie.duration}</td>
                <td>{movie.url}</td>
                <td>{movie.description}</td>
                <td>{movie.budget}</td>
            </tr>
            ))}
        </tbody>
    </table>
)
}

export default MovieMenu;