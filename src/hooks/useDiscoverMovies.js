import { API_OPTIONS, DISCOVER_MOVIES_API } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addDiscoverMovies } from '../redux/movieSlice'
import { useEffect } from 'react'

const useDiscoverMovies = () => {
    const dispatch = useDispatch()

    const getMovies = async () => {
        const response = await fetch(DISCOVER_MOVIES_API, API_OPTIONS)
        const movies = await response.json()

        dispatch(addDiscoverMovies(movies.results))
    }

    useEffect(() => {
        getMovies()
    }, [])
}

export default useDiscoverMovies
