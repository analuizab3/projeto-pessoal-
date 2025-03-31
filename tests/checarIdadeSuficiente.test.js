const checarIdadeSuficiente = require('../src/checarIdadeSuficiente');

test('Deve identificar idade insuficiente', () => {
    expect(checarIdadeSuficiente(17)).toBe(false);
});

test('Deve identificar idade suficiente', () => {
    expect(checarIdadeSuficiente(18)).toBe(true);
});
