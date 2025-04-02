const validarCartãoCreditoCorreto = require('../src/validarCartaoCreditoCorreto');

test('Deve identificar corretamente se o cartão de crédito é válido ou inválido', () => {
    
    expect(validarCartãoCreditoCorreto('4111 1111 1111 1111')).toBe(true);  

    expect(validarCartãoCreditoCorreto('0000 0000 0000 0000')).toBe(false); 
});
