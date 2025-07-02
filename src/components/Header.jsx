import { APP_LOGO } from '../utils/constants'
import LoginButton from './LoginButton'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="h-[10vh] flex justify-between items-center px-32 pt-4 bg-gradient-to-b from-black">
            <Link to="/" className="h-full">
                <img className="h-full w-auto" alt="logo" src={APP_LOGO} />
            </Link>
            <div className="pr-9">
                <select
                    id="languageOptions"
                    name="languageOptions"
                    className="text-white border border-white px-6 py-2  rounded-md mr-8"
                >
                    <option value="English"> English</option>
                </select>
                <LoginButton />
            </div>
        </nav>
    )
}

export default Header
