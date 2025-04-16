import { NestFactory } from '@nestjs/core'
import { AppModule } from '@/app.module'
import * as process from 'node:process'
import { Logger, ValidationPipe } from '@nestjs/common'
import { requestMiddleware } from '@/common/middleware/request.middleware'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { env } from '@/utils/env'
import { ipMiddleware } from '@/common/middleware/ip.middleware'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	// 跨域
	app.enableCors()

	// 请求 ID
	app.use(requestMiddleware)

	// ip 中间件
	app.use(ipMiddleware)

	// 全局管道验证器
	app.useGlobalPipes(
		new ValidationPipe({
			// 自动将请求体转换为对应的DTO类实例
			transform: true
		})
	)

	const config = new DocumentBuilder()
		.setTitle(env('PROJECT_TITLE'))
		.setDescription(env('PROJECT_KEYWORD'))
		.setVersion('1.0')
		.addTag('api')
		.build()
	const documentFactory = () => SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api', app, documentFactory, {
		jsonDocumentUrl: 'api/json'
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
