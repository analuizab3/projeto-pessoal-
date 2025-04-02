const validarCPFReal = require('../src/validarCPFReal');

test('Deve identificar CPF válidos e inválidos', () => {
    expect(validarCPFReal('123.456.789-09')).toBe(true);
    expect(validarCPFReal('000.000.000-00')).toBe(false);
    expect(validarCPFReal('111.111.111-11')).toBe(false);
    expect(validarCPFReal('123.456.789-00')).toBe(false); 
});
