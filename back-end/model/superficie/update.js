module.exports = payload => {

    query = `

        BEGIN TRAN
        UPDATE SUPERFICIE SET
            ID_MATERIAL = ${payload.data.id_material},    
            NOME = '${payload.data.nome}',
            ISACTIVE = ${payload.data.isactive}
        WHERE
            ID_SUPERFICIE = ${payload.data.id_superficie}
        IF @@ERRO = 0
        BEGIN
            SELECT ${payload.data.id_superficie} AS ID_SUPERFICIE
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