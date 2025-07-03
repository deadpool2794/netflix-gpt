import { POSTER_URL } from '../utils/constants'

const MovieCard = ({ info }) => {
    const { poster_path } = info
    return (
        <>
            <img
                alt="movie-poster"
                src={`${POSTER_URL}${poster_path}`}
                className="w-5xl h-5xl object-cover pr-2"
            />
        </>
    )
}

export default MovieCard
