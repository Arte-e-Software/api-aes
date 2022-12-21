module.exports = payload => {

    let data = payload.data
        , erro = data.id_cotacao === '' || data.id_cotacao === undefined || data.id_codigo_material === '' || data.id_codigo_material === undefined || data.peso_desejado === '' || data.peso_desejado === undefined || data.prazo_de_entrega_desejado === '' || data.prazo_de_entrega_desejado === undefined
        , query = `SELECT 1 as erro, 'Erro ao cadastrar cotação-material, dados incompletos' as mensagem`

    if (!erro) {

        query = `
        
        BEGIN TRAN    
            INSERT INTO COTACAO_MATERIAL VALUES
            (
                ${data.id_cotacao},
                ${data.id_codigo_material},
                ${data.peso_desejado},
                '${data.prazo_de_entrega_desejado}',
                GETDATE(),
                1
            )
        
                IF @@ERROR = 0
                BEGIN

                SELECT 
                    0 AS erro, 
                    'Cotação material cadastrado com sucesso' as mensagem,
                    @@IDENTITY AS id_cotacao_material,
                    id_cotacao,
                    id_codigo_material,
                    peso_desejado,
                    prazo_de_entrega_desejado,
                    crdate,
                    isactive
                FROM 
                    COTACAO_MATERIAL
                WHERE
                    id_cotacao_material = @@IDENTITY

                COMMIT TRAN
                
                END
                ELSE
                BEGIN
                    
                SELECT

                    1 AS erro,
                    'Não foi possível cadastrar cotação material, tente novamente' as mensagem

                ROLLBACK TRAN
                END

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