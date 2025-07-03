import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const MoviesList = ({ title }) => {
    const { discoverMovies } = useSelector((store) => store.movies)
    if (!discoverMovies) return
    return (
        <div className="flex flex-col">
            <h1 className="font-bold text-xl top-[-80%]  w-screen pl-16 py-2 z-10">{title}</h1>
            <div className="flex overflow-x-scroll whitespace-nowrap hide-scrollbar pl-4">
                {discoverMovies.map((eachMovie) => (
                    <MovieCard key={eachMovie.id} info={eachMovie} />
                ))}
            </div>
        </div>
    )
}

export default MoviesList
