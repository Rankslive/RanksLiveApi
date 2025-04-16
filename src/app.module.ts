import { Module } from '@nestjs/common'
import { ShareModule } from '@/share/share.module'
import { ConfigModule } from '@nestjs/config'
import * as process from 'node:process'
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core'
import { AllExceptionFilter } from '@/common/filters/all-exception.filter'
import { ResponseInterceptor } from '@/common/interceptor/response.interceptor'
import { AuthModule } from './modules/auth/auth.module'
import { UserModule } from './modules/user/user.module'
import { JwtAuthGuard } from '@/modules/auth/guard/jwt-auth.guard'
import { RbacGuard } from '@/modules/auth/guard/rbac.guard'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: [`.env.${process.env.NODE_ENV}`]
		}),
		ShareModule,
		AuthModule,
		UserModule

	],
	providers: [
		// 全局 JWT 验证守卫
		{ provide: APP_GUARD, useClass: JwtAuthGuard },
		// 全局 RBAC 验证守卫
		{ provide: APP_GUARD, useClass: RbacGuard },
		// 全局 异常过滤器
		{ provide: APP_FILTER, useClass: AllExceptionFilter },
		// 全局 响应拦截器
		{ provide: APP_INTERCEPTOR, useClass: ResponseInterceptor }
	]
})
export class AppModule {}
