const validarCartãoCreditoCorreto = require('../src/validarCartãoCreditoCorreto');

test('Deve identificar um cartão de crédito válido', () => {
    expect(validarCartãoCreditoCorreto('4111 1111 1111 1111')).toBe(true);
});

test('Deve identificar um cartão de crédito inválido', () => {
    expect(validarCartãoCreditoCorreto('0000 0000 0000 0000')).toBe(false);
});
