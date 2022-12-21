module.exports = payload => {

    let data = payload.data
        , erro = data.id_norma === '' || data.id_norma === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível ler NORMA, dados incompletos' as mensagem`

    if (!erro) {

        // pensar em trabalhar o EOF aqui #issue

        query = `
        
        SELECT
            0 as erro,
            'NORMA localizada com sucesso.' as mensagem,
            id_norma,
            id_material,
            nome,
            crdate,
            isactive
        FROM
            NORMA
        WHERE
            id_norma = ${data.id_norma}

`

    }

    return query

}

/*
id_norma
id_material
nome
crdate
isactive
*/