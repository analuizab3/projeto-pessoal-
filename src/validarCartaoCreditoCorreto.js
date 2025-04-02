const validarCartãoCreditoCorreto = (cartao) => {
    const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    cartao = cartao.replace(/\s+/g, '');
    return regex.test(cartao);
}

module.exports = validarCartãoCreditoCorreto;
