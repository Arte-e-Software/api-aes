const sql = require('mssql')
    , db = require('../db/conn/index')['aes'] // mudar para sosminhacasa //

module.exports = (id_respondente, resposta) => {

    let strQuery = ''

    for (let i = 0; i < resposta.length; i++) {

        strQuery = require('../models/grava-resposta')(id_respondente, resposta[i].id_pergunta, resposta[i].resposta)

        sql.connect(db).then(() => { return sql.query(strQuery) })

            .then(result => {

                sql.close();

            })

            .catch(err => {

                sql.close();

            })

        sql.on('error', err => {

            console.log(err)

        })

    }



}