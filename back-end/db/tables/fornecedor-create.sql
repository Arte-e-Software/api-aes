CREATE TABLE [dbo].[fornecedor] (
    [id_fornecedor] INT      IDENTITY (1, 1) NOT NULL,
    [id_assinante]  INT      NOT NULL,
    [crdate]        DATETIME NOT NULL,
    [isactive]      BIT      NOT NULL
);

