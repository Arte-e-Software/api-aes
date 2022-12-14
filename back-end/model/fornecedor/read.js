module.exports = payload => {

    query = `
        
        SELECT
            id_fornecedor,
            id_assinante,
            crdate,
            isactive,
        FROM
            FORNECEDOR
        WHERE
            ID_FORNECEDOR = ${payload.data.id_fornecedor}

`

    return query

}

/*
CREATE TABLE [dbo].[fornecedor] (
    [id_fornecedor] INT      IDENTITY (1, 1) NOT NULL,
    [id_assinante]  INT      NOT NULL,
    [crdate]        DATETIME NOT NULL,
    [isactive]      BIT      NOT NULL
);
*/
