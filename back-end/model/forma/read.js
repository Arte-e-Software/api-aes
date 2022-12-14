module.exports = payload => {

    query = `
        
        SELECT
            id_forma,
            id_material,
            nome,
            comprimento,
            crdate,
            isactive,
        FROM
            FORMA
        WHERE
            ID_FORMA = ${payload.data.id_forma}

`

    return query

}

/*
CREATE TABLE [dbo].[forma] (
    [id_forma]    INT           IDENTITY (1, 1) NOT NULL,
    [id_material] INT           NOT NULL,
    [nome]        VARCHAR (100) NOT NULL,
    [comprimento] BIT           NOT NULL,
    [crdate]      DATETIME      NOT NULL,
    [isactive]    BIT           NOT NULL
);
*/
