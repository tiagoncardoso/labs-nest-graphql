import { Product } from '@/domain/entity/product'
import { ProductDto, ProductOutputDto } from '@/application/dto/product.dto'

export interface ProductRepositoryInterface {
    findAll(): Promise<ProductDto[]>
    findById(id: string): Promise<ProductDto>
    create(product: Product): Promise<ProductOutputDto>
}
