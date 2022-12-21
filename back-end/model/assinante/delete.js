module.exports = payload => {

    let data = payload.data
        , erro = data.id_assinante === '' || data.id_assinante === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível excluir o assinante, dados incompletos' as mensagem`

    if (!erro) {

        query = `

        BEGIN TRAN
        UPDATE ASSINANTE SET
        ISACTIVE = 0
        WHERE
        ID_ASSINANTE = ${data.id_assinante}
        IF @@ERROR = 0
        BEGIN
            SELECT 0 AS erro, 'Assinante excluído com sucesso' as mensagem
            COMMIT TRAN
        END
        ELSE
        BEGIN
            SELECT 1 AS erro, 'Não foi possível excluir o assinante, tente novamente.' as mensagem
            ROLLBACK TRAN
        END

`

    }

    return query

}
