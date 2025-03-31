const verificarEnderecoContemNomeRua = (endereco) => {
    const regexNomeRua = /\D+/;
    const regexNumero = /\d+/;
    return regexNomeRua.test(endereco) && regexNumero.test(endereco);
}

module.exports = verificarEnderecoContemNomeRua;
