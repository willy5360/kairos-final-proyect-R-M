import { CharacterRepository } from "../repositories/character.repository";

export class FilteredCharacters{

    async execute(name, status){
        const repository = new CharacterRepository()
        const allFilteredChars = repository.getFilteredChars(name, status)
        return allFilteredChars; 
    }

}