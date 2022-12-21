module.exports = payload => {

    let data = payload.data
        , erro = data.id_codigo_material === '' || data.id_codigo_material === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível ler CÓDIGO MATERIAL, dados incompletos' as mensagem`

    if (!erro) {

        // pensar em trabalhar o EOF aqui #issue

        query = `
        
        SELECT
            0 as erro,
            'Código material localizado com sucesso.' as mensagem,
            id_codigo_material,
            id_comprador,
            id_material,
            codigo_material,
            id_tipo,
            id_forma,
            id_comprimento,
            id_espessura,
            id_largura,
            id_norma,
            id_revestimento,
            id_superficie,
            crdate,
            isactive
        FROM
            CODIGO_MATERIAL
        WHERE
            id_codigo_material = ${data.id_codigo_material}

`

    }

    return query

}

/*
id_codigo_material
id_comprador
id_material
codigo_material
id_tipo
id_forma
id_comprimento
id_espessura
id_largura
id_norma
id_revestimento
id_superficie
crdate
isactive
*/