module.exports = payload => {

    query = `
        
        SELECT
            nome,
            cnpj,
            cep,
            cidade,
            uf,
            crdate,
            isactive
        FROM
            ASSINANTE
        WHERE
            id_assinante = ${payload.data.id_assinante}

`

    return query

}

/*
CREATE TABLE [dbo].[assinante] (
    [id_assinante] INT           IDENTITY (1, 1) NOT NULL,
    [nome]         VARCHAR (200) NOT NULL,
    [cnpj]         CHAR (14)     NOT NULL,
    [cep]          CHAR (8)      NOT NULL,
    [cidade]       VARCHAR (100) NOT NULL,
    [uf]           CHAR (2)      NOT NULL,
    [crdate]       DATETIME      NOT NULL,
    [isactive]     BIT           NOT NULL,
    CONSTRAINT [PK_assinante] PRIMARY KEY CLUSTERED ([id_assinante] ASC)
);
*/