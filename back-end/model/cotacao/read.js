module.exports = payload => {

    let data = payload.data
        , erro = data.id_cotacao === '' || data.id_cotacao === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível ler COTAÇAO, dados incompletos' as mensagem`

    if (!erro) {

        // pensar em trabalhar o EOF aqui #issue

        query = `
        
        SELECT
            0 as erro,
            'COTAÇÃO localizada com sucesso.' as mensagem,
            id_cotacao,
            id_usuario,
            observacao,
            crdate,
            isactive
        FROM
            COTACAO
        WHERE
            id_cotacao = ${data.id_cotacao}

`

    }

    return query

}

/*
id_cotacao
id_usuario
observacao
crdate
isactive
*/