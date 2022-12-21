module.exports = payload => {

    let data = payload.data
        , erro = data.nome === '' || data.nome === undefined || data.cnpj === '' || data.cnpj === undefined || data.cep === '' || data.cep === undefined || data.cidade === '' || data.cidade === undefined || data.uf === '' || data.uf === undefined
        , query = `SELECT 1 as erro, 'Erro ao cadastrar assinante, dados incompletos' as mensagem`

    if (!erro) {

        query = `

        BEGIN TRAN
        INSERT INTO ASSINANTE VALUES
        (
            '${data.nome}',
            '${data.cnpj}',
            '${data.cep}',
            '${data.cidade}',
            '${data.uf}',
            GETDATE(),
            0
        )
        IF @@ERROR = 0
        BEGIN
            SELECT 
                0 as erro,
                'Assinante cadastrado com sucesso' as mensagem,
                id_assinante,
                nome,
                cnpj,
                cep,
                cidade,
                uf,
                crdate,
                isactive
            FROM 
                ASSINANTE 
            WHERE 
                ID_ASSINANTE = @@IDENTITY 
            COMMIT TRAN
        END 
        ELSE
        BEGIN
            SELECT 1 as erro, 'Erro ao cadastrar assinante, tente novamente' as mensagem
            ROLLBACK TRAN
        END

`
    }

    return query

}

/*
    [id_assinante] [int] IDENTITY(1,1) NOT NULL,
    [nome] [varchar](200) NOT NULL,
    [cnpj] [char](14) NOT NULL,
    [cep] [char](8) NOT NULL,
    [cidade] [varchar](100) NOT NULL,
    [uf] [char](2) NOT NULL,
    [crdate] [datetime] NOT NULL,
    [isactive] [bit] NOT NULL
*/