use api_aes


-- Create a new table called '[usuario_log_acesso]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[usuario_log_acesso]', 'U') IS NOT NULL
DROP TABLE [dbo].[usuario_log_acesso]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[usuario_log_acesso]
(
    [id_usuario_log_acesso] INT NOT NULL PRIMARY KEY IDENTITY, -- Primary Key column
    [id_usuario] INT NOT NULL,
    [id_tenant] INT NOT NULL,
    [data_acesso] DATETIME NOT NULL,
    [status_acesso] bit NOT NULL, -- 0 fails, 1 success
    [crdate] DATETIME NOT NULL,
    [isactive] BIT NOT NULL
    -- Specify more columns here
);