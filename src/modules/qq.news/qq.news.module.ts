import { Module } from '@nestjs/common'
import { QqNewsController } from './qq.news.controller'
import { QqNewsService } from './qq.news.service'

@Module({
    controllers: [QqNewsController],
    providers: [QqNewsService]
})
export class QqNewsModule {}
