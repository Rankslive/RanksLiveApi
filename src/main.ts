import { NestFactory } from '@nestjs/core'
import { AppModule } from '@/app.module'
import { Logger, ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { version } from '../package.json'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    // 跨域
    app.enableCors()

    // 全局管道验证器
    app.useGlobalPipes(
        new ValidationPipe({
            // 自动剔除 DTO 上没声明的字段
            whitelist: true,
            // 自动将请求体转换为对应的DTO类实例
            transform: true,
            forbidNonWhitelisted: true
        })
    )

    const config = new DocumentBuilder()
        .setTitle('全球热门榜单数据供应平台')
        .setDescription(
            '提供全球网全平台热榜聚合服务，实时接入来自音乐流媒体、影视平台、应用商店、社交媒体趋势等 20+ 类别的权威榜单数据，助力追踪全网热点。'
        )
        .setVersion(version)
        .build()
    const documentFactory = () => SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, documentFactory, {
        jsonDocumentUrl: 'api/json',
        swaggerOptions: {
            showExtensions: true
        }
    })

    await app.listen(5019)

    return app.getUrl()
}

void (async (): Promise<void> => {
    try {
        const url = await bootstrap()
        Logger.log(url, 'Bootstrap')
    } catch (error) {
        Logger.error(error, 'Bootstrap')
    }
})()
