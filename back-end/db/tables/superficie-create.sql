CREATE TABLE [dbo].[superficie] (
    [id_superficie] INT           IDENTITY (1, 1) NOT NULL,
    [id_material]   INT           NOT NULL,
    [nome]          VARCHAR (100) NOT NULL,
    [crdate]        DATETIME      NOT NULL,
    [isactive]      BIT           NOT NULL
);

