const sql = require('mssql')
    , conn = require('../db/conn')['db_08310130000132']

function controller(payload) {

    let entidade = payload.entidade
        , cruds = payload.cruds
        , model = require(`../model/${entidade}/${cruds}`)(payload)

    sql.connect(conn).then(() => {
        return sql.query(model)
    })
        .then(result => {
            sql.close();
            return result
        })
        .catch(err => {
            sql.close();
            console.log(err)
            return err
        })

    sql.on('error', err => {
        return err
    })

}

module.exports = controller