import { Module } from '@nestjs/common'
import { BaiduController } from './baidu.controller'
import { BaiduService } from './baidu.service'

@Module({
	controllers: [BaiduController],
	providers: [BaiduService]
})
export class BaiduModule {}
