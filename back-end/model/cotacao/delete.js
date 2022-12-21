module.exports = payload => {

    let data = payload.data
        , erro = data.id_cotacao === '' || data.id_cotacao === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível excluir a cotação, dados incompletos.' as mensagem`

    if (!erro) {

        query = `
            
                BEGIN TRAN
                UPDATE COTACAO SET ISACTIVE = 0 WHERE id_cotacao = ${data.id_cotacao}
                IF @@ERROR = 0
                BEGIN
                    SELECT 0 AS erro, 'Cotação excluída com sucesso.' as mensagem
                    COMMIT TRAN
                END
                ELSE
                BEGIN
                    SELECT 1 AS erro, 'Não foi possível excluir a cotação, tente novamente.' as mensagem
                    ROLLBACK TRAN
                END
            `

    }

    return query

}