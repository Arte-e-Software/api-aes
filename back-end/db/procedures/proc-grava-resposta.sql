
alter PROCEDURE GRAVA_RESPOSTA 
@id_respondente INT,
@id_pergunta int,
@resposta varchar(500)
AS
BEGIN TRAN
INSERT INTO SOS_MINHA_CASA_RESPOSTA VALUES
(
@id_respondente,
@id_pergunta,
@resposta,
GETDATE(),
1
)
IF @@ERROR = 0
BEGIN
    SELECT @@IDENTITY AS id_resposta
    COMMIT TRAN

END
ELSE
BEGIN
    SELECT 0 AS id_resposta
    ROLLBACK TRAN

END


/*

    ### RESPOSTA
    id_resposta INT NOT NULL PRIMARY KEY IDENTITY, -- primary key column
    id_respondente INT NOT NULL,
    resposta [VARCHAR](200) NOT NULL,
    crdate [DATETIME] NOT NULL,
    isactive [BIT] NOT NULL
);

*/