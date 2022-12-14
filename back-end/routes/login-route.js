const express = require('express')
    , router = express.Router()
    , jwt = require('jsonwebtoken')
    , sha256 = require('crypto-js/sha256')
    , hex = require('crypto-js/enc-hex')

module.exports = router.post('/login', (req, res) => {

    const conn = require('../db/conn')
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

            if (result.recordset.length > 0) {

                let sysadminid = result.recordset[0].sysadminid
                    , token = jwt.sign({ sysadminid: sysadminid }, process.env.JWT_SECRET, { expiresIn: 60000 })

                res.json({ logged: true, message: 'Permissão de acesso concedida', token })

            } else {

                res.json({ logged: false, message: 'Dados incorretos', token: undefined })

            }

        })
        .catch(err => {

            sql.close();
            res.json({ logged: false, message: 'Erro ao conectar o servidor', token: undefined })

        })

    sql.on('error', err => {

        res.json({ logged: false, massage: 'Erro ao conectar o servidor', token: undefined })

    })

})