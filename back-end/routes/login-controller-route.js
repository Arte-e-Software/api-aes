const express = require('express')
    , router = express.Router()
    , conn = require('../db/conn')
    , sql = require('mssql')
    , crypto = require('crypto')

module.exports = router.post('/login/controller', (req, res) => {

    let hashPW = crypto.createHash('sha256', process.env.HASH_SECRET)
        .update(req.body.pw)
        .digest('hex')

    let db = conn['db_08310130000132']
        , query = `
        
            SELECT
                sysadminid
                ,login
                ,pw   
                ,nome 
                ,email
                ,celular
                ,crdate
                ,isactive
            FROM
                sysadmin
            WHERE
                login ='${req.body.login}'
            AND
                pw = '${hashPW}'
            AND 
                isactive = 1

        `

    sql.connect(db).then(() => { return sql.query(query) })
        .then(result => {
            sql.close();

            let recordset = result.recordset[0]
                , sysadminid = recordset.sysadminid
                , login = recordset.login
                , pw = recordset.pw
                , nome = recordset.nome
                , email = recordset.email
                , celular = recordset.celular
                , crdate = recordset.crdate
                , isactive = recordset.isactive

            res.status(200)

        })
        .catch(err => {

            sql.close()
            res.status(500).send({ message: 'Dados Incorretos' })

        })
    sql.on('error', err => {

        console.log(err)

    })

})