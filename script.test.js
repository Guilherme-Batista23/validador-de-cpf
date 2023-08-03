/** @jest-environment jsdom */

const { validarCPF } = require("./script")

test('validar verdadeiro', function () {
    var resultado = validarCPF("53298094870")
    expect(resultado).toBe(true);
})

test('validar falso', function () {
    var resultado = validarCPF("12312312312")
    expect(resultado).toBe(false);
})


