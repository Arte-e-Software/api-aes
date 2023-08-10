-- Create a new table called 'sos_minha_casa_respondente' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('sos_minha_casa_respondente', 'U') IS NOT NULL
DROP TABLE sos_minha_casa_respondente
GO
-- Create the table in the specified schema
CREATE TABLE sos_minha_casa_respondente
(
    id_respondente INT NOT NULL PRIMARY KEY IDENTITY, -- primary key column
    nome [NVARCHAR](200) NOT NULL,
    email [NVARCHAR](200) NOT NULL,
    celular [CHAR](15) NOT NULL,
    crdate [DATETIME] NOT NULL,
    isactive [BIT] NOT NULL 
    -- specify more columns here
);
GO