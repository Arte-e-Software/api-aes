CREATE TABLE [dbo].[sysadmin] (
    [sysadminid] INT           IDENTITY (1, 1) NOT NULL,
    [login]      CHAR (100)    NOT NULL,
    [pw]         CHAR (64)     NOT NULL,
    [nome]       VARCHAR (200) NOT NULL,
    [email]      VARCHAR (200) NOT NULL,
    [celular]    CHAR (12)     NOT NULL,
    [crdate]     DATETIME      NOT NULL,
    [isactive]   BIT           NOT NULL,
    CONSTRAINT [PK_sysadmin] PRIMARY KEY CLUSTERED ([sysadminid] ASC)
);
