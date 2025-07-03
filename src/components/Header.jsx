import { APP_LOGO } from '../utils/constants'
import LoginButton from './LoginButton'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const user = useSelector((store) => store.user)

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
                <select
                    id="languageOptions"
                    name="languageOptions"
                    className="text-white border border-white px-4 py-2 rounded-lg"
                >
                    <option value="English">English</option>
                </select>
                {user !== null && <span className="text-white font-bold">{user.displayName}</span>}
                <LoginButton />
            </div>
        </nav>
    )
}

export default Header
