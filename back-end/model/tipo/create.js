module.exports = payload => {

    let data = payload.data
        , erro = data.id_material === '' || data.id_material === undefined || data.nome === '' || data.nome === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível cadastrar tipo. Dados incompletos.'`

    if (!erro) {

        query = `

        BEGIN TRAN
        INSERT INTO TIPO VALUES
        (
        ${data.id_material},
        '${data.nome}',
        GETDATE(),
        1
        )
        IF @@ERRO = 0
        BEGIN
            SELECT 0 AS erro,
            'Tipo cadastrado com sucesso' as mensagem,
            @@IDENTITY AS id_tipo,
            id_material,
            nome,
            crdate,
            isactive
            FROM
                TIPO
            WHERE
                id_tipo = @@IDENTITy
            COMMIT TRAN
        END
        ELSE
        BEGIN
           SELECT 1 AS erro, 'Não foi possível cadastrar tipo, tente novamente.' as mensagem
            ROLLBACK TRAN
        END

`

    }



    return query

}

/*
id_tipo
id_material
nome
crdate
isactive
*/