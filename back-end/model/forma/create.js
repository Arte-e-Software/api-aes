module.exports = payload => {

    query = `

        DECLARE @ID_COMPRADOR INT
        BEGIN TRAN
        INSERT INTO FORMA VALUES
        (
            ${payload.data.id_material},
            '${payload.data.nome}',
            ${payload.data.comprimento},
            GETDATE(),
            0
        )
        IF @@ERRO = 0
        BEGIN
            SELECT @@IDENTITY AS ID_FORMA
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
