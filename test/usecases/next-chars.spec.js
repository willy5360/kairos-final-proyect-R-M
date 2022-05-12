import { CharacterRepository } from "../../src/repositories/character.repository";
import { NextCharacters } from "../../src/usecases/next-chars.usecase";

import NEXTDATA from "../../fixtures/next.chars.json";

jest.mock("../../src/repositories/character.repository");

describe("Get the next 20 character usecase", () => {

    beforeEach(() => {
        CharacterRepository.mockClear();
    });


    CharacterRepository.mockImplementation(() => {
        return {
            getNext20chars: () => {
                return NEXTDATA;
            },
        };
    });
    
    it("Should return the next 6 characters", async () => {

        const page = 42;

        const useCase = new NextCharacters();
        const nextChars = await useCase.execute(page);

        expect(nextChars.results).toHaveLength(NEXTDATA.results.length);
    });

    it("Should return null when page is greater than 42" , async() => {

        const page = 42

        const useCase = new NextCharacters();
        const nextChars = await useCase.execute(page);

        expect(nextChars.info.next).toBeNull()
    })

    it("Should return less or equal to 20 chars at the last page", async () => {

        const page = 42

        const useCase = new NextCharacters();
        const nextChars = await useCase.execute(page);

        expect(nextChars.results.length).toBeLessThanOrEqual(20)

    })
});
