import { CharacterRepository } from "../../src/repositories/character.repository"
import { AllCharUseCase } from "../../src/usecases/all-chars.usecase"
import ALLCHARS from "./../../fixtures/all-chars.json"

jest.mock("../../src/repositories/character.repository")
describe("All character Use Case", () => {

    beforeEach(() => {
        CharacterRepository.mockClear()
    })
    CharacterRepository.mockImplementation(()=> {
        return {
            getAllChars: () =>{
                return ALLCHARS
            }
        }
    })
    it("Should execute correct", async () => {


        const useCase = new AllCharUseCase()
        const allChars = await useCase.execute()

        expect(allChars).toHaveLength(ALLCHARS.length)
    })
})