const testarCodigoPostalCEPCorreto = require('../src/testarCodigoPostalCEPCorreto');

test('Deve identificar CEPs válidos e inválidos', () => {
    expect(testarCodigoPostalCEPCorreto('12345-678')).toBe(true);
    expect(testarCodigoPostalCEPCorreto('1234-5678')).toBe(false);
});

