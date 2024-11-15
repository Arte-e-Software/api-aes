

-- Create a new table called 'empresa' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('empresa', 'U') IS NOT NULL
DROP TABLE empresa
GO
-- Create the table in the specified schema
CREATE TABLE empresa
(
    ID_EMPRESA INT NOT NULL PRIMARY KEY IDENTITY,
    CNPJ [VARCHAR](20),
    RAZAO_SOCIAL [VARCHAR](300),
    NOME_FANTASIA [VARCHAR](300),
    SITUACAO [VARCHAR](10),
    NATUREZA_JURIDICA [VARCHAR](100),
    CNAE [VARCHAR](50),
    RAMO_ATIVIDADE [VARCHAR](500),
    TIPO_LOGRADOURO [VARCHAR](10),
    LOGRADOURO [VARCHAR](200),
    NUMERO [CHAR](5),
    COMPLEMENTO [VARCHAR](200),
    BAIRRO [VARCHAR](200),
    CEP [CHAR](8),
    UF [CHAR](2),
    MUNICIPIO [VARCHAR](100),
    DDD [CHAR](3),
    TELEFONE CHAR(9),
    EMAIL [VARCHAR](150),
    CAPITAL_SOCIAL [VARCHAR](8),
    PORTE [VARCHAR](100),
    SIMPLES_NACIONAL [VARCHAR](20),
    SOCIOS [VARCHAR](300),
    CRIMPORT DATETIME,
    ULTIMO_ENVIO DATETIME
);
select top 10 * from empresa order by id_empresa desc

use aes