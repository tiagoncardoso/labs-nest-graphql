import { Product } from './product'

describe('Product', () => {
    let product: Product

    describe('isValid()', () => {
        it('Should return true when name, description and value are valid', () => {
            const productName = 'Valid product name'
            const productDescription = 'Valid product description'
            const productValue = 10

            product = new Product(productName, productDescription, productValue)

            expect(product.isValid()).toBeTruthy()
        })

        it('Should return false when name is invalid (empty, smaller or null)', () => {
            let productName = ''
            const productDescription = 'Valid product description'
            const productValue = 10

            product = new Product(productName, productDescription, productValue)

            expect(() => product.isValid()).toThrow(new Error('Invalid name'))

            productName = null
            product = new Product(productName, productDescription, productValue)

            expect(() => product.isValid()).toThrow(new Error('Invalid name'))

            productName = 'a'
            product = new Product(productName, productDescription, productValue)

            expect(() => product.isValid()).toThrow(new Error('Invalid name'))
        })

        it('Should return false when description is invalid (empty, smaller or null)', () => {
            const productName = 'Valid product name'
            let productDescription = ''
            const productValue = 10

            product = new Product(productName, productDescription, productValue)

            expect(() => product.isValid()).toThrow(new Error('Invalid description'))

            productDescription = null
            product = new Product(productName, productDescription, productValue)

            expect(() => product.isValid()).toThrow(new Error('Invalid description'))

            productDescription = 'a'
            product = new Product(productName, productDescription, productValue)

            expect(() => product.isValid()).toThrow(new Error('Invalid description'))
        })

        it('Should return false when value is invalid (null or smaller then 0)', () => {
            const productName = 'Valid product name'
            const productDescription = 'Valid product description'
            let productValue = -1

            product = new Product(productName, productDescription, productValue)

            expect(() => product.isValid()).toThrow(new Error('Invalid value'))

            productValue = null
            product = new Product(productName, productDescription, productValue)

            expect(() => product.isValid()).toThrow(new Error('Invalid value'))

            productValue = NaN
            product = new Product(productName, productDescription, productValue)

            expect(() => product.isValid()).toThrow(new Error('Invalid value'))
        })
    })

    describe('productName()', () => {
        const productName = 'Valid product name'
        const productDescription = 'Valid product description'
        const productValue = 10

        product = new Product(productName, productDescription, productValue)

        it('Should return the product name in a productName getter', () => {
            expect(product.productName).toEqual(productName)
        })
    })
})
