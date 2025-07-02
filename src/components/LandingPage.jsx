import Header from './Header'
import LoginButton from './LoginButton'

const LandingPage = () => {
    return (
        <div
            className={`bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/NL-en-20250623-TRIFECTA-perspective_da65940d-6ee0-42e2-a0cf-16da07a8f7e7_large.jpg")] bg-cover bg-center bg-no-repeat`}
        >
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
