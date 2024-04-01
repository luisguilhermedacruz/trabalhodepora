function avaliar() {
    var respostas = document.forms["questionnaire"];
    var count = 0;

    for (var i = 0; i < respostas.length; i++) {
        if (respostas[i].checked && respostas[i].value === "profissional") {
            count++;
        } else if (respostas[i].checked && respostas[i].value === "consenso") {
            count++;
        } else if (respostas[i].checked && respostas[i].value === "educacao") {
            count++;
        } else if (respostas[i].checked && respostas[i].value === "processo") {
            count++;
        } else if (respostas[i].checked && respostas[i].value === "nao_pesquisei") {
            count++;
        }
    }

    if (count >= 4) {
        document.getElementById("resultado").innerHTML = "O candidato foi APROVADO!";
    } else {
        document.getElementById("resultado").innerHTML = "O candidato foi REPROVADO";
    }
}