module.exports = (id_usuario, token) => {

    let query = `
    
    BEGIN TRAN

        INSERT INTO TOKEN VALUES
        (
            ${id_usuario},
            '${token}',
            DATEADD(month, 6, GETDATGE()),
            GETDATE(),
            1
        )
    
        IF @@ERROR = 0
        BEGIN

            COMMIT TRAN
            SELECT @@IDENTITY AS id_token

        END
        ELSE
        BEGIN

            ROLLBACK TRAN
            SELECT 0 AS id_token

        END

        `

    return query
}

/*

CREATE TABLE token
(
    id_token INT NOT NULL PRIMARY KEY IDENTITY, 
    id_usuario INT NOT NULL,
    token [CHAR](64) NOT NULL,
    validade DATETIME NOT NULL,
    crdate DATETIME NOT NULL,
    ativo BIT NOT NULL
);
GO

*/
