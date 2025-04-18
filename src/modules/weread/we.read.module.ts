import { Module } from '@nestjs/common'
import { WeReadController } from './we.read.controller'
import { WeReadService } from './we.read.service'

@Module({
	controllers: [WeReadController],
	providers: [WeReadService]
})
export class WeReadModule {}
