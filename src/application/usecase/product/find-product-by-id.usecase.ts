import { Inject, Injectable } from '@nestjs/common'
import { ProductRepositoryInterface } from '@/domain/repository/product.repository'
import { ApiResponse } from '@/application/interface/api-response'
import { ProductDto } from '@/application/dto/product.dto'

@Injectable()
export class FindProductByIdUsecase {
    constructor(@Inject('ProductRepositoryInterface') private readonly productRepository: ProductRepositoryInterface) {}

    public async execute(id: string): Promise<ApiResponse<ProductDto>> {
        const product = await this.productRepository.findById(id)

        return {
            message: product?.id ? 'Product found' : 'Product not found',
            data: product,
        }
    }
}
