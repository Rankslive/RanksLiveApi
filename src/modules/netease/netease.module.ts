import { Module } from '@nestjs/common'
import { NeteaseController } from './netease.controller'
import { NeteaseService } from './netease.service'

@Module({
	controllers: [NeteaseController],
	providers: [NeteaseService]
})
export class NeteaseModule {}
