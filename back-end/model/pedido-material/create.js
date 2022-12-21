module.exports = payload => {

    let data = payload.data
        , erro = data.id_proposta_material === '' || data.id_proposta_material === undefined || data.id_usuario === '' || data.id_usuario === undefined || data.observacao === '' || data.observacao === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível gravar pedido material, dados incompletos'`

    if (!erro) {

        query = `
        
            BEGIN TRAN
INSERT INTO PEDIDO_MATERIAL VALUES 
(
    ${data.id_proposta_material},
    ${id_usuario},
    '${observacao}',
    GETDATE(),
    1
)
IF @@ERROR = 0
BEGIN

    SELECT 
        0 AS erro,
        'Pedido material cadastrado com sucesso.' as mensagem,
        @@IDENTITY AS id_pedido_material,
        id_proposta_material,
        id_usuario,
        observacao,
        crdate,
        isactive    
    FROM
        PEDIDO_MATERIAL
    WHERE
        id_pedido_material = @@IDENTITY
COMMIT TRAN
END
ELSE
BEGIN

    SELECT 1 AS erro, 'Não foi possível gracar pedido material. Tente novamente' as mensagem
    ROLLBACK TRAN

END

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