const validarCPFReal = require('../src/validarCPFReal');

test('Deve identificar um CPF válido', () => {
    expect(validarCPFReal('123.456.789-09')).toBe(true);
});

test('Deve identificar um CPF inválido', () => {
    expect(validarCPFReal('000.000.000-00')).toBe(false);
});
