import { FindAllProductsUsecase } from '@/application/usecase/product/find-all-products.usecase'
import { ProductRepositoryInterface } from '@/domain/repository/product.repository'
import { ProductDto } from '@/application/dto/product.dto'
import { ApiResponse } from '@/application/interface/api-response'
import { ObjectId } from 'bson'
import { CreateProductUsecase } from '@/application/usecase/product/create-product.usecase'

describe('FindAllProductsUsecase', () => {
    let findAllProducts: FindAllProductsUsecase
    let mockProductRepository: ProductRepositoryInterface

    const registeredProducts: Array<ProductDto> = []

    beforeEach(() => {
        mockProductRepository = {
            create: jest.fn().mockImplementation((productDto: ProductDto) => {
                const id = new ObjectId().toHexString()
                registeredProducts.push({ id, ...productDto })
            }),
            findAll: jest.fn().mockImplementation(() => {
                return registeredProducts
            }),
            findById: jest.fn(),
        }
        findAllProducts = new FindAllProductsUsecase(mockProductRepository)
    })

    describe('execute()', () => {
        it('Should return no products when no product has created', async () => {
            const emptyResponse: ApiResponse<ProductDto | any> = {
                message: `Product(s) found: 0`,
                data: [],
            }
            expect(findAllProducts.execute()).resolves.toStrictEqual(emptyResponse)
        })
        it('Should return all products when any product has created', async () => {
            const totalItems = 15
            const createProductUsecase: CreateProductUsecase = new CreateProductUsecase(mockProductRepository)
            for (let i = 0; i < totalItems; i++) {
                const product: ProductDto = {
                    name: `product ${i}`,
                    description: `description ${i}`,
                    value: 10.2 * i + 10,
                }

                await createProductUsecase.execute(product)
            }

            const response: ApiResponse<ProductDto | any> = {
                message: `Product(s) found: ${totalItems}`,
                data: registeredProducts,
            }

            expect(findAllProducts.execute()).resolves.toStrictEqual(response)
        })
    })
})
