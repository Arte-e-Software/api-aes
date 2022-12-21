module.exports = payload => {

    let data = payload.data
        , erro = data.id_forma === '' || data.id_forma === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível ler FORMA, dados incompletos' as mensagem`

    if (!erro) {

        // pensar em trabalhar o EOF aqui #issue

        query = `
        
        SELECT
            0 as erro,
            'FORMA localizada com sucesso.' as mensagem,
            id_forma,
            id_material,
            nome,
            tem_comprimento,
            crdate,
            isactive
        FROM
            FORMA
        WHERE
            id_forma = ${data.id_forma}

`

    }

    return query

}

/*
id_forma
id_material
nome
tem_comprimento
crdate
isactive
*/