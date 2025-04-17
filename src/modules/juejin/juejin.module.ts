import { Module } from '@nestjs/common'
import { JuejinController } from './juejin.controller'
import { JuejinService } from './juejin.service'

@Module({
	controllers: [JuejinController],
	providers: [JuejinService]
})
export class JuejinModule {}
