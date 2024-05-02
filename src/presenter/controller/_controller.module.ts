import { Module } from '@nestjs/common'
import { UsecaseModule } from '@/application/usecase/_usecase.module'
import { HealthController } from './health.controller'

@Module({
    imports: [UsecaseModule],
    controllers: [HealthController],
})
export class ControllerModule {}
