import { ApiRepository } from "../../src/repositories/api-info.repository"
import APIDATA from "../../fixtures/character-api-info.json"
import { ApiInfo } from "../../src/usecases/api-info.usecase"

jest.mock("../../src/repositories/api-info.repository")

describe("Api info return characters info", ()=> {

    beforeEach(() => {
        ApiRepository.mockClear();
    })

    ApiRepository.mockImplementation(() => {
        return {
            getApiInfo: () => {
                return APIDATA
            }
        }
    })

    it("Should return 829 characters", async () => {

        const response = await ApiInfo.execute("character")

        expect(response.info.count).toBe(826)

    })

})