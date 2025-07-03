import Header from './Header'
import MoviesList from './MoviesList'
import useDiscoverMovies from '../hooks/useDiscoverMovies'
import VideoPlayBackContainer from './VideoPlayBackContainer'
import AiSearchPage from './AiSearchPage'
import { useSelector } from 'react-redux'

const listTitles = ['Now Playing', 'Discover', 'Popular', 'Trending', 'Upcoming Movies']

const BrowsePage = () => {
    useDiscoverMovies()
    const aiView = useSelector((store) => store.ai)

    return (
        <div className="bg-black">
            <Header />
            {aiView ? (
                <AiSearchPage />
            ) : (
                <>
                    <VideoPlayBackContainer />
                    <div className="flex flex-col -mt-80 relative z-20">
                        {listTitles.map((eachTitle, index) => (
                            <MoviesList key={index} title={eachTitle} />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default BrowsePage
