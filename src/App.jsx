import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import BrowsePage from './components/BrowsePage'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const App = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <LandingPage />,
        },
        {
            path: '/login',
            element: <LoginPage />,
        },
        {
            path: '/browse',
            element: <BrowsePage />,
        },
    ])

    return (
        <div className="w-screen h-screen bg-black">
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default App
