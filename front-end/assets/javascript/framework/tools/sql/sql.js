document.onload = (() => {

    let status = 'waiting'
    document.getElementById('sql-terminal-tab').addEventListener('click', event => {

        document.getElementById('sql-server-input').focus()

    })
    sql('sql-server-btn-clear','sql-server-btn-run', 'sql-server-input', 'sql-server-target', status)

})()

function sql(clear, run, input, target, status) {

    clear = document.getElementById(clear)
    run = document.getElementById(run)
    input = document.getElementById(input)
    target = document.getElementById(target)
    tab = document.getElementById(target.id.replace('target', 'tab'))

    clear.addEventListener('click', (event) => {
        event.preventDefault()
        input.value = ''
        target.innerHTML = ''
        tab.innerHTML = ''
        input.focus()
    })

    run.addEventListener('click', event => {

        event.preventDefault()

        let arrowinput = input.value.split('=>')
            , query = arrowinput[0]
            , format = arrowinput[1]

        tab.innerHTML = `
                        <div class="d-flex align-items-center text-dark">
                            <i class="bi bi-search"></i>&nbsp;&nbsp;Query
                        </div>`

        target.innerHTML = `
                        <div class="d-flex align-items-center text-dark">
                            <strong>Analisando a query...</strong>
                            <div class="spinner-border spinner-border-sm ms-auto" role="status" aria-hidden="true"></div>
                        </div>`
        
        run.className = 'form-control btn btn-outline-success mb-2'
        run.innerHTML = 'Aguarde o retorno do servidor'
        run.disabled = true

        if (!format) { format = 'table' }

        let payload = {

            "query": query,
            "format": format,
            "target": target.id,
            "btn": run.id,
            "status": status

        }

        call('sql', payload, (package) => { // #issue: como enviar o callback para a SQL()?

            let payload = package.payload
                , error = package.error
                , err = payload
                , btn = document.getElementById(payload.btn)
                , target = document.getElementById(payload.target)
                , tab = document.getElementById(target.id.replace('target', 'tab'))

            if (error) {

                err = payload.status //.originalError.info.message

                alert('Erro', err, 'danger')
                console.log('Sql error', payload.status)

                tab.innerHTML = ''
                target.innerHTML = ''
                run.className = 'form-control btn btn-success mb-2'
                run.innerHTML = `Executar Query <i class="bi bi-server"></i>`
                run.disabled = false

            } else {

                if (payload.status === 'waiting') {

                    tab.innerHTML = `
                    <div class="d-flex align-items-center text-dark">
                        <div class="spinner-border spinner-border-sm ms-auto" role="status" aria-hidden="true"></div>
                        &nbsp;&nbsp;Processando
                    </div>`

                    target.innerHTML = `
                    <div class="d-flex align-items-center text-dark">
                        <strong>Processando...</strong>
                        <div class="spinner-border spinner-border-sm ms-auto" role="status" aria-hidden="true"></div>
                    </div>`

                    run.className = 'form-control btn btn-outline-success mb-2'
                    run.innerHTML = 'Aguarde o retorno do servidor'
                    run.disabled = true

                } else {

                    tab.innerHTML = `<i class="bi bi-files"></i></spam>&nbsp;&nbsp;Retorno`
                    target.innerHTML = payload.status
                    run.className = 'form-control btn btn-success mb-2'
                    run.innerHTML = `Executar Query <i class="bi bi-server"></i>`
                    run.disabled = false

                }
            }
        }) 
        return true
    })
}