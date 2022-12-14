module.exports = payload => {

    query = `
        
        SELECT
            id_usuario,
            id_assinante,
            nome,
            cpf,
            email,
            celular,
            crdate,
            isactive
        FROM
            USUARIO
        WHERE
            ID_ASSINANTE = ${payload.data.id_assinante}
        OR
            NOME like '%${payload.data.string}%'
        OR
            EMAIL LIKE '%${payload.data.string}%'
        OR
            CELULAR LIKE '%${payload.data.string}%'
        ORDER BY
            NOME

`

    return query

}

/*
CREATE TABLE [dbo].[usuario] (
    [id_usuario]   INT           IDENTITY (1, 1) NOT NULL,
    [id_assinante] INT           NOT NULL,
    [nome]         VARCHAR (200) NOT NULL,
    [cpf]          CHAR (11)     NOT NULL,
    [email]        VARCHAR (200) NOT NULL,
    [celular]      CHAR (14)     NOT NULL,
    [crdate]       DATETIME      NOT NULL,
    [isactive]     BIT           NOT NULL
);
*/