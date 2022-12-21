module.exports = payload => {

    let data = payload.data
        , erro = data.id_pedido_material === '' || data.id_pedido_material === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível excluir a PEDDIDO MATERIAL, dados incompletos.' as mensagem`

    if (!erro) {

        query = `
            
                BEGIN TRAN
                UPDATE PEDDIDO_MATERIAL SET ISACTIVE = 0 WHERE id_pedido_material = ${data.id_pedido_material}
                IF @@ERROR = 0
                BEGIN
                    SELECT 0 AS erro, 'PEDDIDO MATERIAL excluído com sucesso.' as mensagem
                    COMMIT TRAN
                END
                ELSE
                BEGIN
                    SELECT 1 AS erro, 'Não foi possível excluir a PEDDIDO MATERIAL, tente novamente.' as mensagem
                    ROLLBACK TRAN
                END
            `

    }

    return query

}