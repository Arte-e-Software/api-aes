module.exports = payload => {

    let data = payload.data
        , erro = data.id_assinante === '' || data.id_assinante === undefined
        , query = `SELECT 1 AS erro, 'Não foi possivel gravar fornecedor. Dados incompletos.'`

    if (!erro) {

        query = `

        BEGIN TRAN
        INSERT INTO FORNECEDOR VALUES
        (
            '${data.id_assinante}',
            GETDATE(),
            0
        )
        IF @@ERRO = 0
        BEGIN
            SELECT 
            0 AS erro,
            'Fornecedor cadastrado com sucesso',
            @@IDENTITY AS ID_FORNECEDOR,
            id_assinante,
            crdate,
            isactive
        FROM
            FORNECEDOR
        WHERE
            id_fornecedor = @@IDENTITY
            COMMIT TRAN
        END
        ELSE
        BEGIN
            SELECT 
            1 AS erro,
            'Não foi possível gravar fornecedor. Tente novamente.'
            ROLLBACK TRAN
        END

`

    }

    return query

}

/*
id_fornecedor
id_assinante
crdate
isactive
*/
