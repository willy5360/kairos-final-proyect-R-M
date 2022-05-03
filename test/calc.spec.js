import { Calculadora } from "../src/func-test/calc";

describe("Calculadora", () => {

    it("sum", ()=> {

        const a = 1;
        const b = 3

        const calc = new Calculadora();

        expect(calc.sum(a,b)).toEqual(4)
        expect(calc.sum(5,5)).toEqual(10)
    })
})