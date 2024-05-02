import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ControllerModule } from '@/presenter/controller/_controller.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        ControllerModule,
    ],
})
export class AppModule {}
