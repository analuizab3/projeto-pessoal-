const garantirCaracteresSimbolos = (senha) => {
    return senha.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(senha);
}

module.exports = garantirCaracteresSimbolos;
