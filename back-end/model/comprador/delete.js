module.exports = payload => {

    let data = payload.data
        , erro = data.id_comprador === '' || data.id_comprador === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível excluir o comprador. Dados incompletos' as mensagem`

    if (!erro) {

        query = `

        BEGIN TRAN
        UPDATE COMPRADOR SET ISACTIVE = 0 WHERE id_comprador = ${data.id_comprador}
        IF @@ERROR = 0
        BEGIN
            SELECT 0 AS erro, 'Comprador excluído com sucesso' as mensagem
            COMMIT TRAN
        END
        ELSE
        BEGIN
            SELECT 0 AS erro, 'Não foi possível excluir o comprador. Tente novamente.' as mensagem
            ROLLBACK TRAN
        END

`
    }


    return query

}

/*
CREATE TABLE[dbo].[comprador](
    [id_comprador] INT      IDENTITY(1, 1) NOT NULL,
    [id_assinante] INT      NOT NULL,
    [crdate]       DATETIME NOT NULL,
    [isactive]     BIT      NULL
);
*/