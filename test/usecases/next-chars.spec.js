import { ApiRepository } from "../../src/repositories/api-info.repository";
import { CharacterRepository } from "../../src/repositories/character.repository";
import { NextCharacters } from "../../src/usecases/next-chars.usecase";

import APIDATA from "../../fixtures/character-api-info.json";
import NEXTDATA from "../../fixtures/next.char.json";

jest.mock("../../src/repositories/api-info.repository");
jest.mock("../../src/repositories/character.repository");

describe("Get the next 20 character usecase", () => {
    beforeEach(() => {
        ApiRepository.mockClear();
        CharacterRepository.mockClear();
    });

    ApiRepository.mockImplementation(() => {
        return {
            getApiInfo: () => {
                return APIDATA;
            },
        };
    });

    CharacterRepository.mockImplementation(() => {
        return {
            getNext20chars: () => {
                return NEXTDATA;
            },
        };
    });
    it("Should return the next 20 characters", async () => {
        const page = 5;

        const useCase = new NextCharacters();
        const nextChars = await useCase.execute(page);

        expect(nextChars.results).toHaveLength(NEXTDATA.results.length);
    });

    it("Should return null when page is greater than 42" , async() => {

        const page = APIDATA.info.pages

        const useCase = new NextCharacters();
        const nextChars = await useCase.execute(page);

        expect(nextChars.info.next).toBeNull()
    })
});
