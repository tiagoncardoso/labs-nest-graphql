import { Module } from "@nestjs/common";
import { PrismaModule } from "src/infra/database/prisma/prisma.module";
import { FindUserUsecase } from "./find-user.usecase";
import { HealthUsecase } from "./health.service";

const useCases = [
    HealthUsecase,
    FindUserUsecase,
]

@Module({
    imports: [PrismaModule],
    providers: [...useCases],
    exports: [...useCases],
})
export class UsecaseModule {}
