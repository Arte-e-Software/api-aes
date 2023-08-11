'use strict'

const express = require('express')
    , path = require('path')
    , helmet = require('helmet')
    , app = express()
    , cors = require('cors')

// config dotenv file
require('dotenv').config({ path: process.env.NODE_ENV === 'dev' ? '.dev.env' : '.env' })

app.use(cors());

// config contentSecurityPolicy
app.use(
    helmet.contentSecurityPolicy({
        useDefaults: true,
        directives: {
            "script-src": ["'self'", "'unsafe-inline'", "'http://localhost'"]
        }
    })
)

app.use(helmet())
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

// rotas api
app.all('/sosminhacasa/pesquisa/respondente', cors('http://localhost'), require('./back-end/routes/sosminhacasa/pesquisa/respondente'))
app.all('/sosminhacasa/pesquisa/resposta', cors('http://localhost'), require('./back-end/routes/sosminhacasa/pesquisa/resposta'))


// ISSUE ***
// *** Tratar erros ***

module.exports = app