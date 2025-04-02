const checarEmailFormatoCorreto = require('../src/checarEmailFormatoCorreto');

test('Deve identificar e-mails válidos e inválidos', () => {
    expect(checarEmailFormatoCorreto('teste@dominio.com')).toBe(true);
    expect(checarEmailFormatoCorreto('teste@dominio')).toBe(false);
});
