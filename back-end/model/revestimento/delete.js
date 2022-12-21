module.exports = payload => {

    let data = payload.data
        , erro = data.id_revestimento === '' || data.id_revestimento === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível excluir a REVESTIMENTO, dados incompletos.' as mensagem`

    if (!erro) {

        query = `
            
                BEGIN TRAN
                UPDATE REVESTIMENTO SET ISACTIVE = 0 WHERE id_revestimento = ${data.id_revestimento}
                IF @@ERROR = 0
                BEGIN
                    SELECT 0 AS erro, 'REVESTIMENTO excluído com sucesso.' as mensagem
                    COMMIT TRAN
                END
                ELSE
                BEGIN
                    SELECT 1 AS erro, 'Não foi possível excluir a REVESTIMENTO, tente novamente.' as mensagem
                    ROLLBACK TRAN
                END
            `

    }

    return query

}