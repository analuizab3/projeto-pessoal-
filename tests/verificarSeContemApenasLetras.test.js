const verificarSeContemApenasLetras = require('../src/verificarSeContemApenasLetras');

test('Deve rejeitar nomes com números', () => {
    expect(verificarSeContemApenasLetras('Alan123')).toBe(false);
});

test('Deve aceitar nomes válidos', () => {
    expect(verificarSeContemApenasLetras('Alan')).toBe(true);
});
