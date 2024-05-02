import { Module } from '@nestjs/common'
import { UsecaseModule } from '@/application/usecase/_usecase.module'
import { HealthController } from './health.controller'
import { ProductController } from '@/presenter/controller/product.controller'
import { UserController } from '@/presenter/controller/user.controller'

@Module({
    imports: [UsecaseModule],
    controllers: [HealthController, UserController, ProductController],
})
export class ControllerModule {}
