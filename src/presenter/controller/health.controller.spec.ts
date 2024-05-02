import { HealthController } from './health.controller'
import { Test, TestingModule } from '@nestjs/testing'
import { HealthUsecase } from '../../application/usecase/health.usecase'

describe('HealthController', () => {
    let healthController: HealthController

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [HealthController],
            providers: [HealthUsecase],
        }).compile()

        healthController = app.get<HealthController>(HealthController)
    })

    describe('Should return status UP when App is correct loading', () => {
        it('Should return status UP', () => {
            expect(healthController.getHealth()).toStrictEqual({ status: 'UP' })
        })
    })
})
