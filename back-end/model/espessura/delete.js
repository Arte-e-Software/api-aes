module.exports = payload => {

    query = `

        BEGIN TRAN
        UPDATE ESPESSURA SET
            ISACTIVE = 0
        WHERE
            ID_ESPESSURA = ${payload.data.id_espessura}
        IF @@ERRO = 0
        BEGIN
            SELECT ${payload.data.id_espessura} AS ID_ESPESSURA
            COMMIT TRAN
        END
        ELSE
        BEGIN
            SELECT 0 AS ID_ESPESSURA
            ROLLBACK TRAN
        END

`

    return query

}

/*
CREATE TABLE [dbo].[espessura] (
    [id_espessura] INT      IDENTITY (1, 1) NOT NULL,
    [id_material]  INT      NOT NULL,
    [unidade]      CHAR (2) NOT NULL,
    [valor]        INT      NOT NULL,
    [crdate]       DATETIME NOT NULL,
    [isactive]     BIT      NOT NULL
);

*/