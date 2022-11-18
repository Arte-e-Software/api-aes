'use strict'

const express = require('express')
    , path = require('path')
    , helmet = require('helmet')
    , app = express()
    , cookieParser = require('cookie-parser')

app.use(cookieParser())

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

// config client side
app.use(express.static(path.join(__dirname, '/front-end/')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '.', 'views'))

// rotas - res.render
app.get('/', require('./back-end/routes/home-route'))
app.get('/login', require('./back-end/routes/login-route'))
app.get('/admin', require('./back-end/routes/admin-route'))
app.get('/dashboard', require('./back-end/routes/dashboard-route'))
app.post('/login/controller', require('./back-end/routes/login-controller-route'))

app.all('/api', require('./back-end/routes/api-route'))

// ISSUE ***
// *** Tratar erros ***

module.exports = app