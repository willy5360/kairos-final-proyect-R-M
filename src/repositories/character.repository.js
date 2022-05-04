import axios from "axios";

export class CharacterRepository {
    async getCharacter(id) {
        return await (
            await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        ).data;
    }

    async getAllChars(){
        return await (
            await axios.get("https://rickandmortyapi.com/api/character/")
        ).data.results
    }
}
