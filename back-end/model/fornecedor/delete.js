module.exports = payload => {

    let data = payload.data
        , erro = data.id_fornecedor === '' || data.id_fornecedor === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível excluir a FORNECEDOR, dados incompletos.' as mensagem`

    if (!erro) {

        query = `
            
                BEGIN TRAN
                UPDATE FORNECEDOR SET ISACTIVE = 0 WHERE id_fornecedor = ${data.id_fornecedor}
                IF @@ERROR = 0
                BEGIN
                    SELECT 0 AS erro, 'FORNECEDOR excluído com sucesso.' as mensagem
                    COMMIT TRAN
                END
                ELSE
                BEGIN
                    SELECT 1 AS erro, 'Não foi possível excluir a FORNECEDOR, tente novamente.' as mensagem
                    ROLLBACK TRAN
                END
            `

    }

    return query

}