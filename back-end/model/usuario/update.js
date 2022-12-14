module.exports = payload => {

    query = `

        BEGIN TRAN
        UPDATE USUARIO SET
            id_assinante = ${payload.data.id_assinante},
            nome = '${payload.data.nome}',
            cpf = '${payload.data.cpf}',
            email = '${payload.data.email}'
            celular = '${payload.data.celular}'
        WHERE
            ID_USUARIO = ${payload.data.id_usuario}
        IF @@ERRO = 0
        BEGIN
            SELECT ${payload.data.id_usuario} AS ID_USUARIO
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