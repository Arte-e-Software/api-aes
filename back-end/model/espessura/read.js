module.exports = payload => {

    query = `
        
        SELECT
            id_espessura,
            id_material,
            unidade,
            valor,
            crdate,
            isactive
        FROM
            ESPESSURA
        WHERE
            ID_ESPESSURA = ${payload.data.id_espessura}

`

    return query

}

/*
CREATE TABLE [dbo].[espessura] (
    [id_espessura] INT      IDENTITY (1, 1) NOT NULL,
    [id_material]  INT      NOT NULL,
    [unidade]      CHAR (2) NOT NULL,
    [valor]        INT      NOT NULL,
    [crdate]       DATETIME NOT NULL,
    [isactive]     BIT      NOT NULL
);

*/
