import Header from './Header'
import MoviesList from './MoviesList'
import useDiscoverMovies from '../hooks/useDiscoverMovies'
import VideoPlayBackContainer from './VideoPlayBackContainer'

const BrowsePage = () => {
    useDiscoverMovies()
    return (
        <>
            <Header />
            <VideoPlayBackContainer />
            <MoviesList />
        </>
    )
}

export default BrowsePage
