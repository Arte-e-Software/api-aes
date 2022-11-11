CREATE TABLE [dbo].[produto] (
    [produtoid]  INT           IDENTITY (1, 1) NOT NULL,
    [codigo]     VARCHAR (100) NOT NULL,
    [produto]    VARCHAR (200) NOT NULL,
    [superficie] VARCHAR (200) NOT NULL,
    [espessura]  FLOAT (53)    NOT NULL,
    [norma]      VARCHAR (100) NOT NULL,
    [crdate]     DATETIME      NOT NULL,
    [isactive]   BIT           NOT NULL,
    CONSTRAINT [PK_produto] PRIMARY KEY CLUSTERED ([produtoid] ASC)
);

