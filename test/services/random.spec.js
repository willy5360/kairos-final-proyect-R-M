import { UtilsServices } from "../../src/services/utils.services"

describe("Random utility", () => {

    it("should return a number", () => {
        const numberTest = 10

        const randomNumber = UtilsServices.random(numberTest)

        expect(randomNumber).toBeLessThanOrEqual(numberTest)
    })
})