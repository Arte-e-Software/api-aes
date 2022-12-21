module.exports = payload => {

    let data = payload.data
        , erro = data.id_superficie === '' || data.id_superficie === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível excluir a SUPERFÍCIE, dados incompletos.' as mensagem`

    if (!erro) {

        query = `
            
                BEGIN TRAN
                UPDATE SUPERFICIE SET ISACTIVE = 0 WHERE id_superficie = ${data.id_superficie}
                IF @@ERROR = 0
                BEGIN
                    SELECT 0 AS erro, 'SUPERFÍCIE excluída com sucesso.' as mensagem
                    COMMIT TRAN
                END
                ELSE
                BEGIN
                    SELECT 1 AS erro, 'Não foi possível excluir a SUPERFÍCIE, tente novamente.' as mensagem
                    ROLLBACK TRAN
                END
            `

    }

    return query

}