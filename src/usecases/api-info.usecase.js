import { ApiRepository } from "../repositories/api-info.repository";

export class ApiCharacterInfo{

    async execute(source){
        const repository = new ApiRepository()
        const info =  await repository.getApiInfo(source)
        return info
    }
}