import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate()
    const user = useSelector((store) => store.user)

    useEffect(() => {
        if (user === null) {
            navigate('/login')
        }
    }, [])

    return children
}

export default ProtectedRoute
