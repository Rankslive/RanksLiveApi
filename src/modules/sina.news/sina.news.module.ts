import { Module } from '@nestjs/common'
import { SinaNewsController } from './sina.news.controller'
import { SinaNewsService } from './sina.news.service'

@Module({
    controllers: [SinaNewsController],
    providers: [SinaNewsService]
})
export class SinaNewsModule {}
