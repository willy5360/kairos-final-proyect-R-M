import { CharacterRepository } from "../repositories/character.repository";

export class FilteredCharacters{

    async execute(name, status){
        const repository = new CharacterRepository()
        return repository.getFilteredChars(name, status)
    }

}