const observer = (block, form) => {
    // #issue: pegar set dos entries do draft. cheguei perto, eu consigo, deixei pra depois
    let setting = ['required', 'unique', 'shareable', 'type', 'privacy', 'hashable'], 
    entityJson = document.getElementById('block-json'),
    select
    entityJson.innerHTML = helperJson(block)
    form.button.create.disabled = false
    setting.map(set => {
        for (i = 0; i < block.field.length - 3; i++) {
            select = document.getElementById(`${set}-${i}`)
            select.addEventListener('change', event => {
                block.field[i].settings[set] = select.options[select.selectedIndex].value
                entityJson.innerHTML = helperJson(block)
            })
        }
    })
    document.getElementById('block-json').innerHTML = helperJson(block)
    return block
}
function helperJson(block) {
    return `
    <div class="table-responsive mt-2 mb-0">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>block Json</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <textarea class="form-control bg-transparent" style="height: 20rem;">${JSON.stringify(block)}</textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>`
}