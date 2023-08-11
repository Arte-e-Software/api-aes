const express = require('express')
    , router = express.Router()
    , sql = require('mssql')
    , db = require('../../../db/conn/index')['aes'] // mudar para sosminhacasa //

module.exports = router.all('/sosminhacasa/pesquisa/resposta', (req, res) => {

    let id_respondente = req.body.id_respondente
        , id_pergunta = req.body.id_pergunta
        , resposta = req.body.resposta
        , erro = id_respondente === '' || id_pergunta === '' || resposta === ''



    if (!erro) {

        let query = require('../../../models/grava-respondente')(nome, email, celular)

        console.log(query)

        sql.connect(db).then(() => { return sql.query(query) })

            .then(result => {

                sql.close();
                let recordset = result.recordset
                let id_resposta = recordset[0].id_resposta
                if (id_resposta === 0) {

                    res.status(500).send({ erro: 'não foi possível gravar o respondente. Tente novamente' })

                } else {

                    res.status(200).send({ id_resposta: id_resposta })
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