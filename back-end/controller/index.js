const sql = require('mssql')
    , conn = require('../db/conn')['db_08310130000132']

function controller(payload, res) {

    let entidade = payload.entidade
        , cruds = payload.cruds
        , model = require(`../model/${entidade}/${cruds}`)(payload)

    sql.connect(conn).then(() => {
        return sql.query(model)
    })
        .then(result => {
            sql.close();
            res.json(result)
        })
        .catch(err => {
            sql.close();
            console.log(err)
            res.json({ erro: 1, mensagem: "Ocorreu um erro ao tentar gravar o registro. Tente novamente." })
        })

    sql.on('error', err => {
        console.log(err)
        res.json({ erro: 1, mensagem: "Não foi possível conectar o banco de dados. Tente novamente." })
    })

}

module.exports = controller