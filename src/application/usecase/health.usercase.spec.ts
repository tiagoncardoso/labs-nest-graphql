import { HealthUsecase } from './health.usecase'

describe('HealthUsecase', () => {
    let healthUsecase: HealthUsecase

    beforeEach(() => {
        healthUsecase = new HealthUsecase()
    })

    describe('execute', () => {
        it('Should return status UP', () => {
            expect(healthUsecase.execute()).toEqual({ status: 'UP' })
        })
    })
})
