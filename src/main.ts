import { NestFactory } from '@nestjs/core'
import { AppModule } from '@/app.module'
import * as process from 'node:process'
import { Logger, ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { env } from '@/utils/env'
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
		.setTitle(env('PROJECT_TITLE'))
		.setDescription(env('PROJECT_KEYWORD'))
		.setVersion(version)
		.build()
	const documentFactory = () => SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api', app, documentFactory, {
		jsonDocumentUrl: 'api/json',
		swaggerOptions: {
			showExtensions: true
		}
	})

	await app.listen(process.env.PORT ?? 3000)

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
