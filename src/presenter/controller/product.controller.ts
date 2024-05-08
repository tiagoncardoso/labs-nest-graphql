import { Body, Controller, Get, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common'
import { ApiResponse } from '@/application/interface/api-response'
import { ProductDto, ProductOutputDto } from '@/application/dto/product.dto'
import { CreateProductUsecase } from '@/application/usecase/create-product.usecase'
import { HttpExceptionFilter } from '@/presenter/controller/filter/http-exception.filter'
import { FindAllProductsUsecase } from '@/application/usecase/find-all-products.usecase'

@Controller({ path: 'product', version: '1' })
export class ProductController {
    constructor(
        private readonly createProduct: CreateProductUsecase,
        private readonly findAllProducts: FindAllProductsUsecase
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
}
