module.exports = payload => {

    query = `
        
        SELECT
            id_largura,
            id_material,
            unidade,
            valor,
            crdate,
            isactive
        FROM
            LARGURA
        WHERE
            ID_LARGURA = ${payload.data.id_largura}

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
