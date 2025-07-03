import VideoPlayBack from './VideoPlayBack'
import { useSelector } from 'react-redux'

const VideoPlayBackContainer = () => {
    const discoverMovies = useSelector((store) => store.movies?.discoverMovies)
    if (!discoverMovies) return
    const mainMovie = discoverMovies[0]
    const { original_title, overview, id } = mainMovie
    return (
        <div className="relative">
            <VideoPlayBack movieId={id} />

            <div className="absolute top-2 text-white z-10 max-w-xl bg-gradient-to-r from-black  p-16 pt-60 h-4/5 w-screen">
                <h1 className="text-4xl font-bold drop-shadow-lg">{original_title}</h1>
                <p className="mt-4 text-lg drop-shadow-md font-semibold">{overview}</p>
                <div className="mt-6 flex gap-4">
                    <button className="bg-white text-black px-8 py-2 rounded hover:bg-gray-200 cursor-pointer">
                        Play
                    </button>
                    <button className=" text-white px-4 py-2 rounded hover:bg-gray-600 bg-opacity-20">
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayBackContainer
