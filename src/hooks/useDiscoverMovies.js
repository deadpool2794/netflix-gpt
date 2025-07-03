import { API_OPTIONS, MOVIES_API } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {
    addDiscoverMovies,
    addPopularMovies,
    addTrendingMovies,
    addNowPlayingMovies,
} from '../redux/movieSlice'
import { useEffect } from 'react'

const useDiscoverMovies = () => {
    const dispatch = useDispatch()
    let pageNum = 1

    const getMovies = async () => {
        const discoverMoviesData = await fetch(MOVIES_API, API_OPTIONS)
        // const popularMoviesData = await fetch(MOVIES_API + pageNum++, API_OPTIONS)
        // const nowPlayingMoviesData = await fetch(MOVIES_API + pageNum++, API_OPTIONS)
        // const trendingMoviesData = await fetch(MOVIES_API + pageNum++, API_OPTIONS)

        const discoverMovies = await discoverMoviesData.json()
        // const popularMovies = await popularMoviesData.json()
        // const nowPlayingMovies = await nowPlayingMoviesData.json()
        // const trendingMovies = await trendingMoviesData.json()

        dispatch(addDiscoverMovies(discoverMovies.results))
        // dispatch(addPopularMovies(popularMovies.results))
        // dispatch(addNowPlayingMovies(nowPlayingMovies.results))
        // dispatch(addTrendingMovies(trendingMovies.results))
    }

    useEffect(() => {
        getMovies()
    }, [])
}

export default useDiscoverMovies
