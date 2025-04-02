const confirmarTelefoneValido = require('../src/confirmarTelefoneValido');

test('Deve identificar telefones válidos e inválidos', () => {
    expect(confirmarTelefoneValido('(11) 98765-4321')).toBe(true);
    expect(confirmarTelefoneValido('(11) 1234-5678')).toBe(false);
});
