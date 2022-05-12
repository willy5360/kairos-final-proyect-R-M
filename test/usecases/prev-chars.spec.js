import PREVCHARACTERS from "../../fixtures/character-api-info.json"
import { CharacterRepository } from "../../src/repositories/character.repository"
import { PreviousCharacters } from "../../src/usecases/prev-chars.usecase"

jest.mock("../../src/repositories/character.repository")
describe("get the previous 20 characters usecase", () =>  { 

    beforeEach(() => {
        CharacterRepository.mockClear()
    })

    CharacterRepository.mockImplementation(() => {
        return {
            getPrevious20Chars: () => {
                return PREVCHARACTERS
            }
        }
    })

    it("Should return null when page is 1", async () => {
        
        const page = 1

        const useCase = new PreviousCharacters();
        const prevChars = await useCase.execute(page)

        expect(prevChars.info.prev).toBeNull()
    })

    
})