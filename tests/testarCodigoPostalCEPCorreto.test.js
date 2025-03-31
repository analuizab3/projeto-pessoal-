const testarCodigoPostalCEPCorreto = require('../src/testarCodigoPostalCEPCorreto');

test('Deve identificar um CEP válido', () => {
    expect(testarCodigoPostalCEPCorreto('12345-678')).toBe(true);
});

test('Deve identificar um CEP inválido', () => {
    expect(testarCodigoPostalCEPCorreto('1234-5678')).toBe(false);
});
