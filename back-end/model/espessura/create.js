module.exports = payload => {

    let data = payload.data
        , erro = data.id_material === '' || data.id_material === undefined || data.unidade === '' || data.unidade === undefined || data.valor === '' || data.valor === undefined
        , query = `SELECT 1 as erro, 'Erro ao cadastrar assinante, dados incompletos' as mensagem`


    if (!erro) {

        query = `

            BEGIN TRAN
            INSERT INTO ESPESSURA VALUES
            (
                ${data.id_material},
                '${data.unidade}',
                ${data.valor},
                GETDATE(),
                0
            )
            IF @@ERRO = 0
            BEGIN
                SELECT 
                0 as erro, 
                'Espessura cadastrada com sucesso' as mensagem,
                @@IDENTITY AS id_espessura,
                id_material,
                unidade,
                valor,
                crdate,
                isactive
            FROM
            ESPESSURA
            WHERE
            id_espessura = @@IDENTITY
            COMMIT TRAN
            END
            ELSE
            BEGIN
                SELECT 0 AS ID_ESPESSURA
                ROLLBACK TRAN
            END

    `

    }

    return query

}

/*
CREATE TABLE [dbo].[espessura] (
    [id_espessura] INT      IDENTITY (1, 1) NOT NULL,
    [id_material]  INT      NOT NULL,
    [unidade]      CHAR (2) NOT NULL,
    [valor]        INT      NOT NULL,
    [crdate]       DATETIME NOT NULL,
    [isactive]     BIT      NOT NULL
);
*/