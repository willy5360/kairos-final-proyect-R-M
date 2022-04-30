import { checkPalindrome } from "../src/palindrome"

describe("Is it a palindrome?", () => {

    it("palindrome checker", () => {

        const isSentence = new checkPalindrome();

        expect(isSentence.aValidPalindrome("oso")).toEqual("It's a palindrome")
        expect(isSentence.aValidPalindrome("osop")).toEqual("It's not a palindrome")
        expect(isSentence.aValidPalindrome("amo la PALOMA")).toEqual("It's a palindrome")
        expect(isSentence.aValidPalindrome("no se que estoy haciendo aqui... AUXILIO!!!")).toEqual("It's not a palindrome")
        expect(isSentence.aValidPalindrome("123454321")).toEqual("It's a palindrome")
        expect(isSentence.aValidPalindrome(123456)).toEqual("Invalid Input")
        expect(isSentence.aValidPalindrome("")).toEqual("Invalid Input")
    })
})