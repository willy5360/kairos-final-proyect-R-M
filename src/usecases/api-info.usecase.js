import { ApiRepository } from "../repositories/api-info.repository";

export class ApiCharacterInfo{

    async execute(){
        const repository = new ApiRepository()
        const info =  await repository.getCharacterApiInfo()
        return info
    }
}