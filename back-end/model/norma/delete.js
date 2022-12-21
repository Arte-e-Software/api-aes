module.exports = payload => {

    let data = payload.data
        , erro = data.id_norma === '' || data.id_norma === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível excluir a NORMA, dados incompletos.' as mensagem`

    if (!erro) {

        query = `
            
                BEGIN TRAN
                UPDATE NORMA SET ISACTIVE = 0 WHERE id_norma = ${data.id_norma}
                IF @@ERROR = 0
                BEGIN
                    SELECT 0 AS erro, 'NORMA excluída com sucesso.' as mensagem
                    COMMIT TRAN
                END
                ELSE
                BEGIN
                    SELECT 1 AS erro, 'Não foi possível excluir a NORMA, tente novamente.' as mensagem
                    ROLLBACK TRAN
                END
            `

    }

    return query

}