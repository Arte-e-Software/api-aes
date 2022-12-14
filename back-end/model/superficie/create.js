module.exports = payload => {

    query = `

        BEGIN TRAN
        INSERT INTO SUPERFICIE VALUES
        (
        ${payload.data.id_material},
        '${payload.data.nome}',
        GETDATE(),
        0
        )
        IF @@ERRO = 0
        BEGIN
            SELECT @@IDENTITY AS ID_SUPERFICIE
            COMMIT TRAN
        END
        ELSE
        BEGIN
            SELECT 0 AS ID_SUPERFICIE
            ROLLBACK TRAN
        END

`

    return query

}

/*
CREATE TABLE [dbo].[superficie] (
    [id_superficie] INT           IDENTITY (1, 1) NOT NULL,
    [id_material]   INT           NOT NULL,
    [nome]          VARCHAR (100) NOT NULL,
    [crdate]        DATETIME      NOT NULL,
    [isactive]      BIT           NOT NULL
);
*/