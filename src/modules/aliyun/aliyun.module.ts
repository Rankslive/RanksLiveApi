import { Module } from '@nestjs/common'
import { AliyunController } from './aliyun.controller'
import { AliyunService } from './aliyun.service'

@Module({
	controllers: [AliyunController],
	providers: [AliyunService]
})
export class AliyunModule {}
