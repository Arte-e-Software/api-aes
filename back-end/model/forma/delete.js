module.exports = payload => {

    query = `

        BEGIN TRAN
        UPDATE FORMA SET
            ISACTIVE = 0
        WHERE
            ID_FORMA = ${payload.data.id_forma}
        IF @@ERRO = 0
        BEGIN
            SELECT ${payload.data.id_forma} AS ID_FORMA
            COMMIT TRAN
        END
        ELSE
        BEGIN
            SELECT 0 AS ID_FORMA
            ROLLBACK TRAN
        END

`

    return query

}

/*
CREATE TABLE [dbo].[forma] (
    [id_forma]    INT           IDENTITY (1, 1) NOT NULL,
    [id_material] INT           NOT NULL,
    [nome]        VARCHAR (100) NOT NULL,
    [comprimento] BIT           NOT NULL,
    [crdate]      DATETIME      NOT NULL,
    [isactive]    BIT           NOT NULL
);
*/