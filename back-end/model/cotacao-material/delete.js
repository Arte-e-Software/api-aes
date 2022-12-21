module.exports = payload => {

    let data = payload.data
        , erro = data.id_cotacao_material === '' || data.id_cotacao_material === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível excluir a cotação material, dados incompletos.' as mensagem`

    if (!erro) {

        query = `
            
                BEGIN TRAN
                UPDATE COTACAO_MATERIAL SET ISACTIVE = 0 WHERE id_cotacao_material = ${data.id_cotacao_material}
                IF @@ERROR = 0
                BEGIN
                    SELECT 0 AS erro, 'Cotação material excluída com sucesso.' as mensagem
                    COMMIT TRAN
                END
                ELSE
                BEGIN
                    SELECT 1 AS erro, 'Não foi possível excluir a cotaçã material, tente novamente.' as mensagem
                    ROLLBACK TRAN
                END
            `

    }

    return query

}