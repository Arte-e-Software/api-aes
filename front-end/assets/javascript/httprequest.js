let httpRequest = (api, sucesso, erro) => {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let objJson = JSON.parse(this.responseText);
            if (objJson.erro) { if (erro) { erro(objJson.erro); } else { helperErro(objJson.erro); } } else { sucesso(objJson); }
        }
        if (this.readyState == 4 && this.status == 500) { let objJson = { erro: { msg: this.responseText } }; helperErro(objJson.erro); }
    };
    xhttp.open("GET", api, true);
    xhttp.send();

};

let helperErro = erro => {

    let target = erro.target;

    if (!target) { target = 'divErro'; }

    let divErro = document.getElementById(target),
        htmlErro = '';

    htmlErro += '<div class="alert alert-danger alert-dismissible fade show m-2" role="alert">';
    htmlErro += erro.msg;
    htmlErro += '<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
    htmlErro += '<span aria-hidden="true">&times;</span>';
    htmlErro += '</button>';
    htmlErro += '</div>';

    divErro.innerHTML = htmlErro;

};