import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { signOutUser } from '../redux/userSlice'

const LoginButton = () => {
    const navigate = useNavigate()
    const user = useSelector((store) => store.user)
    const dispatch = useDispatch()

    const handleButtonClick = () => {
        if (user !== null) {
            signOut(auth)
                .then(() => {
                    dispatch(signOutUser({}))
                    navigate('/')
                })
                .catch((error) => {
                    navigate('/error')
                })
        } else {
            navigate('/login')
        }
    }

    return (
        <button
            onClick={handleButtonClick}
            className="bg-red-700 p-2 rounded-md text-white mr-4 text-lg w-24 font-bold cursor-pointer"
        >
            {user === null ? 'Log In' : 'Log Out'}
        </button>
    )
}

export default LoginButton
