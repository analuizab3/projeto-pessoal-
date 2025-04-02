const garantirCaracteresSimbolos = (senha) => {
    const regex = /[!@#$%^&*(),.?":{}|<>]/;
    return regex.test(senha);
};

module.exports = garantirCaracteresSimbolos;
