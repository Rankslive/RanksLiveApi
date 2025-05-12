import { Module } from '@nestjs/common'
import { WeiboController } from './weibo.controller'
import { WeiboService } from './weibo.service'

@Module({
    controllers: [WeiboController],
    providers: [WeiboService]
})
export class WeiboModule {}
