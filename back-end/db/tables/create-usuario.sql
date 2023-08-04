-- Create a new table called 'usuario' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('usuario', 'U') IS NOT NULL
DROP TABLE usuario
GO
-- Create the table in the specified schema
CREATE TABLE usuario
(
    id_usuario INT NOT NULL PRIMARY KEY IDENTITY,
    id_tenant INT NOT NULL,
    nome [VARCHAR](100) NOT NULL,
    email [VARCHAR](100) NOT NULL,
    celular [CHAR](13) NOT NULL,
    senha [CHAR](64) NOT NULL,
    crdate DATETIME NOT NULL,
    ativo bit NOT NULL
);
GO

CREATE INDEX idx_email
ON usuario (email)

/*

INSERT INTO USUARIO VALUES
(
    1, 
    'Pedro Silva',
    'pedro.com@gmail.com',
    '5511994923850',
    '07966467ea880f0454e1a6a4d73c7f1bf61a6dcf38428b1fd41e1ce318cc3e1f',
    GETDATE(),
    1
)

*/