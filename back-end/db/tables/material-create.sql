CREATE TABLE [dbo].[material] (
    [id_material] INT           IDENTITY (1, 1) NOT NULL,
    [nome]        VARCHAR (200) NOT NULL,
    [crdate]      DATETIME      NOT NULL,
    [isactive]    BIT           NOT NULL
);