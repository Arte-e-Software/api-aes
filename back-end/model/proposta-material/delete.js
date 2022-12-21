module.exports = payload => {

    let data = payload.data
        , erro = data.id_proposta_material === '' || data.id_proposta_material === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível excluir a PROPOSTA MATERIAL, dados incompletos.' as mensagem`

    if (!erro) {

        query = `
            
                BEGIN TRAN
                UPDATE PROPOSTA_MATERIAL SET ISACTIVE = 0 WHERE id_proposta_material = ${data.id_proposta_material}
                IF @@ERROR = 0
                BEGIN
                    SELECT 0 AS erro, 'PROPOSTA MATERIAL excluída com sucesso.' as mensagem
                    COMMIT TRAN
                END
                ELSE
                BEGIN
                    SELECT 1 AS erro, 'Não foi possível excluir a PROPOSTA MATERIAL, tente novamente.' as mensagem
                    ROLLBACK TRAN
                END
            `

    }

    return query

}