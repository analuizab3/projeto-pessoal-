const garantirCaracteresSimbolos = require('../src/garantirCaracteresSimbolos');

test('Deve identificar senha válida com símbolos', () => {
    expect(garantirCaracteresSimbolos('Senha@123')).toBe(true);
});

test('Deve identificar senha inválida sem símbolos', () => {
    expect(garantirCaracteresSimbolos('Senha123')).toBe(false);
});
