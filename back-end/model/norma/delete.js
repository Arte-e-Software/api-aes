module.exports = payload => {

    query = `

        BEGIN TRAN
        UPDATE NORMA SET
        ISACTIVE = 0
        WHERE
        ID_NORMA = ${payload.data.id_norma}
        IF @@ERRO = 0
        BEGIN
            SELECT ${payload.data.id_norma} AS ID_NORMA
            COMMIT TRAN
        END
        ELSE
        BEGIN
            SELECT 0 AS ID_NORMA
            ROLLBACK TRAN
        END

`

    return query

}

/*
CREATE TABLE [dbo].[norma] (
    [id_norma]    INT           IDENTITY (1, 1) NOT NULL,
    [id_material] INT           NOT NULL,
    [nome]        VARCHAR (100) NOT NULL,
    [crdate]      DATETIME      NOT NULL,
    [isactive]    BIT           NOT NULL
);
*/