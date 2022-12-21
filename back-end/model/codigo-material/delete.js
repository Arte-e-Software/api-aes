module.exports = payload => {

    let data = payload.data
        , erro = data.id_codigo_materia === '' || DataTransfer.id_codigo_materia === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível excluir o código material, dados incompletos.' as mensagem`

    if (!erro) {

        query = `
        
            BEGIN TRAN
            UPDATE CODIGO_MATERIAL SET ISACTIVE = O WHERE id_codigo_material = ${data.id_codigo_materia}
            IF @@ERROR = 0
            BEGIN
                SELECT 0 as erro, 'Código material exccluído com sucesso.' as mensagem
                COMMIT TRAN
            END
            ELSE
            BEGIN
                SELECT 1 AS erro, 'Não foi possível excluir o código material. Tente novamente.' as mensagem
                ROLLBACK TRAN
            ELSE
        
       `

    }


    return query

}