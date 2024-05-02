import { Injectable } from '@nestjs/common'
import { ProductDto, ProductOutputDto } from '@/application/dto/product.dto'
import { ApiResponse } from '@/application/interface/api-response'
import { Product } from '@/domain/entity/product'

@Injectable()
export class CreateProductUsecase {
    constructor() {
        // TODO: É preciso conectar as usecases com o repository que utilizará Prisma
    }

    public async execute(productDto: ProductDto): Promise<ApiResponse<ProductOutputDto>> {
        const product = new Product(productDto.name, productDto.description, productDto.value)

        if (product.isValid()) {
            return new Promise(() => {
                return new ProductOutputDto()
            })
        }

        throw new Error('Invalid product')
    }
}
