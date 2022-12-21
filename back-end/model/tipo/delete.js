module.exports = payload => {

    let data = payload.data
        , erro = data.id_tipo === '' || data.id_tipo === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível excluir a TIPO, dados incompletos.' as mensagem`

    if (!erro) {

        query = `
            
                BEGIN TRAN
                UPDATE TIPO SET ISACTIVE = 0 WHERE id_tipo = ${data.id_tipo}
                IF @@ERROR = 0
                BEGIN
                    SELECT 0 AS erro, 'TIPO excluído com sucesso.' as mensagem
                    COMMIT TRAN
                END
                ELSE
                BEGIN
                    SELECT 1 AS erro, 'Não foi possível excluir a TIPO, tente novamente.' as mensagem
                    ROLLBACK TRAN
                END
            `

    }

    return query

}