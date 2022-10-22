const draft = form => {
    let draft = block(form.name.input.value, form.namespace.input.value.split(',').map(name => { return name.trim() }), [])
    if (form.name.input.value) {
        form.name.input.className = 'form-control bg-transparent is-valid'
        form.namespace.input.focus()
        if (form.namespace.input.value) {
            form.namespace.input.className = 'form-control bg-transparent is-valid'
            document.getElementById('field-settings').innerHTML = settings(form.namespace.input.value.split(','))
            document.getElementById(`hashable-${draft.namespace.length-1}`).focus()
            let required, unique, shareable, type, privacy, hashable
            for (let index in draft.namespace) {
                required = document.getElementById(`required-${index}`)
                unique = document.getElementById(`unique-${index}`)
                shareable = document.getElementById(`shareable-${index}`)
                type = document.getElementById(`type-${index}`)
                privacy = document.getElementById(`privacy-${index}`)
                hashable = document.getElementById(`hashable-${index}`)
                draft.field.push(field(
                    index,
                    draft.namespace[index],
                    required.options[required.selectedIndex].value,
                    unique.options[unique.selectedIndex].value,
                    shareable.options[shareable.selectedIndex].value,
                    type.options[type.selectedIndex].value,
                    privacy.options[privacy.selectedIndex].value,
                    hashable.options[hashable.selectedIndex].value,
                ))
            }
            draft.namespace.push(`id_${draft.name}`)
            draft.namespace.push('crdate')
            draft.namespace.push('isactive')
            draft.field.push(field(
                draft.field.length,
                `id_${draft.name}`,
                true,
                true,
                true,
                'date',
                'anonymized',
                false
            ))
            draft.field.push(field(
                draft.field.length,
                `crdate`,
                true,
                true,
                true,
                'date',
                'anonymized',
                false
            ))
            draft.field.push(field(
                draft.field.length,
                `isactive`,
                true,
                true,
                true,
                'date',
                'anonymized',
                false
            ))
        }
        if (draft.field.length > 4) { 
            block = block(draft.name, draft.namespace, draft.field)
            observer(block, form) 
        }
        else { return }
    } else {
        return
    }
}