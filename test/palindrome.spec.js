import { checkPalindrome } from "../src/func-test/palindrome"

describe("Is it a palindrome?", () => {

    const validate = new checkPalindrome().verifier;
    it("palindrome checker", () => {

        expect(validate("oso")).toEqual("It's a palindrome")
        expect(validate("Logra Casillas allí sacar gol")).toEqual("It's a palindrome")
        expect(validate("osop")).toEqual("It's not a palindrome")
        expect(validate("amo la PALOMA")).toEqual("It's a palindrome")
        expect(validate("no se que estoy haciendo aqui... AUXILIO!!!")).toEqual("It's not a palindrome")
        expect(validate("123454321!")).toEqual("It's a palindrome")
        expect(validate(123456)).toEqual("Invalid Input")
        expect(validate("")).toEqual("Invalid Input")
        expect(validate("achcá")).toEqual("It's a palindrome")
    })
})