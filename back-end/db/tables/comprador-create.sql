CREATE TABLE [dbo].[comprador] (
    [id_comprador] INT      IDENTITY (1, 1) NOT NULL,
    [id_assinante] INT      NOT NULL,
    [crdate]       DATETIME NOT NULL,
    [isactive]     BIT      NULL
);

