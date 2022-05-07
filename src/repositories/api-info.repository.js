import axios from "axios";

export class ApiRepository {

    async getCharacterApiInfo() {
        return await (
            await axios.get("https://rickandmortyapi.com/api/character/")
        ).data.info
    }
}