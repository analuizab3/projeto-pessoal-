const verificarEnderecoContemNomeRua = require('../src/verificarEnderecoContemNomeRua');

test('Deve identificar endereço válido com nome de rua e número', () => {
    expect(verificarEnderecoContemNomeRua('Rua A, 123')).toBe(true);
});

test('Deve identificar endereço inválido sem nome de rua', () => {
    expect(verificarEnderecoContemNomeRua('123')).toBe(false);
});
