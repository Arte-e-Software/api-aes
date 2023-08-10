const express = require('express')
    , router = express.Router()

module.exports = router.all('/sosminhacasa/pesquisa', (req, res) => {

    let respondente = req.body.respondente
        , pergunta = req.body.pergunta
        , nome = respondente.nome
        , email = respondente.email
        , celular = respondente.celular
        , erro = respondente === undefined || pergunta === undefined


    if (!erro) {

        // gravo no banco e retorno 200 ou 500


    } else {

        // retorno 500 'Dados incompletos'

    }

    console.log(nome, email, celular)
    console.log('pergunta', pergunta)

}) 