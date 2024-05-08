export class ProductDto {
    id?: string
    name: string
    description: string
    value: number
}

export class ProductOutputDto {
    constructor(
        public id: string,
        public description: string
    ) {}
}
