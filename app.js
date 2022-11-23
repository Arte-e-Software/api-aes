'use strict'

const express = require('express')
    , path = require('path')
    , helmet = require('helmet')
    , app = express()
    , jwt = require('jsonwebtoken')
    , sha256 = require('crypto-js/sha256')
    , hex = require('crypto-js/enc-hex')
    , cookieParser = require('cookie-parser')

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

app.get('/adm', verifyJWT, (req, res) => {

    res.render('pages/adm-view', { "title": 'Compra e venda de Aço' })

})

app.post('/login', (req, res) => {

    const conn = require('./back-end/db/conn')
        , sql = require('mssql')
        , login = req.body.login
        , pw = req.body.pw
        , db = conn['db_08310130000132']

    let hashpw = sha256(pw).toString(hex)
    let query = `SELECT sysadminid FROM sysadmin WHERE login = '${login}' AND pw = '${hashpw}' AND ISACTIVE = 1`

    sql.connect(db).then(() => {

        return sql.query(query)

    })
        .then(result => {

            sql.close();
            let sysadminid = result.recordset[0].sysadminid
                , token = jwt.sign({ sysadminid: sysadminid }, process.env.JWT_SECRET, { expiresIn: 60000 })
            res.json({ logged: true, message: 'Permissão de acesso concedida', token })

        })
        .catch(err => {

            console.log(err)
            sql.close();
            res.json({ logged: false, message: 'Dados incorretos', token: undefined })

        })

    sql.on('error', err => {

        res.json({ logged: false, massage: 'Erro ao conectar o servidor', token: undefined })

    })

})

function verifyJWT(req, res, next) {

    const token = req.cookies.token

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

        if (err) return res.status(401).end()

        req.sysadminid = decoded.sysadminid

        next()

    })

}

// ISSUE ***
// *** Tratar erros ***

module.exports = app