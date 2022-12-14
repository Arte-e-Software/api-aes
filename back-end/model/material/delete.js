module.exports = payload => {

    query = `

        BEGIN TRAN
        UPDATE MATERIAL SET
        ISACTIVE = 0
        WHERE
        ID_ASSINANTE = ${payload.data.id_material}
        IF @@ERRO = 0
        BEGIN
            SELECT ${payload.data.id_material} AS ID_MATERIAL
            COMMIT TRAN
        END
        ELSE
        BEGIN
            SELECT 0 AS ID_MATERIAL
            ROLLBACK TRAN
        END

`

    return query

}

/*
CREATE TABLE [dbo].[material] (
    [id_material] INT           IDENTITY (1, 1) NOT NULL,
    [nome]        VARCHAR (200) NOT NULL,
    [crdate]      DATETIME      NOT NULL,
    [isactive]    BIT           NOT NULL
);
*/