import Header from './Header'
import { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { signInUser } from '../redux/userSlice'

const LoginPage = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [error, setError] = useState('')
    const [reenterPassword, setReenterPassword] = useState('')
    const [checkboxClicked, setCheckboxClicked] = useState(false)
    const [isSignUpForm, setIsSignUpForm] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((store) => store.user)

    useEffect(() => {
        if (user !== null) {
            navigate('/browse')
        }
    }, [])

    const handleFormSubmission = () => {
        const isValidEmail = /^[\w.-]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(userName)
        if (!isValidEmail) {
            setError('Invalid Email Address')
            return
        }
        const isValidPassword = /^.{8,}$/.test(password)
        if (!isValidPassword) {
            setError('Invalid password')
            return
        }

        if (isSignUpForm) {
            if (fullName.length === 0) {
                setError('Name cannot be empty')
                return
            }

            if (password !== reenterPassword) {
                setError('Passwords do not match')
                return
            }
        }

        setError('')

        if (isSignUpForm) {
            createUserWithEmailAndPassword(auth, userName, password)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user

                    updateProfile(auth.currentUser, {
                        displayName: fullName,
                    })
                        .then(() => {
                            const { uid, email, displayName } = auth.currentUser
                            dispatch(signInUser({ uid, email, displayName }))
                            navigate('/browse')
                        })
                        .catch((error) => {
                            setError(error.message)
                        })
                })
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    setError(errorCode + errorMessage)
                })
        } else {
            signInWithEmailAndPassword(auth, userName, password)
                .then((userCredential) => {
                    // Signed in
                    const { uid, email, displayName } = userCredential.user

                    dispatch(signInUser({ uid, email, displayName }))
                    navigate('/browse')
                })
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    setError(errorCode + errorMessage)
                })
        }
    }

    return (
        <div
            className={`min-h-screen bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/NL-en-20250623-TRIFECTA-perspective_da65940d-6ee0-42e2-a0cf-16da07a8f7e7_large.jpg")] bg-cover bg-center bg-no-repeat`}
        >
            <Header />
            <div className="min-h-screen flex justify-center items-center">
                <div className="pt-10 pb-20 w-1/3 border border-white rounded-lg bg-black/70 mb-24 flex flex-col justify-center items-center">
                    <h1 className="text-white font-bold mb-8 text-2xl ">
                        {isSignUpForm ? 'Sign Up' : 'Log In'}
                    </h1>
                    <input
                        type="email"
                        // className="border border-white mx-auto mb-8 p-1.5 w-[70%] rounded-lg"
                        className="p-2 border border-gray-300 rounded-lg mb-4 w-70 text-white placeholder-white-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Email"
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                    />
                    <input
                        type="password"
                        className="p-2 border border-gray-300 rounded-lg mb-4 w-70 text-white placeholder-white-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {isSignUpForm && (
                        <>
                            <input
                                type="password"
                                className="p-2 border border-gray-300 rounded-lg mb-4 w-70 text-white placeholder-white-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Re-Enter Password"
                                value={reenterPassword}
                                onChange={(event) => setReenterPassword(event.target.value)}
                            />
                            <input
                                type="text"
                                className="p-2 border border-gray-300 rounded-lg mb-4 w-70 text-white placeholder-white-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter Full Name"
                                value={fullName}
                                onChange={(event) => setFullName(event.target.value)}
                            />
                        </>
                    )}
                    <div className="w-70 mb-2">
                        <input
                            type="checkbox"
                            id="rememberPassword"
                            checked={checkboxClicked}
                            className="mr-2"
                            onChange={() => setCheckboxClicked(!checkboxClicked)}
                        />
                        <label htmlFor="rememberPassword" className="text-sm text-gray-400">
                            Remember Me
                        </label>
                    </div>

                    <button
                        className="bg-red-700 p-2 rounded-md text-white text-lg w-70 font-bold cursor-pointer mt-4"
                        onClick={handleFormSubmission}
                    >
                        {isSignUpForm ? 'Sign Up' : 'Log In'}
                    </button>

                    {error.length > 0 && <p className="text-sm text-red-700 w-70 font-bold">*{error}</p>}
                    {isSignUpForm ? (
                        <p className="text-sm text-gray-400 w-70 mt-4">
                            Already have an account.{' '}
                            <span
                                className="font-bold text-blue-400 cursor-pointer"
                                onClick={() => setIsSignUpForm(!isSignUpForm)}
                            >
                                Log in{' '}
                            </span>
                        </p>
                    ) : (
                        <p className="text-sm text-gray-400 w-70 mt-4">
                            New User?{' '}
                            <span
                                className="font-bold text-blue-400 cursor-pointer"
                                onClick={() => setIsSignUpForm(true)}
                            >
                                Click Here{' '}
                            </span>
                            to Sign Up!
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LoginPage
