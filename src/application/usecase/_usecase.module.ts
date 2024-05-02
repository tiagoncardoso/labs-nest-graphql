import { Module } from '@nestjs/common'
import { PrismaModule } from '@/infra/database/prisma/prisma.module'
import { FindUserUsecase } from './find-user.usecase'
import { HealthUsecase } from './health.usecase'

const useCases = [HealthUsecase, FindUserUsecase]

@Module({
    imports: [PrismaModule],
    providers: [...useCases],
    exports: [...useCases],
})
export class UsecaseModule {}
