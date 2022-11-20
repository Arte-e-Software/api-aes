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
            let sysadminid = result.recordset[0].sysadminid
            res.redirect('/admin')

        })
        .catch(err => {
            sql.close()
            res.status(402).send({ message: 'Dados incorretos' })

        })
    sql.on('error', err => {
        res.stats(402).send({ message: 'Erro no login' })
    })

})