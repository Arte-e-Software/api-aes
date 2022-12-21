module.exports = payload => {

    let data = payload.data
        , erro = data.id_proposta === '' || data.id_proposta === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível ler PROPOSTA, dados incompletos' as mensagem`

    if (!erro) {

        // pensar em trabalhar o EOF aqui #issue

        query = `
        
        SELECT
            0 as erro,
            'PROPOSTA localizado com sucesso.' as mensagem,
            id_proposta,
            id_usuario,
            id_cotacao,
            observacao,
            crdate,
            isactive          
        FROM
            PROPOSTA
        WHERE
            id_proposta = ${data.id_proposta}

`

    }

    return query

}

/*
id_proposta
id_usuario
id_cotacao
observacao
crdate
isactive
*/