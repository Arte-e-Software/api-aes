CREATE TABLE [dbo].[fornecedor] (
    [fornecedorid] INT           IDENTITY (1, 1) NOT NULL,
    [cnpj]        CHAR (14)     NOT NULL,
    [nome]        VARCHAR (200) NOT NULL,
    [cep]         CHAR (8)      NOT NULL,
    [crdate]      DATETIME      NOT NULL,
    [isactive]    BIT           NOT NULL,
    CONSTRAINT [PK_comprador] PRIMARY KEY CLUSTERED ([compradorid] ASC)
);

