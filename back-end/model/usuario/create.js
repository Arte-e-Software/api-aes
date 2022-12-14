module.exports = payload => {

    query = `

        BEGIN TRAN
        INSERT INTO USUARIO VALUES
        (
            ${payload.data.id_assinante},
            '${payload.data.nome}',
            '${payload.data.cpf}',
            '${payload.data.email}',
            '${payload.data.celular}',
            GETDATE(),
            0
        )
        IF @@ERRO = 0
        BEGIN
            SELECT @@IDENTITY AS ID_USUARIO
            COMMIT TRAN
        END
        ELSE
        BEGIN
            SELECT 0 AS ID_USUARIO
            ROLLBACK TRAN
        END

`

    return query

}

/*
CREATE TABLE [dbo].[usuario] (
    [id_usuario]   INT           IDENTITY (1, 1) NOT NULL,
    [id_assinante] INT           NOT NULL,
    [nome]         VARCHAR (200) NOT NULL,
    [cpf]          CHAR (11)     NOT NULL,
    [email]        VARCHAR (200) NOT NULL,
    [celular]      CHAR (14)     NOT NULL,
    [crdate]       DATETIME      NOT NULL,
    [isactive]     BIT           NOT NULL
);
*/