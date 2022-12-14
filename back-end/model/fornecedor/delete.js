module.exports = payload => {

    query = `

        BEGIN TRAN
        UPDATE FORNECEDOR SET
            ISACTIVE = 0
        WHERE
            ID_FORNECEDOR = ${payload.data.id_fornecedor}
        IF @@ERRO = 0
        BEGIN
            SELECT ${payload.data.id_fornecedor} AS ID_FORNECEDOR
            COMMIT TRAN
        END
        ELSE
        BEGIN
            SELECT 0 AS ID_FORNECEDOR
            ROLLBACK TRAN
        END

`

    return query

}

/*
CREATE TABLE [dbo].[fornecedor] (
    [id_fornecedor] INT      IDENTITY (1, 1) NOT NULL,
    [id_assinante]  INT      NOT NULL,
    [crdate]        DATETIME NOT NULL,
    [isactive]      BIT      NOT NULL
);
*/