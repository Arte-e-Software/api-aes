CREATE TABLE [dbo].[fornecedor_usuario] (
    [fornecedorusuarioid] INT           IDENTITY (1, 1) NOT NULL,
    [fornecedorud]        INT           NOT NULL,
    [cpf]                 CHAR (14)     NOT NULL,
    [nome]                VARCHAR (200) NOT NULL,
    [email]               VARCHAR (200) NOT NULL,
    [celular]             CHAR (12)     NOT NULL,
    [crdate]              DATETIME      NOT NULL,
    [isactive]            BIT           NOT NULL,
    CONSTRAINT [PK_fornecedor_usuario] PRIMARY KEY CLUSTERED ([fornecedorusuarioid] ASC)
);

