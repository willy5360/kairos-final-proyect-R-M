import { OneCharUseCase } from "../../src/usecases/one-char.usecase"
import ONECHARACTER from "../../fixtures/one-char.json"
import { CharacterRepository } from "../../src/repositories/character.repository";

jest.mock("../../src/repositories/character.repository");


describe("One character use cases",()=> {

    beforeEach(() => {
        CharacterRepository.mockClear();
    })

    CharacterRepository.mockImplementation(() => {
        return {
            getCharacter: () => {
                return ONECHARACTER;
            }
        }
    })

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