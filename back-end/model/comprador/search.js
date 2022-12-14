module.exports = payload => {

    query = `
        
        SELECT
            id_comprador,
            id_assinante,
            crdate,
            isactive,
        FROM
            COMPRADOR
        WHERE
            id_assinante = '%${payload.data.id_assinante}%'
        ORDER BY
            ID_COMPRADOR

`

    return query

}

/*
CREATE TABLE[dbo].[comprador](
    [id_comprador] INT      IDENTITY(1, 1) NOT NULL,
    [id_assinante] INT      NOT NULL,
    [crdate]       DATETIME NOT NULL,
    [isactive]     BIT      NULL
);
*/
