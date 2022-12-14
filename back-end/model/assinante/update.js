module.exports = payload => {

    query = `

        BEGIN TRAN
        UPDATE ASSINANTE SET
            ID_ASSINANTE = '${payload.data.id_assinante}',
            ISACTIVE = ${payload.data.isactive}
        WHERE
            ID_ASSINANTE = ${payload.data.id_assinante}
        IF @@ERRO = 0
        BEGIN
            SELECT ${payload.data.id_assinante} AS ID_ASSINANTE
            COMMIT TRAN
        END
        ELSE
        BEGIN
            SELECT 0 AS ID_ASSINANTE
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