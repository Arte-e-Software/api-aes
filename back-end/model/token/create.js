module.exports = payload => {

    let data = payload.data
        , erro = data.id_usuario === '' || data.id_usuario === undefined || data.token === '' || data.token === undefined || data.hash === '' || data.hash === undefined || data.validade === '' || data.validade === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível cadastrar token. Dados incompletos'`

    if (!erro) {


        query = `
            
            BEGIN TRAN
            INSERT INTO TOKEN VALIUES
            (
                ${id_usuario},
                '${token}',
                '${hash}',
                '${validade}',
                NULL,
                GETDATE(),
                1                
            )

            IF @@ERROR = 0
            BEGIN
                SELECT 
                    0 AS erro, 
                    'Token gerado com sucesso' as mensagem,
                    @@IDENTITY AS id_token,
                    id_usuario,
                    token,
                    hash,
                    validade,
                    data_uso,
                    crdate,
                    isactive
                FROM
                    TOKEN
                WHERE
                    id_token = @@IDENTITY
            END
            ELSE
            BEGINE
                SELECT 1 AS erro, 'Não foi possível gerar o token. Tente novamente' as mensagem
            END

            `


    }

    return query

}


/*
id_token
id_usuario
token
hash
validade
data_uso
crdate
isactive
*/