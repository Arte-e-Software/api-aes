use api_aes


-- Create a new table called '[usuario_cod_recovery]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[usuario_cod_recovery]', 'U') IS NOT NULL
DROP TABLE [dbo].[usuario_cod_recovery]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[usuario_cod_recovery]
(
    [id_usuario_cod_recovery] INT NOT NULL PRIMARY KEY IDENTITY, -- Primary Key column
    [id_usuario] INT NOT NULL,
    [cod_recovery] CHAR(8) NOT NULL,
   [data_used] DATETIME,
    [crdate] DATETIME NOT NULL,
    [isactive] BIT NOT NULL
    -- Specify more columns here
);