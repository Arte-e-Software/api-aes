module.exports = payload => {

    query = `

        BEGIN TRAN
        UPDATE COMPRADOR SET
           ID_ASSINANTE = ${payload.data.id_assinante}
        WHERE
            ID_COMPRADOR = ${payload.data.id_comprador}
        IF @@ERRO = 0
        BEGIN
            SELECT ${payload.data.id_comprador} AS ID_COMPRADOR
            COMMIT TRAN
        END
        ELSE
        BEGIN
            SELECT 0 AS ID_COMPRADOR
            ROLLBACK TRAN
        END

`

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
