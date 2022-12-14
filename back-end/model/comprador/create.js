module.exports = payload => {

    query = `

        DECLARE @ID_COMPRADOR INT
        BEGIN TRAN
        INSERT INTO COMPRADOR VALUES
        (
            '${payload.data.id_assinante}',
            GETDATE(),
            0
        )
        IF @@ERRO = 0
        BEGIN
            SELECT @@IDENTITY AS ID_COMPRADOR
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
