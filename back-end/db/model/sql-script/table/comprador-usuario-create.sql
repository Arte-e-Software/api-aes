CREATE TABLE [dbo].[comprador_usuario] (
    [compradorusuarioid] INT           IDENTITY (1, 1) NOT NULL,
    [compradorid]        INT           NOT NULL,
    [cpf]                CHAR (11)     NOT NULL,
    [nome]               VARCHAR (200) NOT NULL,
    [email]              VARCHAR (200) NOT NULL,
    [celular]            CHAR (12)     NOT NULL,
    [pw]                 CHAR (64)     NOT NULL,
    [crdate]             DATETIME      NOT NULL,
    [isactive]           BIT           NOT NULL,
    CONSTRAINT [PK_comprador_usuario] PRIMARY KEY CLUSTERED ([compradorusuarioid] ASC)
);