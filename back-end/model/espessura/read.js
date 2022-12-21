module.exports = payload => {

    let data = payload.data
        , erro = data.id_espessura === '' || data.id_espessura === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível ler ESPESSURA, dados incompletos' as mensagem`

    if (!erro) {

        // pensar em trabalhar o EOF aqui #issue

        query = `
        
        SELECT
            0 as erro,
            'ESPESSURA localizada com sucesso.' as mensagem,
            id_espessura,
            id_material,
            unidade,
            valor,
            crdate,
            isactive
        FROM
            ESPESSURA
        WHERE
            id_espessura = ${data.id_espessura}

`

    }

    return query

}

/*
id_espessura
id_material
unidade
valor
crdate
isactive
*/