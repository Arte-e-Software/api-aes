module.exports = payload => {

    let data = payload.data
        , erro = data.id_pedido_material === '' || data.id_pedido_material === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível ler PEDIDO MATERIAL, dados incompletos' as mensagem`

    if (!erro) {

        // pensar em trabalhar o EOF aqui #issue

        query = `
        
        SELECT
            0 as erro,
            'PEDIDO MATERIAL localizado com sucesso.' as mensagem,
            id_pedido_material,
            id_proposta_material,
            id_usuario,
            observacao,
            crdate,
            isactive            
        FROM
            PEDIDO_MATERIAL
        WHERE
            id_pedido_material = ${data.id_pedido_material}

`

    }

    return query

}

/*
id_pedido_material
id_proposta_material
id_usuario
observacao
crdate
isactive
*/