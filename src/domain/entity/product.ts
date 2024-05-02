import { MinLenEnum } from '@/application/enum/min-len.enum'

export class Product {
    private id: string
    private name: string
    private description: string
    private value: number

    constructor(name: string, description: string, value: number) {
        this.name = name
        this.description = description
        this.value = value
    }

    public isValid(): boolean {
        try {
            return this.validateName() && this.validateDescription() && this.validateValue()
        } catch (error) {
            return error
        }
    }

    private validateName(): boolean {
        if (!this.name || this.name.length < MinLenEnum.NAME) {
            throw new Error('Invalid name')
        }
        return true
    }

    private validateDescription(): boolean {
        if (!this.description || this.description.length < MinLenEnum.DESCRIPTION) {
            throw new Error('Invalid description')
        }
        return true
    }

    private validateValue(): boolean {
        if (!this.value || this.value < 0) {
            throw new Error('Invalid value')
        }
        return true
    }
}
