const confirmarTelefoneValido = (telefone) => {
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return regex.test(telefone);
}

module.exports = confirmarTelefoneValido;
