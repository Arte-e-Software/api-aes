module.exports = payload => {

    query = `

        BEGIN TRAN
        INSERT INTO LARGURA VALUES
        (
            ${payload.data.id_material},
            '${payload.data.unidade}',
            ${payload.data.valor},
            GETDATE(),
            0
        )
        IF @@ERRO = 0
        BEGIN
            SELECT @@IDENTITY AS ID_LARGURA
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
