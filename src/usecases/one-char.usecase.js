import { CharacterRepository } from "../repositories/character.repository";

export class OneCharUseCase {

    async execute(id){
        const repository = new CharacterRepository();
        const char = await repository.getCharacter(id)
        return char
    }
}