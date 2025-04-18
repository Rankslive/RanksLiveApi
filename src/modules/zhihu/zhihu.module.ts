import { Module } from '@nestjs/common'
import { ZhihuController } from './zhihu.controller'
import { ZhihuService } from './zhihu.service'

@Module({
	controllers: [ZhihuController],
	providers: [ZhihuService]
})
export class ZhihuModule {}
