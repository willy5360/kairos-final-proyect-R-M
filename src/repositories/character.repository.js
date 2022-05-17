import axios from "axios";

export class CharacterRepository {
    async getCharacter(id) {
        return await (
            await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        ).data;
    }

    async getAllChars() {
        return (await axios.get("https://rickandmortyapi.com/api/character/"))
            .data.results;
    }

    async getNext20chars(next) {
        const nextChars = await (
            await axios.get(
                `https://rickandmortyapi.com/api/character/?page=${next}`
            )
        ).data;
        return nextChars.info.next ? nextChars.results : null;
    }

    async getPrevious20Chars(previous) {
        const previousChars = await (
            await axios.get(
                `https://rickandmortyapi.com/api/character/?page=${previous}`
            )
        ).data;
        return previousChars.info.prev ? previousChars.results : null;
    }

    async getFilteredChars(name, status) {
        const filtered = await axios
            .get(
                `https://rickandmortyapi.com/api/character/?name=${name.toLowerCase()}${
                    status ? `&status=${status}` : ""
                }`
            )
            .catch((error) => {
                console.log("Error", error.response);
            });

        return filtered ? filtered.data.results : null;
    }
}
