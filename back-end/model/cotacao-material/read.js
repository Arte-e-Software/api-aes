module.exports = payload => {

    let data = payload.data
        , erro = data.id_cotacao_material === '' || data.id_cotacao_material === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível ler COTAÇAO MATERIAL, dados incompletos' as mensagem`

    if (!erro) {

        // pensar em trabalhar o EOF aqui #issue

        query = `
        
        SELECT
            0 as erro,
            'COTAÇÃO MATERIAL localizada com sucesso.' as mensagem,
            id_cotacao_material,
            id_cotacao,
            id_codigo_material,
            peso_desejado,
            prazo_de_entrega_desejado,
            crdate,
            isactive
        FROM
            COTACAO_MATERIAL
        WHERE
            id_cotacao_material = ${data.id_cotacao_material}

`

    }

    return query

}

/*
id_cotacao_material
id_cotacao
id_codigo_material
peso_desejado
prazo_de_entrega_desejado
crdate
isactive
*/