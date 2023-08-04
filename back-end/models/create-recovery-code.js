module.exports = (id_usuario, recovery_code) => {

    let query = `

    BEGIN TRAN

    INSERT INTO recovery_code VALUES
    (

        ${id_usuario},
        '${recovery_code}',
        DATEADD(hour, 1, GETDATE()),
        GETDATE(),
        1

    )

    IF @@ERROR = 0
    BEGIN

        COMMIT TRAN
        SELECT @@IDENTITY AS id_recovery_code
        
    END
    ELSE
    BEGIN
        
        ROLLBACK TRAN
        SELECT 0 AS id_recovery_code

    END

`

    return query


}


/*
CREATE TABLE recovery_code
(
    id_recovery_code INT NOT NULL PRIMARY KEY IDENTITY,
    id_usuario INT NOT NULL,
    recovery_code [CHAR](8) NOT NULL,
    validade DATETIME NOT NULL,
    crdate DATETIME NOT NULL,
    ativo BIT NOT NULL
    
);
GO
*/