import { Link } from 'react-router-dom'

const LoginButton = () => {
    return (
        <Link to="/login">
            <button className="bg-red-700 p-2 rounded-md text-white mr-4 text-lg w-24 font-bold cursor-pointer">
                Log In
            </button>
        </Link>
    )
}

export default LoginButton
