const garantirCaracteresSimbolos = require('../src/garantirCaracteresSimbolos');

test('Deve identificar senhas válidas e inválidas', () => {
    expect(garantirCaracteresSimbolos('Senha@123')).toBe(true);
    expect(garantirCaracteresSimbolos('Senha123')).toBe(false);
});
