import { Module } from '@nestjs/common'
import { FindUserUsecase } from './user/find-user.usecase'
import { HealthUsecase } from './health/health.usecase'
import { CreateProductUsecase } from '@/application/usecase/product/create-product.usecase'
import { RepositoryModule } from '@/infra/repository/_repository.module'
import { FindAllProductsUsecase } from '@/application/usecase/product/find-all-products.usecase'
import { FindProductByIdUsecase } from '@/application/usecase/product/find-product-by-id.usecase'

const useCases = [HealthUsecase, FindUserUsecase, CreateProductUsecase, FindAllProductsUsecase, FindProductByIdUsecase]

@Module({
    imports: [RepositoryModule],
    providers: [...useCases],
    exports: [...useCases],
})
export class UsecaseModule {}
