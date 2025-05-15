import { Module } from '@nestjs/common'
import { XiaohongshuController } from './xiaohongshu.controller'
import { XiaohongshuService } from './xiaohongshu.service'

@Module({
    controllers: [XiaohongshuController],
    providers: [XiaohongshuService]
})
export class XiaohongshuModule {}
