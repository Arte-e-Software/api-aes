module.exports = payload => {

    query = `

        BEGIN TRAN
        INSERT INTO MATERIAL VALUES
        (
        '${payload.data.nome}',
        GETDATE(),
        0
        )
        IF @@ERROR = 0
        BEGIN
            SELECT @@IDENTITY AS ID_MATERIAL
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