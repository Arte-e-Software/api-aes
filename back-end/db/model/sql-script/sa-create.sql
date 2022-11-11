CREATE TABLE sa
(
    saId INT NOT NULL PRIMARY KEY IDENTITY(1,1), -- primary key column
    nome [VARCHAR](200) NOT NULL,
    email [VARCHAR](200) NOT NULL,
    celular [CHAR](11) NOT NULL,
    pw [CHAR](64) NOT NULL,
    crdate DATETIME NOT NULL,
    isactive bit NOT NULL
    
);
GO