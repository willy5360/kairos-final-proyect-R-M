import { dniCheck } from "../src/calcDni"

describe("DNI checker", () => {

    const validate = new dniCheck().aValidDni
    
    const status = (dni) => validate(dni).status
    const message = (dni) => validate(dni).message
    
    it("when Dni is valid", () => {

        const dni = "02768293J"

        expect(status(dni)).toEqual("Ok")
        expect(message(dni)).toEqual("")

    })

    it("when Dni is invalid", () => {

        const dni = "12345678P"

        expect(status(dni)).toEqual("Error")
        expect(message(dni)).toEqual("DNI must have 9 characters where 8 are numbers and the last one is a letter")

    })

    it("when the argument is not a valid input", () => {

        const dni = 123456789

        expect(status(dni)).toEqual("Invalid")
        expect(message(dni)).toEqual("Invalid Input")

    })
})