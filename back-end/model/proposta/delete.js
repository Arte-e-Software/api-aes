module.exports = payload => {

    let data = payload.data
        , erro = data.id_proposta === '' || data.id_proposta === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível excluir a PROPOSTA, dados incompletos.' as mensagem`

    if (!erro) {

        query = `
            
                BEGIN TRAN
                UPDATE PROPOSTA SET ISACTIVE = 0 WHERE id_proposta = ${data.id_proposta}
                IF @@ERROR = 0
                BEGIN
                    SELECT 0 AS erro, 'PROPOSTA excluída com sucesso.' as mensagem
                    COMMIT TRAN
                END
                ELSE
                BEGIN
                    SELECT 1 AS erro, 'Não foi possível excluir a PROPOSTA, tente novamente.' as mensagem
                    ROLLBACK TRAN
                END
            `

    }

    return query

}