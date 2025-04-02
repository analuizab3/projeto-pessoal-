const checarIdadeSuficiente = require('../src/checarIdadeSuficiente');

test('Deve identificar idade suficiente ou insuficiente', () => {
    expect(checarIdadeSuficiente(17)).toBe(false);
    expect(checarIdadeSuficiente(18)).toBe(true);
});
