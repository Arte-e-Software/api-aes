CREATE TABLE [dbo].[cotacao_proposta_produto] (
    [cotacaopropostaprodutoid] INT           IDENTITY (1, 1) NOT NULL,
    [cotacaopropostaid]        INT           NOT NULL,
    [produtoid]                INT           NOT NULL,
    [forma]                    VARCHAR (100) NOT NULL,
    [espessura]                FLOAT (53)    NOT NULL,
    [largura]                  FLOAT (53)    NOT NULL,
    [comprimento]              FLOAT (53)    NOT NULL,
    [revestimento]             VARCHAR (100) NOT NULL,
    [peso]                     FLOAT (53)    NOT NULL,
    [prazoentrega]             DATETIME      NOT NULL,
    [preco]                    FLOAT (53)    NOT NULL,
    [icms]                     FLOAT (53)    NULL,
    [ipi]                      FLOAT (53)    NULL,
    [fob]                      VARCHAR (100) NULL,
    [cif]                      VARCHAR (100) NULL,
    [precofinal]               FLOAT (53)    NOT NULL,
    [observacao]               VARCHAR (500) NULL,
    [crdate]                   DATETIME      NOT NULL,
    [isactive]                 BIT           NOT NULL,
    CONSTRAINT [PK_cotacao_proposta_produto] PRIMARY KEY CLUSTERED ([cotacaopropostaprodutoid] ASC)
);

