import { ApiRepository } from "../repositories/api-info.repository";

export class ApiInfo{

    static async execute(source){
        const repository = new ApiRepository()
        const info =  await repository.getApiInfo(source)
        return info
    }
}