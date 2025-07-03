import { APP_LOGO } from '../utils/constants'
import LoginButton from './LoginButton'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { toggleAI } from '../redux/aiSlice'

const Header = () => {
    const user = useSelector((store) => store.user)
    const dispatch = useDispatch()

    return (
        <nav
            className={
                'fixed top-0 left-0 right-0 h-20 flex justify-between items-center px-4 md:px-16 lg:px-32 pt-4 to-transparent z-20 bg-gradient-to-b from-black'
            }
        >
            <Link to="/" className="h-full">
                <img className="h-full w-auto" alt="logo" src={APP_LOGO} />
            </Link>

            <div className="flex items-center gap-4 pr-4">
                {user !== null && (
                    <>
                        <button
                            className="cursor-pointer relative group"
                            onClick={() => dispatch(toggleAI())}
                        >
                            <GiArtificialIntelligence size={30} className="text-red-500" />
                            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-xs text-white w-40 bg-gray rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                AI Assistant
                            </span>
                        </button>

                        <span className="text-white font-bold">{user.displayName}</span>
                    </>
                )}
                <select
                    id="languageOptions"
                    name="languageOptions"
                    className="text-white border border-white px-4 py-2 rounded-lg"
                >
                    <option value="English">English</option>
                </select>
                <LoginButton />
            </div>
        </nav>
    )
}

export default Header
