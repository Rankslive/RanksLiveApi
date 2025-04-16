import { Global, Module } from '@nestjs/common'
import { DatabaseModule } from '@/share/database/database.module'
import { RedisModule } from '@/share/redis/redis.module'

@Global()
@Module({
	imports: [
		// DatabaseModule,
		// RedisModule
	],
	exports: [
		// DatabaseModule,
		// RedisModule
	]
})
export class ShareModule {}
