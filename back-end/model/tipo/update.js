module.exports = payload => {

    query = `

        BEGIN TRAN
        UPDATE TIPO SET
            ID_MATERIAL = ${payload.data.id_material},    
            NOME = '${payload.data.nome}',
            ISACTIVE = ${payload.data.isactive}
        WHERE
            ID_TIPO = ${payload.data.id_tipo}
        IF @@ERRO = 0
        BEGIN
            SELECT ${payload.data.id_tipo} AS ID_TIPO
            COMMIT TRAN
        END
        ELSE
        BEGIN
            SELECT 0 AS ID_TIPO
            ROLLBACK TRAN
        END

`

    return query

}

/*
CREATE TABLE [dbo].[tipo] (
    [id_tipo]     INT           IDENTITY (1, 1) NOT NULL,
    [id_material] INT           NOT NULL,
    [nome]        VARCHAR (100) NOT NULL,
    [crdate]      DATETIME      NOT NULL,
    [isactive]    BIT           NOT NULL
);
*/