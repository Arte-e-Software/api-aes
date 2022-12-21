module.exports = payload => {

    let data = payload.data
        , erro = data.id_largura === '' || data.id_largura === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível excluir a LARGURA, dados incompletos.' as mensagem`

    if (!erro) {

        query = `
            
                BEGIN TRAN
                UPDATE LARGURA SET ISACTIVE = 0 WHERE id_largura = ${data.id_largura}
                IF @@ERROR = 0
                BEGIN
                    SELECT 0 AS erro, 'LARGURA excluída com sucesso.' as mensagem
                    COMMIT TRAN
                END
                ELSE
                BEGIN
                    SELECT 1 AS erro, 'Não foi possível excluir a LARGURA, tente novamente.' as mensagem
                    ROLLBACK TRAN
                END
            `

    }

    return query

}