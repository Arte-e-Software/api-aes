module.exports = payload => {

    let data = payload.data
        , erro = data.id_fornecedor === '' || data.id_fornecedor === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível ler FORNECEDOR, dados incompletos' as mensagem`

    if (!erro) {

        // pensar em trabalhar o EOF aqui #issue

        query = `
        
        SELECT
            0 as erro,
            'FORNECEDOR localizada com sucesso.' as mensagem,
            id_fornecedor,
            id_assinante,
            crdate,
            isactive
        FROM
            FORNECEDOR
        WHERE
            id_fornecedor = ${data.id_fornecedor}

`

    }

    return query

}

/*
id_fornecedor
id_assinante
crdate
isactive
*/