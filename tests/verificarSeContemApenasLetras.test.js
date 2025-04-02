const verificarSeContemApenasLetras = require('../src/verificarSeContemApenasLetras');

test('Deve identificar nomes válidos e inválidos', () => {
    expect(verificarSeContemApenasLetras('Luiza123')).toBe(false);
    expect(verificarSeContemApenasLetras('Luiza')).toBe(true);
});
