// tests/validarAno.test.js

const validarAno = require('../src/validarAno.js');

test('Deve validar que o ano informado é o ano atual', () => {
    const anoAtual = new Date().getFullYear();
    // Testa se o ano atual é validado corretamente
    expect(validarAno(anoAtual)).toBe(true);
});

test('Deve invalidar um ano diferente do ano atual', () => {
    const anoAtual = new Date().getFullYear();
    const anoDiferente = anoAtual + 1;  // Um ano futuro
    // Testa se um ano diferente do atual é invalidado
    expect(validarAno(anoDiferente)).toBe(false);
});

test('Deve invalidar um ano passado', () => {
    const anoAtual = new Date().getFullYear();
    const anoPassado = anoAtual - 1;  // Um ano passado
    // Testa se um ano passado é invalidado
    expect(validarAno(anoPassado)).toBe(false);
});
