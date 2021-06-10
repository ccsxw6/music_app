import React from 'react'
import useAuth from './useAuth'

// STOPPED HERE

// passing in a code prop? 
export default function Dashboard({ code }) {
    const accessToken = useAuth(code)
    return (
        <div>
            {code}
        </div>
    )
}
