import { Body, Controller, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common'
import { ApiResponse } from '@/application/interface/api-response'
import { ProductDto, ProductOutputDto } from '@/application/dto/product.dto'
import { CreateProductUsecase } from '@/application/usecase/create-product.usecase'
import { HttpExceptionFilter } from '@/presenter/controller/filter/http-exception.filter'

@Controller({ path: 'product', version: '1' })
export class ProductController {
    constructor(private readonly createProduct: CreateProductUsecase) {}

    @Post('/')
    @UsePipes(new ValidationPipe())
    @UseFilters(new HttpExceptionFilter())
    public async create(@Body() product: ProductDto): Promise<ApiResponse<ProductOutputDto>> {
        return this.createProduct.execute(product)
    }
}
