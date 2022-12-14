module.exports = payload => {

    query = `

        BEGIN TRAN
        UPDATE ASSINANTE SET
        ISACTIVE = 0
        WHERE
        ID_ASSINANTE = ${payload.data.id_assinante}
        IF @@ERRO = 0
        BEGIN
            SELECT ${payload.data.id_assinante} AS ID_ASSINANTE
            COMMIT TRAN
        END
        ELSE
        BEGIN
            SELECT 0 AS ID_ASSINANTE
            ROLLBACK TRAN
        END

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