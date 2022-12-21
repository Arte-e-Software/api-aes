module.exports = payload => {

    let data = payload.data
        , erro = data.id_comprimento === '' || data.id_comprimento === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível ler COMPRIMENTO, dados incompletos' as mensagem`

    if (!erro) {

        // pensar em trabalhar o EOF aqui #issue

        query = `
        
        SELECT
            0 as erro,
            'Comprimento localizado com sucesso.' as mensagem,
            id_comprimento,
            id_material,
            unidade,
            valor,
            crdate,
            isactive
        FROM
            COMPRIMENTO
        WHERE
            id_comprimento = ${data.id_comprimento}

`

    }

    return query

}

/*
id_comprimento
id_material
unidade
valor
crdate
isactive
*/