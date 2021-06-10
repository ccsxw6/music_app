/* eslint-disable no-unused-vars */
// instead of putting all the logic for our login authentication refresh tokens in our dashboard, we're creating a custom hook that does this authentication for us
import {useState, useEffect } from 'react'
import axios from 'axios'

                    // passing in the code that we need
export default function useAuth(code) {
    // we're going to store our access token, refresh token, and our expiresIn - what we're returning from our server when we login
    // we want state for all of those 
    const [ accessToken, setAccessToken] = useState()
    const [ refreshToken, setRefreshToken] = useState()
    const [ expiresIn, setExpiresIn] = useState()

    // in order to get the information for the state, we are using a useEffect
    useEffect(() => {
        // posting our code to this route, and it's going to call all the code on our server for us
    axios.post('http:localhost:3001/login,',
     { code }).then(res => {
         console.log(res.data)
     })
    },
    // call useEffect every time our code changes 
    [code])


    
}
