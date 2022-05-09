import { CharacterRepository } from "../repositories/character.repository";

export class AllCharUseCase {

    async execute(){
        const repository = new CharacterRepository();
        const chars = await repository.getAllChars()
        return chars
    }
}