import { Controller, Get } from '@nestjs/common'
import { HealthUsecase } from '@/application/usecase/health/health.usecase'

@Controller({
    path: 'health',
    version: '1',
})
export class HealthController {
    constructor(private readonly healthUsecase: HealthUsecase) {}

    @Get('/')
    getHealth(): any {
        return this.healthUsecase.execute()
    }
}
