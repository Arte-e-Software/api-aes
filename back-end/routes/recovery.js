const express = require('express')
    , router = express.Router()
    , nodemailer = require('nodemailer')
    , axios = require('axios')

module.exports = router.post('/recovery', (req, res) => {

    let email = req.body.email

    const conn = require('../db/conn')
        , sql = require('mssql')
        , db = conn['db_08310130000132']
        , query = `SELECT sysadminid FROM sysadmin WHERE email = '${email}'`

    sql.connect(db).then(() => {

        return sql.query(query)

    })
        .then(result => {

            sql.close();

            if (result.recordset.length > 0) {

                let recoveryCode = Math.floor(Math.random() * 999999 - 199999) + 199999

                // Bloco do email com nodemailer usando sendgrid
                async function main() {

                    let transporter = nodemailer.createTransport(
                        {
                            host: 'smtp.sendgrid.net',
                            port: 25,
                            secure: true,
                            auth: {
                                user: 'apikey',
                                pass: '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'
                            }
                        }
                    )

                    let info = await transporter.sendMail(
                        {
                            from: 'pedro.com@me.com',
                            to: email,
                            subject: 'Código de recuperação de senha - CotaAço.com',
                            text: `Código: ${recoveryCode}`
                        }
                    )

                }

                main()
                    .catch(console.error)
                // fim do bloco email com nodemailer usando sendgrid

                // Bloco do SMS com a Comtele

                axios.post('https://sms.comtele.com.br/api/v2/send', { "Sender": "1", "Receivers": "11994923850", "Content": `"Código: ${recoveryCode}"` }, {
                    headers: {
                        'content-type': 'application/json',
                        'auth-key': 'caeee09e-afe5-4968-9963-6167b8eb11e7'
                    }
                })

                    .then(res => {

                        console.log(res)

                    })

                    .catch(err => {

                        console.log(err)

                    })

                // fim do bloco SMS com a Comtele

            } else {

                res.json({ logged: false, message: 'Dados incorretos', token: undefined })

            }

        })
        .catch(err => {

            sql.close();
            res.json({ logged: false, message: 'Dados incorretos', token: undefined })

        })

    sql.on('error', err => {

        res.json({ logged: false, massage: 'Erro ao conectar o servidor', token: undefined })

    })

})