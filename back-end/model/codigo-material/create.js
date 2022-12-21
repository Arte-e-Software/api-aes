modulo.exports = payload => {

    let data = payload.data
        , erro = data.id_comprador === '' || data.id_comprador === undefined || data.id_material === '' || data.id_material === undefined || data.codigo_material === '' || data.codigo_material === undefined || data.id_tipo === '' || data.id_tipo === undefined
        , query = `SELECT 1 as erro, 'Erro ao cadastrar assinante, dados incompletos' as mensagem`

    if (erro) { erro = data.id_forma === '' || data.id_forma === undefined || data.id_espessura === '' || data.id_espessura === undefined || data.id_largura === '' || data.id_largura === undefined || data.id_norma === '' || data.id_norma === undefined || data.id_revestimento === '' || data.id_revestimento === undefined || data.id_superficie === '' || data.id_superficie === undefined }

    if (!erro) {

        query = `
        
            BEGIN TRAN
            INSERT INTO CODIGO_MMATERIAL VALUES
            (
                ${data.id_comprador},
                ${data.id_material},
                '${data.codigo_material}',
                ${data.id_tipo},
                ${data.id_forma},
                ${data.id_comprimento},
                ${data.id_espessura},
                ${data.id_largura},
                ${data.id_norma},
                ${data.id_revestimento},
                ${data.id_superficie},
                GETDATE(),
                1
            )

            IF @@ERROR = 0
            BEGIN
                SELECT
                    0 as erro,
                    'Código de material gravado com sucesso',
                    @@IDENTITY AS id_codigo_material,
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
                    COMMIT TRAN
                FROM 
                    CODIGO_MMATERIAL
                WHERE
                    id_codigo_material = @@IDENTITY

            END
            ELSE
                SELECT 1 AS erro,'Erro ao gravar o código material, favor tentar novamente'
                ROLLBACK TRAN
            BEGIN
            END

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