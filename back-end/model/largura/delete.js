module.exports = payload => {

    query = `

        BEGIN TRAN
        UPDATE LARGURA SET
            ISACTIVE = 0
        WHERE
            ID_LARGURA = ${payload.data.id_largura}
        IF @@ERRO = 0
        BEGIN
            SELECT ${payload.data.id_largura} AS ID_LARGURA
            COMMIT TRAN
        END
        ELSE
        BEGIN
            SELECT 0 AS ID_LARGURA
            ROLLBACK TRAN
        END

`

    return query

}

/*
CREATE TABLE [dbo].[largura] (
    [id_largura]  INT      IDENTITY (1, 1) NOT NULL,
    [id_material] INT      NOT NULL,
    [unidade]     CHAR (2) NOT NULL,
    [valor]       INT      NOT NULL,
    [crdate]      DATETIME NOT NULL,
    [isactive]    BIT      NOT NULL
);
*/