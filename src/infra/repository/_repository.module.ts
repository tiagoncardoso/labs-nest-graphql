import { Module } from '@nestjs/common'
import { PrismaModule } from '@/infra/database/prisma/prisma.module'
import { ProductRepository } from '@/infra/repository/product.repository'
import { PrismaService } from '@/infra/database/prisma/prisma.service'

const repositories = [
    PrismaService,
    {
        provide: 'ProductRepositoryInterface',
        useClass: ProductRepository,
    },
]

@Module({
    imports: [PrismaModule],
    providers: [...repositories],
    exports: [...repositories],
})
export class RepositoryModule {}
