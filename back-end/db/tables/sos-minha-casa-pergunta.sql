use [API-AES]
-- Create a new table called 'sos_minha_casa_pergunta' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('sos_minha_casa_pergunta', 'U') IS NOT NULL
DROP TABLE sos_minha_casa_pergunta
GO
-- Create the table in the specified schema
CREATE TABLE sos_minha_casa_pergunta
(
    id_pergunta INT NOT NULL PRIMARY KEY IDENTITY, -- primary key column
    id_pesquisa INT NOT NULL,
    pergunta [NVARCHAR](200) NOT NULL,
    input_type [varchar](50) NOT NULL,
    array_alternativas [varchar](500),
    crdate [DATETIME] NOT NULL,
    isactive [BIT] NOT NULL 
    -- specify more columns here
);
GO