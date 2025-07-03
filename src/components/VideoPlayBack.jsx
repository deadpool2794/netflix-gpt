import { YOUTUBE } from '../utils/constants'
import useTrailerId from '../hooks/useTrailerId'
import { useSelector } from 'react-redux'

const VideoPlayBack = ({ movieId }) => {
    useTrailerId(movieId)
    const trailerId = useSelector((store) => store.movies.trailerId)
    return (
        <div className="">
            <iframe
                className="aspect-video w-screen"
                src={`${YOUTUBE}${trailerId}?&mute=1&autoplay=1&loop=1&playlist=${trailerId}`}
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
        </div>
    )
}

export default VideoPlayBack
