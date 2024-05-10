import { ProductRepositoryInterface } from '@/domain/repository/product.repository'
import { ProductDto } from '@/application/dto/product.dto'
import { ObjectId } from 'bson'
import { FindProductByIdUsecase } from '@/application/usecase/product/find-product-by-id.usecase'

describe('FindProductByIdUsecase', () => {
    let findProductById: FindProductByIdUsecase
    let mockProductRepository: ProductRepositoryInterface

    const productDto: ProductDto = {
        name: 'valid product name',
        description: 'Valid product description',
        value: 10.2,
    }

    beforeEach(() => {
        mockProductRepository = {
            create: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn().mockImplementation((id) => {
                return {
                    id,
                    name: productDto.name,
                    description: productDto.description,
                    value: productDto.value,
                }
            }),
        }
        findProductById = new FindProductByIdUsecase(mockProductRepository)
    })

    describe('execute()', () => {
        it('Should return product when a valid id was passed', async () => {
            const objectId = new ObjectId().toHexString()
            const validProductDto: ProductDto = {
                id: objectId,
                ...productDto,
            }

            expect(findProductById.execute(objectId)).resolves.toStrictEqual({
                message: 'Product found',
                data: validProductDto,
            })
        })

        it('Should return throw when an invalid id was passed', async () => {
            const objectId = new ObjectId().toHexString()
            mockProductRepository = {
                create: jest.fn(),
                findAll: jest.fn(),
                findById: jest.fn().mockImplementation((id) => {
                    return {}
                }),
            }
            findProductById = new FindProductByIdUsecase(mockProductRepository)

            expect(findProductById.execute(objectId)).resolves.toStrictEqual({
                message: 'Product not found',
                data: {},
            })
        })
    })
})
