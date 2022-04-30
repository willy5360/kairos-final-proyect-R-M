import { dniCheck } from "../src/calcDni"

describe("Checkeo de DNI", () => {

    it("dni Check", () => {

        const isDni = new dniCheck()

        expect(isDni.aValidDni("02768293J")).toEqual("Dni is valid")
        expect(isDni.aValidDni("12345678P")).toEqual("Dni is invalid")
        expect(isDni.aValidDni("123456P")).toEqual("Dni is invalid")
        expect(isDni.aValidDni("")).toEqual("Invalid Input")
        expect(isDni.aValidDni()).toEqual("Invalid Input")
        expect(isDni.aValidDni(1234444)).toEqual("Invalid Input")
    })
})