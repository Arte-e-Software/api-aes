module.exports = payload => {

    query = `
        
        SELECT
            id_norma,    
            id_material,
            nome,
            crdate,
            isactive,
        FROM
            NORMA
        WHERE
            ID_NORMA = ${payload.data.id_norma}

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