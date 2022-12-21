module.exports = payload => {

    let data = payload.data
        , erro = data.id_token === '' || data.id_token === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível excluir a TOKEN, dados incompletos.' as mensagem`

    if (!erro) {

        query = `
            
                BEGIN TRAN
                UPDATE TOKEN SET ISACTIVE = 0 WHERE id_token = ${data.id_token}
                IF @@ERROR = 0
                BEGIN
                    SELECT 0 AS erro, 'TOKEN excluído com sucesso.' as mensagem
                    COMMIT TRAN
                END
                ELSE
                BEGIN
                    SELECT 1 AS erro, 'Não foi possível excluir a TOKEN, tente novamente.' as mensagem
                    ROLLBACK TRAN
                END
            `

    }

    return query

}