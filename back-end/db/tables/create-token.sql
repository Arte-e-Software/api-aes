-- Create a new table called 'token' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('token', 'U') IS NOT NULL
DROP TABLE token
GO
-- Create the table in the specified schema
CREATE TABLE token
(
    id_token INT NOT NULL PRIMARY KEY IDENTITY, 
    id_usuario INT NOT NULL,
    token [CHAR](64) NOT NULL,
    validade DATETIME NOT NULL,
    crdate DATETIME NOT NULL,
    ativo BIT NOT NULL
);
GO

CREATE INDEX idx_token
ON token (token)