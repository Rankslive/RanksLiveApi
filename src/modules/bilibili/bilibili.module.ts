import { Module } from '@nestjs/common'
import { BilibiliController } from './bilibili.controller'
import { BilibiliService } from './bilibili.service'

@Module({
	controllers: [BilibiliController],
	providers: [BilibiliService]
})
export class BilibiliModule {}
