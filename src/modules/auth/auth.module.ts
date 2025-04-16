import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UserModule } from '@/modules/user/user.module'
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from '@/modules/auth/strategy/local.strategy'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from '@/constants/jwt.secret.constans'
import { JwtStrategy } from '@/modules/auth/strategy/jwt.strategy'

@Module({
	imports: [
		UserModule,
		PassportModule,
		JwtModule.register({
			global: true,
			secret: jwtConstants.secret,
			signOptions: { expiresIn: '60s' }
		})

	],
	providers: [
		AuthService,
		LocalStrategy,
		JwtStrategy
	],
	exports: [AuthService]
})
export class AuthModule {}
