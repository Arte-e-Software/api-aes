module.exports = payload => {

    let data = payload.data
        , erro = data.id_comprimento === '' || data.id_comprimento === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível excluir o comprimento. Dados imcompletos.' as mensagem`

    if (!erro) {

        query = `
        
            BEGIN TRAN
            UPDATE COMPRIMENTO SET ISACTIVE = 0 WHERE id_comprimento = ${data.id_comprimento}
            IF @@ERROR = 0
            BEGIN
                SELECT 0 AS erro, 'Comprimento excluído com sucesso.' as mensagem
                COMMIT TRAN
            END
            ELSE
            BEGIN
                SELECT 1 AS erro, 'Não foi possível excluir o comprimento, tente novamente' as mensagem
                ROLLBACK TRAN
            END


        `

    }

    return query

}