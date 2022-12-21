module.exports = payload => {

    let data = payload.data
        , erro = data.nome === '' || data.nome === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível gravar material, dados incompletos.'`

    if (!erro) {

        query = `

        BEGIN TRAN
        INSERT INTO MATERIAL VALUES
        (
        '${payload.data.nome}',
        GETDATE(),
        1
        )
        IF @@ERROR = 0
        BEGIN
            SELECT 
                0 as erro,
                'Material cadastrado com sucesso' as mensagem,
                @@IDENTITY AS id_material,
                nome,
                crdate,
                isactive
            FROM
                MATERIAL
            WHERE
                id_material = @@IDENTITY
            COMMIT TRAN
        END
        ELSE
        BEGIN
            SELECT 1 AS erro, 'Não foi possível gravar material, tente novamente'    
        ROLLBACK TRAN
        END
 

`
        return query

    }
}

/*
id_material
nome
crdate
isactive
*/