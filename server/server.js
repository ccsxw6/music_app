const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')

const app = express()

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '8b945ef10ea24755b83ac50cede405a0',
        clientSecret: 'a77f115b3c6f4a69b9dabe7874608061'
    })
    spotifyApi
    // authorizing that we have a code, it's going to give us a refresh token so we can do the accessing and refreshing of our authentication
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      res.sendStatus(400)
    })
})

app.listen(3001)