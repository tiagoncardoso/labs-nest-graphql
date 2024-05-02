import { Injectable } from '@nestjs/common'

@Injectable()
export class HealthUsecase {
    execute(): any {
        return {
            status: 'UP',
        }
    }
}
