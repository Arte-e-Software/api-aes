module.exports = payload => {

    query = `
        
        SELECT
            id_normal,    
            id_material,    
            nome,
            crdate,
            isactive
        FROM
            NORMA
        WHERE
            NOME like '%${payload.data.nome}%'
        OR
            ID_MATERIAL = ${payload.data.id_material}
        ORDER BY
            nome

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