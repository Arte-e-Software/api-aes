module.exports = payload => {

    let data = payload.data
        , erro = data.id_usuario === '' || data.id_usuario === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível excluir a USUÁRIO, dados incompletos.' as mensagem`

    if (!erro) {

        query = `
            
                BEGIN TRAN
                UPDATE USUARIO SET ISACTIVE = 0 WHERE id_usuario = ${data.id_usuario}
                IF @@ERROR = 0
                BEGIN
                    SELECT 0 AS erro, 'USUÁRIO excluída com sucesso.' as mensagem
                    COMMIT TRAN
                END
                ELSE
                BEGIN
                    SELECT 1 AS erro, 'Não foi possível excluir a USUÁRIO, tente novamente.' as mensagem
                    ROLLBACK TRAN
                END
            `

    }

    return query

}