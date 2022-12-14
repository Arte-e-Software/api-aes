module.exports = payload => {

    query = `
        
        SELECT
            id_tipo,    
            id_material,
            nome,
            crdate,
            isactive,
        FROM
            TIPO
        WHERE
            ID_TIPO = ${payload.data.id_tipo}

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