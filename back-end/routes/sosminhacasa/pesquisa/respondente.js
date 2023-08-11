const express = require('express')
    , router = express.Router()
    , sql = require('mssql')
    , db = require('../../../db/conn/index')['aes'] // mudar para sosminhacasa //

module.exports = router.all('/sosminhacasa/pesquisa/respondente', (req, res) => {

    let nome = req.body.nome
        , email = req.body.email
        , celular = req.body.celular
        , erro = nome === undefined || email === undefined || celular === undefined


    if (!erro) {

        let query = require('../../../models/grava-respondente')(nome, email, celular)

        console.log(query)

        sql.connect(db).then(() => { return sql.query(query) })

            .then(result => {

                sql.close();
                let recordset = result.recordset
                let id_respondente = recordset[0].id_respondente
                if (id_respondente === 0) {

                    res.status(500).send({ erro: 'não foi possível gravar o respondente. Tente novamente' })

                } else {

                    res.status(200).send({ id_respondente: id_respondente, nome: nome })
                }

            })

            .catch(err => {

                sql.close();
                res.status(500).send(err)

            })

        sql.on('error', err => {

            res.status(500).send(err)

        })


    } else {

        res.status(500).send({ erro: 'Dados Incompletos' })

    }

}) 