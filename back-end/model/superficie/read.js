module.exports = payload => {

    query = `
        
        SELECT
            id_superficie,    
            id_material,
            nome,
            crdate,
            isactive,
        FROM
            SUPERFICIE
        WHERE
            ID_SUPERFICIE = ${payload.data.id_superficie}

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