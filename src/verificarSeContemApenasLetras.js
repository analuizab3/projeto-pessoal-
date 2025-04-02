const verificarSeContemApenasLetras = (str) => {
    const regex = /^[A-Za-z]+$/;
    return regex.test(str);
};

module.exports = verificarSeContemApenasLetras;
