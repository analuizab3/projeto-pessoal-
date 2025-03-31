const verificarSeContemApenasLetras = (nome) => {
    return /^[A-Za-z]+$/.test(nome);
}

module.exports = verificarSeContemApenasLetras;
