module.exports = payload => {

    let data = payload.data
        , erro = data.id_assinante === '' || data.id_assinante === undefined
        , query = `SELECT 1 as erro, 'Erro ao cadastrar assinante, dados incompletos' as mensagem`

    if (!erro) {

        query = `

                BEGIN TRAN
                INSERT INTO COMPRADOR VALUES
                (
                    '${data.id_assinante}',
                    GETDATE(),
                    0
                )
                IF @@ERROR = 0
                BEGIN
                    SELECT 
                        0 AS erro,
                        'Comprador cadastrado com sucesso' AS mensagem,
                        @@IDENTITY AS id_comprador,
                        id_assinante,
                        crdate,
                        isactive
                    FROM
                        COMPRADOR
                    WHERE
                        id_comprador = @@IDENTITY
                    COMMIT TRAN
                END
                ELSE
                BEGIN
                    SELECT
                        1 as erro,
                        'Não foi possível cadastrar o comprador. Por favor, tenten novamente' as mensagem
                    ROLLBACK TRAN
                END

        `
    }

    return query

}

/*
CREATE TABLE[dbo].[comprador](
    [id_comprador] INT      IDENTITY(1, 1) NOT NULL,
    [id_assinante] INT      NOT NULL,
    [crdate]       DATETIME NOT NULL,
    [isactive]     BIT      NULL
);
*/
