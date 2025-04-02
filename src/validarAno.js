const validarAno = (ano) => {
    const anoAtual = new Date().getFullYear();
    return ano === anoAtual;
};

module.exports = validarAno;
