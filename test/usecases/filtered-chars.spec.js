import { FilteredCharacters } from "../../src/usecases/filtered-chars.usecase"

describe("Filtered character use case", () => {

    it("should return 16 characters filtered by name morty and status unknown", async () => {


        const char = {
            name: "morty",
            status: "unknown"
        }

        const useCase = new FilteredCharacters()
        const filteredCharacter = await useCase.execute(char.name, char.status)

        expect(filteredCharacter).toHaveLength(16)
    })
})