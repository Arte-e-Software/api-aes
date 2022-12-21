module.exports = payload => {

    let data = payload.data
        , erro = data.id_material === '' || data.id_material === undefined || data.nome === '' || data.nome === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível gravar norma, dados incompletos.'`

    if (!erro) {

        query = `

        BEGIN TRAN
        INSERT INTO NORMA VALUES
        (
        ${payload.data.id_material},
        '${payload.data.nome}',
        GETDATE(),
        0
        )
        IF @@ERRO = 0
        BEGIN
            SELECT 
                0 as erro, 'Norma cadastrada com sucesso.' as mensagem,
                @@IDENTITY AS id_norma,
                id_material,
                nome,
                crdate,
                isactive
            FROM
                NORMA
            WHERE
                id_norma = @@IDENTITY
            COMMIT TRAN
        END
        ELSE
        BEGIN
            SELECT 1 AS erro, 'Não foi possível gravar norma, tente novamente'
            ROLLBACK TRAN
        END

`

    }

    return query

}

/*
id_norma
id_material
nome
crdate
isactive
*/