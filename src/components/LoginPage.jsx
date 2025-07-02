import Header from './Header'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LANDINGPAGE_BG_IMAGE, LOGIN_API } from '../utils/constants'

const LoginPage = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [error, setError] = useState('invalid username')
    const [reenterPassword, setReenterPassword] = useState('')
    const [checkboxClicked, setCheckboxClicked] = useState(false)
    const [isSignUpForm, setIsSignUpForm] = useState(false)

    const validateAndSendFormData = async () => {
        if (userName.length === 0) {
            setError('Email or username cannot be empty')
            return
        }
        if (password.length < 8) {
            setError('Password should be atleast 8 charecters')
            return
        }
        if (isSignUpForm) {
            if (password !== reenterPassword) {
                setError('Passwords do not match')
            }
            if (fullName.length === 0) {
                setError('Name cannot be empty')
            }
        } else {
            // make a post api call with username and password
            const response = await fetch(LOGIN_API)
            const jsonResponse = await response.json()
            if (jsonResponse.ok === '200') {
                setError('')
                // Login successful
            } else {
                setError('Invalid UserName or Password')
            }
        }
    }

    return (
        <div
            className={`h-full bg-[url('${LANDINGPAGE_BG_IMAGE}')] bg-cover bg-center bg-no-repeat`}
        >
            <Header />
            <div className="h-[90vh] flex justify-center items-center">
                <div className="pt-10 pb-20 w-1/3 border border-white rounded-lg bg-black/70 mb-44 flex flex-col justify-center items-center">
                    <h1 className="text-white font-bold mb-8 text-2xl ">
                        {isSignUpForm ? 'Sign Up' : 'Log In'}
                    </h1>
                    <input
                        type="email"
                        // className="border border-white mx-auto mb-8 p-1.5 w-[70%] rounded-lg"
                        className="p-2 border border-gray-300 rounded-lg mb-4 w-70 text-white placeholder-white-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeHolder="Email or Phone Number"
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                    />
                    <input
                        type="password"
                        className="p-2 border border-gray-300 rounded-lg mb-4 w-70 text-white placeholder-white-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeHolder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {isSignUpForm && (
                        <>
                            <input
                                type="password"
                                className="p-2 border border-gray-300 rounded-lg mb-4 w-70 text-white placeholder-white-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeHolder="Re-Enter Password"
                                value={reenterPassword}
                                onChange={(event) => setReenterPassword(event.target.value)}
                            />
                            <input
                                type="text"
                                className="p-2 border border-gray-300 rounded-lg mb-4 w-70 text-white placeholder-white-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeHolder="Enter Full Name"
                                value={fullName}
                                onChange={(event) => setFullName(event.target.value)}
                            />
                        </>
                    )}
                    <div className="w-70 mb-2">
                        <input
                            type="checkbox"
                            id="rememberPassowrd"
                            checked={checkboxClicked}
                            className="mr-2"
                            onClick={() => setCheckboxClicked(!checkboxClicked)}
                        />
                        <label htmlFor="rememberPassword" className="text-sm text-gray-400">
                            Remember Me
                        </label>
                    </div>

                    <button
                        className="bg-red-700 p-2 rounded-md text-white text-lg w-70 font-bold cursor-pointer mt-4"
                        onClick={validateAndSendFormData}
                    >
                        {isSignUpForm ? 'Sign Up' : 'Log In'}
                    </button>

                    {error.length > 0 && <p className="text-sm text-red-700 w-70">*{error}</p>}
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
