import { Injectable } from '@nestjs/common'
import { ProductRepositoryInterface } from '@/domain/repository/product.repository.interface'
import { Product } from '@/domain/entity/product'
import { ProductOutputDto } from '@/application/dto/product.dto'

@Injectable()
export class ProductRepository implements ProductRepositoryInterface {
    async create(product: Product): Promise<ProductOutputDto> {
        const productOutput: ProductOutputDto = new ProductOutputDto()
        productOutput.id = 'a5a5a5a55a5a5a5a55a5a'
        productOutput.description = product.productName

        console.log(product)

        return Promise.resolve(undefined)
    }
}
