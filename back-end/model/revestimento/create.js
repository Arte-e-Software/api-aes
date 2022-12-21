module.exports = payload => {

    let data = payload.data
        , erro = data.id_material === '' || data.id_material === undefined || data.nome === '' || data.nome === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível cadastrar revestimento. Dados incompletos.' as mensagem`

    if (!erro) {

        query = `
            
                BEGIN TRAN
                INSERT INTO REVESTIMENTO VALUES
                (
                    ${data.id_material},
                    '${data.nome}',
                    GETDATE(),
                    1
                )

                IF @@ERROR = 0
                BEGIN
                    SELECT 
                    0 AS erro,
                    'Revestimento cadastrado com sucesso' as mensagem.
                    @@IDENTITY AS id_revestimento,
                    id_material,
                    nome,
                    crdate,
                    isactive
                FROM
                    REVESTIMENTO
                WHERE
                    id_revestimento = @@IDENTITY
                    
                    COMMIT TRAN

                END
                ELSE
                BEGIN
                    
                    SELECT 1 AS erro, 'Não foi possível cadastrar revestimento. Tente novamente' as mensagem
                    ROLLBACK TRAN

                END

           `
    }


    return query

}


/*
id_revestimento
id_material
nome
crdate
isactive
*/