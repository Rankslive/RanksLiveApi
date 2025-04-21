import { Module } from '@nestjs/common'
import { YqqController } from './yqq.controller'
import { YqqService } from './yqq.service'

@Module({
	controllers: [YqqController],
	providers: [YqqService]
})
export class YqqModule {}
