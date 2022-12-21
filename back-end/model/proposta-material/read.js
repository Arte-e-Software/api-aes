module.exports = payload => {

    let data = payload.data
        , erro = data.id_proposta_material === '' || data.id_proposta_material === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível ler PROPOSTA MATERIAL, dados incompletos' as mensagem`

    if (!erro) {

        // pensar em trabalhar o EOF aqui #issue

        query = `
        
        SELECT
            0 as erro,
            'PROPOSTA MAATERIAL localizada com sucesso.' as mensagem,
            id_proposta_material,
            id_proposta,
            id_codigo_material,
            prazo_de_entrega,
            preco,
            forma_de_pagamento,
            icms,
            ipi,
            preco_final,
            fob_cif,
            crdate,
            isactive      
        FROM
            PROPOSTA_MATERIAL
        WHERE
            id_proposta_material = ${data.id_proposta_material}

`

    }

    return query

}

/*
id_proposta_material
id_proposta
id_codigo_material
prazo_de_entrega
preco
forma_de_pagamento
icms
ipi
preco_final
fob_cif
crdate
isactive
*/