CREATE TABLE comprador
(
    compradorid INT NOT NULL PRIMARY KEY IDENTITY(1,1), -- primary key column
    nome [VARCHAR](200) NOT NULL,
    cnpj [VARCHAR](200) NOT NULL,
    crdate DATETIME NOT NULL,
    isactive bit NOT NULL
    
);
