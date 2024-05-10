import { CreateProductUsecase } from '@/application/usecase/product/create-product.usecase'
import { ProductRepositoryInterface } from '@/domain/repository/product.repository'
import { ApiResponse } from '@/application/interface/api-response'
import { ProductDto, ProductOutputDto } from '@/application/dto/product.dto'
import { ObjectId } from 'bson'

describe('CreateProductUsecase', () => {
    let createProductUsecase: CreateProductUsecase
    let mockProductRepository: ProductRepositoryInterface
    const newObjectId = new ObjectId().toHexString()

    const productDto: ProductDto = {
        name: 'product',
        description: 'Valid product description',
        value: 10.2,
    }

    beforeEach(() => {
        mockProductRepository = {
            create: jest.fn().mockImplementation((product) => {
                return {
                    id: newObjectId,
                    description: product.description,
                }
            }),
            findAll: jest.fn(),
            findById: jest.fn(),
        }
        createProductUsecase = new CreateProductUsecase(mockProductRepository)
    })

    describe('execute()', () => {
        it('Should return product created successfully', async () => {
            const validProductOutputDto: ApiResponse<ProductOutputDto> = {
                message: 'Product created successfully',
                data: {
                    id: newObjectId,
                    description: 'Valid product description',
                },
            }

            expect(createProductUsecase.execute(productDto)).resolves.toEqual(validProductOutputDto)
        })

        it('Should throw error if passed product is invalid', async () => {
            productDto.name = 'a'
            expect(createProductUsecase.execute(productDto)).rejects.toThrow(new Error('Invalid name'))

            productDto.name = 'Valid Product Name'
            productDto.description = 'a'
            expect(createProductUsecase.execute(productDto)).rejects.toThrow(new Error('Invalid description'))

            productDto.description = 'Valid Product Description'
            productDto.value = -1
            expect(createProductUsecase.execute(productDto)).rejects.toThrow(new Error('Invalid value'))
        })
    })
})
