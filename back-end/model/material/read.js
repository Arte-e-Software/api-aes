module.exports = payload => {

    let data = payload.data
        , erro = data.id_material === '' || data.id_material === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível ler MATERIAL, dados incompletos' as mensagem`

    if (!erro) {

        // pensar em trabalhar o EOF aqui #issue

        query = `
        
        SELECT
            0 as erro,
            'MATERIAL localizada com sucesso.' as mensagem,
            id_material,
            nome,
            crdate,
            isactive
        FROM
            MATERIAL
        WHERE
            id_material = ${data.id_material}

`

    }

    return query

}

/*
id_material
nome
crdate
isactive
*/