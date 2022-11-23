'use strict'

const express = require('express')
    , path = require('path')
    , helmet = require('helmet')
    , app = express()
    , cookieParser = require('cookie-parser')
    , jwt = require('jsonwebtoken')

// Middleware de autenticação
function loginRequired(req, res, next) {
    const token = req.cookies.token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res
            .status(401)
            .redirect('/')
        req.sysadminid = decoded.sysadminid
        next()
    })
}

// config dotenv file
require('dotenv').config({ path: process.env.NODE_ENV === 'dev' ? '.dev.env' : '.env' })

// config contentSecurityPolicy
app.use(helmet())
app.use(
    helmet.contentSecurityPolicy({
        useDefaults: true,
        directives: {
            "script-src": ["'self'", "'unsafe-inline'"]
        }
    })
)
app.disable('x-powered-by')

// config express
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// configurando cookies
app.use(cookieParser())

// config client side
app.use(express.static(path.join(__dirname, '/front-end/')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '.', 'views'))

// rotas - res.render
app.get('/', require('./back-end/routes/home-route'))
app.get('/adm', loginRequired, require('./back-end/routes/adm-route'))
app.post('/login', require('./back-end/routes/login-route'))
app.get('/logout', require('./back-end/routes/logout-route'))
app.post('/recovery', require('./back-end/routes/recovery'))

// ISSUE ***
// *** Tratar erros ***

module.exports = app