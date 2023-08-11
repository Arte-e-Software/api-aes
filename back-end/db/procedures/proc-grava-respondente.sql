CREATE PROCEDURE GRAVA_RESPONDENTE
@nome VARCHAR(100),
@email VARCHAR(200),
@celular char(15)
AS
BEGIN TRAN
DECLARE @id_respondente INT
SET @id_respondente = (SELECT id_respondente FROM SOS_MINHA_CASA_RESPONDENTE WHERE nome = RTRIM(@NOME) AND email = RTRIM(@EMAIL) AND celular = RTRIM(@email))
IF @id_respondente > 0 
BEGIN
    SELECT id_respondente = @id_respondente
END
ELSE
    BEGIN
        INSERT INTO SOS_MINHA_CASA_RESPONDENTE VALUES
        (
        @nome,
        @email,
        @celular,
        GETDATE(),
        1
        )
        IF @@ERROR = 0
        BEGIN
            SELECT @@IDENTITY AS id_respondente
            COMMIT TRAN
    END
    ELSE
    BEGIN
        SELECT 0 AS id_respondente
        ROLLBACK TRAN
    END
END
/*

    ### RESPONDENTE
    id_respondente INT NOT NULL PRIMARY KEY IDENTITY, -- primary key column
    nome [NVARCHAR](200) NOT NULL,
    email [NVARCHAR](200) NOT NULL,
    celular [CHAR](15) NOT NULL,
    crdate [DATETIME] NOT NULL,
    isactive [BIT] NOT NULL 

    ### RESPOSTA
    id_resposta INT NOT NULL PRIMARY KEY IDENTITY, -- primary key column
    id_respondente INT NOT NULL,
    id_pergunta INT NOT NULL,
    resposta [VARCHAR](200) NOT NULL,
    crdate [DATETIME] NOT NULL,
    isactive [BIT] NOT NULL
);

*/

