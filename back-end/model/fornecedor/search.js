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
            id_assinante = '%${payload.data.id_assinante}%'
        ORDER BY
            ID_FORNECEDOR

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
