module.exports = payload => {

    let data = payload.data
        , erro = data.id_material === '' || data.id_material === undefined || data.unidade === '' || data.unidade === undefined || data.valor === '' || data.valor-- - undefined
        , query = `SELECT 1 AS erro, 'Não foi possível gravar largura, dados incompletos.'`

    if (!erro) {

        query = `

        BEGIN TRAN
        INSERT INTO LARGURA VALUES
        (
            ${payload.data.id_material},
            '${payload.data.unidade}',
            ${payload.data.valor},
            GETDATE(),
            0
        )
        IF @@ERRO = 0
        BEGIN
            SELECT
            0 AS erro,
            'Largura cadastrada com sucesso' as mensagem,
                @@IDENTITY AS id_largura,
                id_material,
                unidade,
                valor,
                crdate,
                isactive
            FROM
                LARGURA
            WHERE
                id_largura = @@IDENTITY
            COMMIT TRAN
        END
        ELSE
        BEGIN
            SELECT 1 AS erro, 'Não foi possível gravar largura. Tente novamente' as mensagem
            ROLLBACK TRAN
        END
   

`
    }

    return query

}

/*
id_largura
id_material
unidade
valor
crdate
isactive
*/
