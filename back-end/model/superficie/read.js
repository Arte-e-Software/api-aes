module.exports = payload => {

    let data = payload.data
        , erro = data.id_superficie === '' || data.id_superficie === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível ler SUPERFICIE, dados incompletos' as mensagem`

    if (!erro) {

        // pensar em trabalhar o EOF aqui #issue

        query = `
        
        SELECT
            0 as erro,
            'SUPERFICIE localizada com sucesso.' as mensagem,
            id_superficie,
            id_material,
            nome,
            crdate,
            isactive 
        FROM
            SUPERFICIE
        WHERE
            id_superficie = ${data.id_superficie}

`

    }

    return query

}

/*
id_superficie
id_material
nome
crdate
isactive
*/