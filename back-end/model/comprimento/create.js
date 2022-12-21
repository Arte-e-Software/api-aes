module.exports = payload => {

    let data = payload.data
        , erro = data.id_material === '' || data.id_material === undefined || data.unidade === '' || data.unidade === undefined || data.valor === '' || data.valor === undefined
        , query = `SELECT 1 as erro, 'Erro ao cadastrar comprimento, dados incompletos' as mensagem`

    if (!erro) {

        query = `
            
                BEGIN TRAN
                    INSERT INTO COMPRIMENTO VALUES
                    (
                    ${data.id_material},
                    '${dasata.unidade}',
                    ${data.valor}
                    )
                IF @@ERROR = 0
                BEGIN
                    SELECT
                        @@IDENTITY AS id_comprimento,
                        id_material,
                        unidade,
                        valor,
                        crdate,
                        isactive
                    FROM
                        COMPRIMENTO
                    WHERE
                        id_comprimento = @@IDENTITY
                    COMMI TRAN
                END
                ELSE
                    SELECT 1 AS erro, 'Não foi possível cadastrar o comprimento, tente novamente.' AS mensagem
                    ROLLBACk TRAN
                BEGIN
                END

            `

    }

    return query

}

/*
id_comprimento
id_material
unidade
valor
crdate
isactive
*/