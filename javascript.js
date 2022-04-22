//Ativando e desativando o card "Sinopse"

function showSinopse (num) {
    var idSinopse = "sinopse" + num;
    var element = document.getElementById(idSinopse);
    element.classList.add("show-sinopse");
}

function hideSinopse(num) {
    var idSinopse = "sinopse" + num;
    var element = document.getElementById(idSinopse);
    element.classList.remove("show-sinopse");
}

