import { Injectable } from "@nestjs/common";

@Injectable()
export class FindUserUsecase {
    async execute() {
        return {
            id: 1,
            name: "John Doe",
            email: "john@gmail.com",
        }
    }
}