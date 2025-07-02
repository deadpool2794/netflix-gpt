import { LANDINGPAGE_BG_IMAGE } from '../utils/constants'
import Header from './Header'
import LoginButton from './LoginButton'

const LandingPage = () => {
    return (
        <div className={`bg-[url('${LANDINGPAGE_BG_IMAGE}')] bg-cover bg-center bg-no-repeat`}>
            <Header />
            <div className="text-white flex justify-center items-center h-[90vh]  m-auto">
                <div className="text-center space-y-4 w-5/12">
                    <h1 className="text-5xl font-bold mb-4">
                        Unlimited movies, TV shows, and more
                    </h1>
                    <p className="text-xl font-bold mb-8">Starts at $0.00. Cancel anytime.</p>
                    <LoginButton />
                </div>
            </div>
        </div>
    )
}

export default LandingPage
