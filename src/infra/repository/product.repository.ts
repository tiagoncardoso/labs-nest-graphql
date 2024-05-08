import { HttpException, Injectable } from '@nestjs/common'
import { ProductRepositoryInterface } from '@/domain/repository/product.repository'
import { Product } from '@/domain/entity/product'
import { ProductDto, ProductOutputDto } from '@/application/dto/product.dto'
import { PrismaService } from '@/infra/database/prisma/prisma.service'

@Injectable()
export class ProductRepository implements ProductRepositoryInterface {
    constructor(private readonly prisma: PrismaService) {}

    async create(product: Product): Promise<ProductOutputDto> {
        const createdProduct = await this.prisma.product.create({ data: product.productPayload })

        return new ProductOutputDto(createdProduct.id, createdProduct.description)
    }

    findAll(): Promise<ProductDto[]> {
        return this.prisma.product.findMany()
    }

    async findById(id: string): Promise<ProductDto> {
        try {
            return (await this.prisma.product.findUnique({ where: { id } })) ?? new ProductDto()
        } catch (e) {
            throw new HttpException('Product not found', 404)
        }
    }
}
