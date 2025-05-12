import { Module } from '@nestjs/common'
import { DoubanController } from './douban.controller'
import { DoubanService } from './douban.service'

@Module({
    controllers: [DoubanController],
    providers: [DoubanService]
})
export class DoubanModule {}
