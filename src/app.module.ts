import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import * as process from 'node:process'
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core'
import { AllExceptionFilter } from '@/common/filters/all-exception.filter'
import { ResponseInterceptor } from '@/common/interceptor/response.interceptor'
import { AppController } from './app.controller'
import { BaiduModule } from '@/modules/baidu/baidu.module'
import { WeiboModule } from '@/modules/weibo/weibo.module'
import { JuejinModule } from '@/modules/juejin/juejin.module'
import { HupuModule } from '@/modules/hupu/hupu.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: [`.env.${process.env.NODE_ENV}`]
		}),

		BaiduModule,
		HupuModule,
		WeiboModule,
		JuejinModule

	],
	providers: [
		// 全局 异常过滤器
		{ provide: APP_FILTER, useClass: AllExceptionFilter },
		// 全局 响应拦截器
		{ provide: APP_INTERCEPTOR, useClass: ResponseInterceptor }
	],
	controllers: [
		AppController
	]
})
export class AppModule {}
