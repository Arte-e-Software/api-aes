module.exports = payload => {

    let data = payload.data
        , erro = data.id_espessura === '' || data.id_espessura === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível excluir a ESPESSURA, dados incompletos.' as mensagem`

    if (!erro) {

        query = `
            
                BEGIN TRAN
                UPDATE ESPESSURA SET ISACTIVE = 0 WHERE id_espessura = ${data.id_espessura}
                IF @@ERROR = 0
                BEGIN
                    SELECT 0 AS erro, 'ESPESSURA excluída com sucesso.' as mensagem
                    COMMIT TRAN
                END
                ELSE
                BEGIN
                    SELECT 1 AS erro, 'Não foi possível excluir a ESPESSURA, tente novamente.' as mensagem
                    ROLLBACK TRAN
                END
            `

    }

    return query

}