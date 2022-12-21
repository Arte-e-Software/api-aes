module.exports = payload => {

    let data = payload.data
        , erro = data.id_tipo === '' || data.id_tipo === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível ler TIPO, dados incompletos' as mensagem`

    if (!erro) {

        // pensar em trabalhar o EOF aqui #issue

        query = `
        
        SELECT
            0 as erro,
            'TIPO localizado com sucesso.' as mensagem,
            id_tipo,
            id_material,
            nome,
            crdate,
            isactive
        FROM
            TIPO
        WHERE
            id_tipo = ${data.id_tipo}

`

    }

    return query

}

/*
id_tipo
id_material
nome
crdate
isactive
*/