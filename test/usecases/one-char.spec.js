import { OneCharUseCase } from "../../src/usecases/one-char.usecase"

describe("One character use cases",()=> {

    it("Should return one object", async () => {

        let firstCharacter = 1

        const useCase = new OneCharUseCase
        const char = useCase.execute(firstCharacter)

        expect(char).toBeInstanceOf(Object)

    })

    it("Should return one object", async () => {

        let firstCharacter = 500

        const useCase = new OneCharUseCase
        const char = await useCase.execute(firstCharacter)

        expect(char).toBeInstanceOf(Object)
    })

})