

const express = require('express');
const server = express();
const passport = require('../config/passportSamlConfig');

server.use(passport.initialize());


server.get('/', (req, res) => {
    res.send('Helo');
})


server.get(
    '/sso/login', 
    passport.authenticate(
        'saml',
        {
            successRedirect: '/',
            failureRedirect: '/login',
        }
    )
);

server.post( '/login/callback', (req, res) => {
        console.log('/login/callback', req);
        res.redirect('/');
    }
)



server.listen(3000, () => console.log('Server running on 3000'));