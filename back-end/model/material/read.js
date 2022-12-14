module.exports = payload => {

    query = `
        
        SELECT
            id_material,
            nome,
            crdate,
            isactive,
        FROM
            MATERIAL
        WHERE
            ID_MATERIAL = ${payload.data.id_material}

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