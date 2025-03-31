const confirmarTelefoneValido = require('../src/confirmarTelefoneValido');

test('Deve identificar um telefone válido', () => {
    expect(confirmarTelefoneValido('(11) 98765-4321')).toBe(true);
});

test('Deve identificar um telefone inválido', () => {
    expect(confirmarTelefoneValido('(11) 1234-5678')).toBe(false);
});
