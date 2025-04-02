const validarAno = require('../src/validarAno');

test('Deve validar o ano atual e invalidar anos diferentes', () => {
    const anoAtual = new Date().getFullYear();
    expect(validarAno(anoAtual)).toBe(true);
    expect(validarAno(anoAtual + 1)).toBe(false);
    expect(validarAno(anoAtual - 1)).toBe(false);
});
