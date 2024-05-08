import { Inject, Injectable } from '@nestjs/common'
import { ProductDto, ProductOutputDto } from '@/application/dto/product.dto'
import { ApiResponse } from '@/application/interface/api-response'
import { Product } from '@/domain/entity/product'
import { ProductRepositoryInterface } from '@/domain/repository/product.repository'

@Injectable()
export class CreateProductUsecase {
    constructor(
        @Inject('ProductRepositoryInterface')
        private readonly productRepository: ProductRepositoryInterface
    ) {}

    public async execute(productDto: ProductDto): Promise<ApiResponse<ProductOutputDto>> {
        const product = new Product(productDto.name, productDto.description, productDto.value)

        if (product.isValid()) {
            const createdProduct = await this.productRepository.create(product)

            return {
                message: 'Product created successfully',
                data: createdProduct,
            }
        }

        throw new Error('Invalid product')
    }
}
