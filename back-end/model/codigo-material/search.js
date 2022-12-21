module.exports = payload => {

    let data = payload.data
        , erro = data.pesquisa === '' || data.pesquisa === undefined
        , query = `SELECT 1 as erro, 'Não foi possível realizar a pesquisa. Dados incompletos.' as mensagem`

    if (!erro) {

        query = `
        
        SELECT
            0 as erro,
            'Pesquisa realizada com sucesso' as mensagem,
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
            codigo_material = '${data.pesquisa}'
        OR
            id_comprador = '${data.pesquisa}'
        OR
            id_material = '${data.pesquisa}'
        ORDER BY
            codigo_material

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