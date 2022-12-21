module.exports = payload => {

    let data = payload.data
        , erro = data.id_assinante === '' || data.id_assinante === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível ler ASSINANTE, dados incompletos' as mensagem`

    if (!erro) {

        // pensar em trabalhar o EOF aqui #issue

        query = `
        
        SELECT
            0 as erro,
            'Assinante localizado com sucesso.' as mensagem,
            id_assinante,
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
            id_assinante = ${data.id_assinante}

`

    }

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