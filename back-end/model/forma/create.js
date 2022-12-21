module.exports = payload => {

    let data = payload.data
        , erro = data.id_material === '' || data.id_material === undefined || data.nome === '' || data.nome === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível gravar forma, dados incompletos.'`

    if (!erro) {

        query = `

        BEGIN TRAN
        INSERT INTO FORMA VALUES
        (
            ${payload.data.id_material},
            '${payload.data.nome}',
            ${payload.data.comprimento},
            GETDATE(),
            0
        )
        IF @@ERRO = 0
        BEGIN
            SELECT 
            0 as erro,
            'Forma cadastradas com sucesso' as mensagem,
            @@IDENTITY AS ID_FORMA,
            id_material,
            nome,
            tem_comprimento,
            crdate,
            isactive
            FROM
            FORMA
            WHERE
            id_forma = @@IDENTITY

            COMMIT TRAN
        END
        ELSE
        BEGIN
            SELECT
            1 as erro, 
            'Não foi possível gravar forma, tente novamente'
            ROLLBACK TRAN
        END


`
    }

    return query

}

/*
id_forma
id_material
nome
tem_comprimento
crdate
isactive
*/
