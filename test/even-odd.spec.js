import { isEvenOrOdd } from "../src/even-odd"

describe("Es par o impar", () => {

    const validate = new isEvenOrOdd().verifier;
    it("even-odd", () => {

        expect(validate(3)).toEqual("Es impar")
        expect(validate(2)).toEqual("Es par")
        expect(validate(0)).toEqual("No es un numero valido")
        expect(validate(-10)).toEqual("Es par")
        expect(validate("hola")).toEqual("No es un numero")
        expect(validate()).toEqual("No es un numero")
    })
})