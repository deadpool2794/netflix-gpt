import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const BrowsePage = () => {
    const navigate = useNavigate()
    const user = useSelector((store) => store.user)
    useEffect(() => {
        if (user === null) {
            navigate('/login')
        }
    }, [])

    return (
        <>
            <Header />
            <div> BrowsePage</div>
        </>
    )
}

export default BrowsePage
