CREATE TABLE [dbo].[fornecedor_produto] (
    [fornecedorprodutoid] INT      IDENTITY (1, 1) NOT NULL,
    [fornecedorid]        INT      NOT NULL,
    [produtoid]           INT      NOT NULL,
    [crdate]              DATETIME NOT NULL,
    [isactive]            INT      NOT NULL,
    CONSTRAINT [PK_fornecedor_produto] PRIMARY KEY CLUSTERED ([fornecedorprodutoid] ASC)
);
