module.exports = payload => {

    query = `

        BEGIN TRAN
        INSERT INTO NORMA VALUES
        (
        ${payload.data.id_material},
        '${payload.data.nome}',
        GETDATE(),
        0
        )
        IF @@ERRO = 0
        BEGIN
            SELECT @@IDENTITY AS ID_NORMA
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