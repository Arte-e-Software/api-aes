CREATE TABLE [dbo].[cotacao] (
    [cotacaoid]          INT      IDENTITY (1, 1) NOT NULL,
    [compradorid]        INT      NOT NULL,
    [compradorusuarioid] INT      NOT NULL,
    [crdate]             DATETIME NOT NULL,
    [isactive]           BIT      NOT NULL,
    CONSTRAINT [PK_cotacao] PRIMARY KEY CLUSTERED ([cotacaoid] ASC)
);

