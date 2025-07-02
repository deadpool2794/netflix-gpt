import Browse from './components/Browse'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

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
    ])

    return (
        <div className="w-screen h-screen bg-black">
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default App
