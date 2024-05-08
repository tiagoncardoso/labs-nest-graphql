import { Inject, Injectable } from '@nestjs/common'
import { ProductRepositoryInterface } from '@/domain/repository/product.repository'
import { ApiResponse } from '@/application/interface/api-response'
import { ProductDto } from '@/application/dto/product.dto'

@Injectable()
export class FindAllProductsUsecase {
    constructor(@Inject('ProductRepositoryInterface') private readonly productRepository: ProductRepositoryInterface) {}

    public async execute(): Promise<ApiResponse<ProductDto[]>> {
        const products = await this.productRepository.findAll()

        return {
            message: `Product(s) found: ${products.length}`,
            data: products,
        }
    }
}
