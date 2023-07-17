use api_aes
IF OBJECT_ID('[dbo].[usuario_cod_recovery]', 'U') IS NOT NULL
DROP TABLE [dbo].[usuario_cod_recovery]
GO
CREATE TABLE [dbo].[usuario_cod_recovery]
(
    [id_usuario_cod_recovery] INT NOT NULL PRIMARY KEY IDENTITY, -- Primary Key column
    [id_usuario] INT NOT NULL,
    [array_cod_recovery] CHAR(89) NOT NULL,
    [data_used] DATETIME,
    [crdate] DATETIME NOT NULL,
    [isactive] BIT NOT NULL
);