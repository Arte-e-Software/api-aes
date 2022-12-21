module.exports = payload => {

    let data = payload.data
        , erro = data.id_forma === '' || data.id_forma === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível excluir a FORMA, dados incompletos.' as mensagem`

    if (!erro) {

        query = `
            
                BEGIN TRAN
                UPDATE FORMA SET ISACTIVE = 0 WHERE id_forma = ${data.id_forma}
                IF @@ERROR = 0
                BEGIN
                    SELECT 0 AS erro, 'FORMA excluída com sucesso.' as mensagem
                    COMMIT TRAN
                END
                ELSE
                BEGIN
                    SELECT 1 AS erro, 'Não foi possível excluir a FORMA, tente novamente.' as mensagem
                    ROLLBACK TRAN
                END
            `

    }

    return query

}