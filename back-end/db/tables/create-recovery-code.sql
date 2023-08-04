-- Create a new table called 'recovery_code' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('recovery_code', 'U') IS NOT NULL
DROP TABLE recovery_code
GO
-- Create the table in the specified schema
CREATE TABLE recovery_code
(
    id_recovery_code INT NOT NULL PRIMARY KEY IDENTITY,
    id_usuario INT NOT NULL,
    recovery_code [CHAR](8) NOT NULL,
    validade DATETIME NOT NULL,
    crdate DATETIME NOT NULL,
    ativo BIT NOT NULL
    
);
GO