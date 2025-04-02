const validarCPFReal = (cpf) => {
    
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (!regex.test(cpf)) {
        return false;
    }
    cpf = cpf.replace(/\D/g, '');

    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let soma = 0;
    let resto;

    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(9))) {
        return false;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
};

module.exports = validarCPFReal;
