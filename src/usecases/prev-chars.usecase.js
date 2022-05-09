import { CharacterRepository } from "../repositories/character.repository";

export class PreviousCharacters{

    async execute(prev){
        const repository = new CharacterRepository()
        const prevChars = repository.getPrevious20Chars(prev)
        return prevChars
    }
}