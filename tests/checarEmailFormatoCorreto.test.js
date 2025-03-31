const checarEmailFormatoCorreto = require('../src/checarEmailFormatoCorreto');

test('Deve identificar um e-mail válido', () => {
    expect(checarEmailFormatoCorreto('teste@dominio.com')).toBe(true);
});

test('Deve identificar um e-mail inválido', () => {
    expect(checarEmailFormatoCorreto('teste@dominio')).toBe(false);
});
