import { Product } from '@/domain/entity/product'
import { ProductOutputDto } from '@/application/dto/product.dto'

export interface ProductRepositoryInterface {
    create(product: Product): Promise<ProductOutputDto>
}
