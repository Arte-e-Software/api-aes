module.exports = payload => {

    let data = payload.data
        , erro = data.id_token === '' || data.id_token === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível ler TOKEN, dados incompletos' as mensagem`

    if (!erro) {

        // pensar em trabalhar o EOF aqui #issue

        query = `
        
        SELECT
            0 as erro,
            'TOKEN localizado com sucesso.' as mensagem,
            id_token,
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
            id_token = ${data.id_token}

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