import { VersioningType } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const config = app.get<ConfigService>(ConfigService)
    const appPort = config.get('APP_PORT') || 3000

    app.enableCors({
        origin: config.get('CORS_ORIGIN'),
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    })

    app.enableVersioning({
        type: VersioningType.URI,
    })

    await app.listen(appPort)
    console.log(' ---------------------------------------------------- ')
    console.log(`| ✅ Application is running on: ${await app.getUrl()}/vX/ |`)
    console.log('| Where X is the version of the API.                 |')
    console.log(' ---------------------------------------------------- ')
}
bootstrap()
