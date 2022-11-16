CREATE TABLE [dbo].[pedido] (
    [pedidoid]                 INT           IDENTITY (1, 1) NOT NULL,
    [cotacaopropostaprodutoid] INT           NOT NULL,
    [compradorusuarioid]       INT           NOT NULL,
    [observacao]               VARCHAR (500) NOT NULL,
    [crdate]                   DATETIME      NOT NULL,
    [isactive]                 BIT           NOT NULL,
    CONSTRAINT [PK_pedido] PRIMARY KEY CLUSTERED ([pedidoid] ASC)
);

