window.onload = () => {
  // #issue: poderia vir de um config.json
  const form = {
    this: document.getElementById('form-block-create'),
    tab: {
      create: document.getElementById('block-create-tab')
    },
    name: {
      alert: document.getElementById('alert-block-name'),
      input: document.getElementById('input-text-block-name'),
      filter: ',ABCDEFGHIJKLMNOPQRSTUVXWYZabcdefghijklmnopqrstuvxwyz0123456789_ '
    },
    namespace: {
      alert: document.getElementById('alert-block-namespace'),
      input: document.getElementById('input-textarea-block-namespace'),
      filter: ',ABCDEFGHIJKLMNOPQRSTUVXWYZabcdefghijklmnopqrstuvxwyz0123456789_ '
    },
    button: {
      clear: document.getElementById('btn-block-create-clear'),
      create: document.getElementById('btn-block-create')
    }
  }
  enter(form, 'name')
  enter(form, 'namespace')
  form.tab.create.addEventListener('click', event => {
    event.preventDefault()
    form.name.input.focus()
  })
  form.button.clear.addEventListener('click', event => {
    event.preventDefault()
    form.name.input.focus()
    form.name.input.value = ''
    form.namespace.input.value = ''
    document.getElementById('field-settings').innerHTML = ''
    document.getElementById('block-json').innerHTML = ''
    form.name.input.className = 'form-control bg-transparent is-invalid'
    form.namespace.input.className = 'form-control bg-transparent is-invalid'
    form.button.create.setAttribute('disabled', true)
  })
  return
}