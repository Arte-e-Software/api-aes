use api_aes

-- Create a new table called 'sos_minha_casa_resposta' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('sos_minha_casa_resposta', 'U') IS NOT NULL
DROP TABLE sos_minha_casa_resposta
GO
-- Create the table in the specified schema
CREATE TABLE sos_minha_casa_resposta
(
    id_resposta INT NOT NULL PRIMARY KEY IDENTITY, -- primary key column
    id_respondente INT NOT NULL,
    id_pergunta INT NOT NULL,
    resposta [VARCHAR](500) NOT NULL,
    crdate [DATETIME] NOT NULL,
    isactive [BIT] NOT NULL
);

GO

