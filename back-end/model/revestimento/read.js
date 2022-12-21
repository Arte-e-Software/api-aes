module.exports = payload => {

    let data = payload.data
        , erro = data.id_revestimento === '' || data.id_revestimento === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível ler REVESTIMENTO, dados incompletos' as mensagem`

    if (!erro) {

        // pensar em trabalhar o EOF aqui #issue

        query = `
        
        SELECT
            0 as erro,
            'REVESTIMENTO localizado com sucesso.' as mensagem,
            id_revestimento,
            id_material,
            nome,
            crdate,
            isactive   
        FROM
            REVESTIMENTO
        WHERE
            id_revestimento = ${data.id_revestimento}

`

    }

    return query

}

/*
id_revestimento
id_material
nome
crdate
isactive
*/