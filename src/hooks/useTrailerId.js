import { useDispatch, useSelector } from 'react-redux'
import { addTrailerId } from '../redux/movieSlice'
import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'

const useTrailerId = (movieId) => {
    const dispatch = useDispatch()

    const getMovieTrailer = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)
        const { results } = await response.json()
        const trailers = results.filter((eachResult) => eachResult.type === 'Trailer')
        const trailer = trailers.length === 0 ? results[0] : trailers[0]
        dispatch(addTrailerId(trailer.key))
    }

    useEffect(() => {
        getMovieTrailer()
    }, [])
}

export default useTrailerId
