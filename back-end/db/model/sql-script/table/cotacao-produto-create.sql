CREATE TABLE [dbo].[cotacao_produto] (
    [cotacaoprodutoid] INT           IDENTITY (1, 1) NOT NULL,
    [cotacaoid]        INT           NOT NULL,
    [produtoid]        INT           NOT NULL,
    [forma]            VARCHAR (100) NOT NULL,
    [espessura]        FLOAT (53)    NOT NULL,
    [largura]          FLOAT (53)    NOT NULL,
    [comprimento]      FLOAT (53)    NOT NULL,
    [revestimento]     VARCHAR (100) NOT NULL,
    [peso]             FLOAT (53)    NOT NULL,
    [prazodesejado]    DATETIME      NOT NULL,
    [crdate]           DATETIME      NOT NULL,
    [isactive]         BIT           NOT NULL,
    CONSTRAINT [PK_cotacao_produto] PRIMARY KEY CLUSTERED ([cotacaoprodutoid] ASC)
);

