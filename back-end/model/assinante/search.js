module.exports = payload => {

    let data = payload.data
        , erro = data.pesquisa === '' || data.pesquisa === undefined
        , query = `SELECT 1 as erro, 'Não foi possível realizar a pesquisa. Dados incompletos.' as mensagem`

    if (!erro) {

        query = `
        
        SELECT
            0 as erro,
            'Pesquisa realizada com sucesso' as mensagem,
            id_assinante,
            nome,
            cnpj,
            cep,
            cidade,
            uf,
            crdate,
            isactive
        FROM
            ASSINANTE
        WHERE
            nome like '%${data.pesquisa}%'
        OR
            cnpj = '${data.pesquisa}'
        ORDER BY
            nome

`

    }

    return query

}

/*
id_assinante
nome
cnpj
cep
cidade
uf
crdate
isactive
*/