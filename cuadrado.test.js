const calculadora = require('./server');

test('El cuadrado de 4 debería dar 16', () => {
    expect(calculadora.cuadrado(4)).toBe(16);
});
