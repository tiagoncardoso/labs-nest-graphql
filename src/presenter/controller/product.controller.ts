import { Body, Controller, Get, Param, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common'
import { ApiResponse } from '@/application/interface/api-response'
import { ProductDto, ProductOutputDto } from '@/application/dto/product.dto'
import { CreateProductUsecase } from '@/application/usecase/product/create-product.usecase'
import { HttpExceptionFilter } from '@/presenter/controller/filter/http-exception.filter'
import { FindAllProductsUsecase } from '@/application/usecase/product/find-all-products.usecase'
import { FindProductByIdUsecase } from '@/application/usecase/product/find-product-by-id.usecase'

@Controller({ path: 'product', version: '1' })
export class ProductController {
    constructor(
        private readonly createProduct: CreateProductUsecase,
        private readonly findAllProducts: FindAllProductsUsecase,
        private readonly findProductById: FindProductByIdUsecase
    ) {}

    @Post('/')
    @UsePipes(new ValidationPipe())
    @UseFilters(new HttpExceptionFilter())
    public async create(@Body() product: ProductDto): Promise<ApiResponse<ProductOutputDto>> {
        return this.createProduct.execute(product)
    }

    @Get('/')
    @UseFilters(new HttpExceptionFilter())
    public async findAll(): Promise<ApiResponse<ProductDto[]>> {
        return this.findAllProducts.execute()
    }

    @Get('/:id')
    @UseFilters(new HttpExceptionFilter())
    public async findById(@Param('id') id: string): Promise<ApiResponse<ProductDto>> {
        return await this.findProductById.execute(id)
    }
}
