import { isEvenOrOdd } from "../src/even-odd"

describe("Es par o impar", () => {

    it("even-odd", () => {
        const isThisNumber = new isEvenOrOdd();

        expect(isThisNumber.evenOrOdd(3)).toEqual("Es impar")
        expect(isThisNumber.evenOrOdd(2)).toEqual("Es par")
        expect(isThisNumber.evenOrOdd(0)).toEqual("No es un numero valido")
        expect(isThisNumber.evenOrOdd(-10)).toEqual("Es par")
        expect(isThisNumber.evenOrOdd("hola")).toEqual("No es un numero")
        expect(isThisNumber.evenOrOdd()).toEqual("No es un numero")
    })
})