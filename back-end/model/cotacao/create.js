module.exports = payload => {

    let data = payload.data
        , erro = data.id_usuario === '' || data.id_usuario === undefined || data.observacao === '' || data.observacao === undefined
        , query = `SELECT 1 as erro, 'Erro ao cadastrar cotação, dados incompletos' as mensagem`


    if (!erro) {

        query = `
        
        BEGIN TRAN    
        INSERT INTO COTACAO VALUES
            (
                ${data.id_usuario},
                '${data.observacao}'
                GETDATE(),
                1
            )
        IF @@ERROR = 0
        BEGIN
        
            SELECT
            0 AS erro,
            'Cotação cadastrada com sucesso.' as mensagem,
            @@IDENTITY AS id_cotacao,
            id_usuario,
            observacao,
            crdate,
            isactive
        FROM
                COTACAO
            WHERE 
            id_cotacao = @@IDENTITY

            COMMIT TRAN

        END
        ELSE
                
            SELECT 1 AS erro, 'Não foi possíve cadastrar a cotação, tente novamente.' as mensagem
            ROLLBACL TRAN

        BEGIN
        END

        `

    }

    return query


}

/*
id_cotacao	int
id_usuario	int
observacao	varchar
crdate	datetime
isactive	datetime
*/