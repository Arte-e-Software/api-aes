module.exports = payload => {

    let data = payload.data
        , erro = data.id_largura === '' || data.id_largura === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível ler LARGURA, dados incompletos' as mensagem`

    if (!erro) {

        // pensar em trabalhar o EOF aqui #issue

        query = `
        
        SELECT
            0 as erro,
            'LARGURA localizada com sucesso.' as mensagem,
            id_largura,
            id_material,
            unidade,
            valor,
            crdate,
            isactive
        FROM
            LARGURA
        WHERE
            id_largura = ${data.id_largura}

`

    }

    return query

}

/*
id_largura
id_material
unidade
valor
crdate
isactive
*/