module.exports = payload => {

    let data = payload.data
        , erro = data.id_comprador === '' || data.id_comprador === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível ler COMPRADOR, dados incompletos' as mensagem`

    if (!erro) {

        // pensar em trabalhar o EOF aqui #issue

        query = `
        
        SELECT
            0 as erro,
            'Código material localizado com sucesso.' as mensagem,
            id_comprador,
            id_assinante,
            crdate,
            isactive
        FROM
            COMPRADOR
        WHERE
            id_comprador = ${data.id_comprador}

`

    }

    return query

}

/*
id_comprador
id_assinante
crdate
isactive
*/