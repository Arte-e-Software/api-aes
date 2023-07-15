use api_aes


-- Create a new table called '[usuario]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[usuario]', 'U') IS NOT NULL
DROP TABLE [dbo].[usuario]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[usuario]
(
    [IdUsuario] INT NOT NULL PRIMARY KEY IDENTITY, -- Primary Key column
    [idTenant] INT NOT NULL,
    [nome] varchar(100) NOT NULL,
    [email] varchar(100) NOT NULL,
    [celular] char(15) NOT NULL,
    [data_nascimento] DATE NOT NULL,
    [cpf] VARCHAR(15) NOT NULL,
    [cep] CHAR(8) NOT NULL,
    [senha] CHAR(64) NOT NULL,
    [crdate] DATETIME NOT NULL,
    [ISACTIVE] BIT NOT NULL
    -- Specify more columns here
);
GO