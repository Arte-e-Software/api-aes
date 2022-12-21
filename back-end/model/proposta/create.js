module.exports = payload => {

    let data = payload.data
        , erro = data.id_usuario === '' || data.id_usuario === undefined || data.id_cotacao === '' || data.id_cotacao === undefined || data.observacao === '' || data.observacao === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível gravar proposta. Dados incompletos.'`

    if (!erro) {

        query = `
        
            BEGIN TRAN
            INSERT INTO PROPOSTA VALUES
            (
            ${id_usuario},
            ${id_cotacao},
            '${observacao}',
            GETDATE(),
            1              
            )
            IF @@ERROR = 0
            BEGIN
                SELECT
                    0 as erro,
                    'Proposta gravada com sucesso' as mensagem,
                    @@IDENTITY AS id_proposta,
                    id_usuario,
                    id_cotacao,
                    observacao,
                    crdate,
                    isactive
                FROM
                    PROPOSTA
                WHERE
                    id_proposta = @@IDENTITY
            END
            ELSE
            BEGIN
                
                SELECT 1 AS erro, 'Não foi possível gravar proposta. Tente novamente' as mensagem

            END

        `

    }


    return query

}

/*
id_proposta
id_usuario
id_cotacao
observacao
crdate
isactive
*/