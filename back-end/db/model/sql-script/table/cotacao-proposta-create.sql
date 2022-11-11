CREATE TABLE [dbo].[cotacao_proposta] (
    [cotacaopropostaid]   INT      IDENTITY (1, 1) NOT NULL,
    [cotacaoid]           INT      NOT NULL,
    [fornecedorid]        INT      NOT NULL,
    [fornecedorusuarioid] INT      NOT NULL,
    [crdate]              DATETIME NOT NULL,
    [isactive]            BIT      NOT NULL,
    CONSTRAINT [PK_cotacao_proposta] PRIMARY KEY CLUSTERED ([cotacaopropostaid] ASC)
);

