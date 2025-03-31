// src/validarAno.js

function validarAno(ano) {
    const anoAtual = new Date().getFullYear();  // Obtém o ano atual

    // Verifica se o ano informado é o mesmo que o ano atual
    return ano === anoAtual;
}

module.exports = validarAno;
