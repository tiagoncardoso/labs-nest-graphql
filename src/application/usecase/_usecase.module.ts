import { Module } from '@nestjs/common'
import { FindUserUsecase } from './find-user.usecase'
import { HealthUsecase } from './health.usecase'
import { CreateProductUsecase } from '@/application/usecase/create-product.usecase'
import { RepositoryModule } from '@/infra/repository/_repository.module'
import { FindAllProductsUsecase } from '@/application/usecase/find-all-products.usecase'

const useCases = [HealthUsecase, FindUserUsecase, CreateProductUsecase, FindAllProductsUsecase]

@Module({
    imports: [RepositoryModule],
    providers: [...useCases],
    exports: [...useCases],
})
export class UsecaseModule {}
