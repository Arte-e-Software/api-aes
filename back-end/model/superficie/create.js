module.exports = payload => {


    let data = payload.data
        , erro = data.id_material === '' || data.id_material === undefined || data.nome === '' || data.nome === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível cadastrar superfície, dados incompletos.' as mensagem`

    if (!erro) {

        query = `

        BEGIN TRAN
        INSERT INTO SUPERFICIE VALUES
        (
        ${data.id_material},
        '${data.nome}',
        GETDATE(),
        1
        )
        IF @@ERRO = 0
        BEGIN
           SELECT 
           0 AS erro,
           'Superfície cadastrada com sucesso' as mensagem,
            @@IDENTITY AS id_superficie,
            id_material,
            nome,
            crdate,
            isactive
        FROM
            SUPERFICIE
        WHERE
            id_superficie = @@IDENTITY
            COMMIT TRAN
        END
        ELSE
        BEGIN
            SELECT 1 AS erro, 'Não foi possível cadastrar superficie. Tente novamente.' as mensagem
            ROLLBACK TRAN
        END

`

    }

    return query

}

/*
id_superficie
id_material
nome
crdate
isactive
*/