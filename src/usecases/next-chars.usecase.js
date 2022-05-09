import { CharacterRepository } from "../repositories/character.repository";

export class NextCharacters{
    async execute(next){
        const repository  = new CharacterRepository()
        const nextChars = repository.getNext20chars(next)
        return nextChars
    }
}