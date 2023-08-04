-- Create a new table called 'tenant' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('tenant', 'U') IS NOT NULL
DROP TABLE tenant
GO
-- Create the table in the specified schema
CREATE TABLE tenant
(
    id_tenant INT NOT NULL PRIMARY KEY IDENTITY, 
    nome [VARCHAR](200) NOT NULL,
    dominio [VARCHAR](100) NOT NULL,
    chave_api [CHAR](64) NOT NULL,
    crdate DATETIME NOT NULL,
    ativo BIT NOT NULL
);
GO

/*

INSERT INTO TENANT VALUES
(

    'Arte e Software Tecnologia',
    'http://127.0.0.1:3030, https://aes.tec.br',
    'ee09f909a871f04398cc5109c76cbb8b03f1defb56fcf8295689b84d9e14faab',
    GETDATE(),
    1

)

*/