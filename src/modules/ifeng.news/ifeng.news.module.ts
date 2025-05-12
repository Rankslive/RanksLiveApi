import { Module } from '@nestjs/common'
import { IfengNewsController } from './ifeng.news.controller'
import { IfengNewsService } from './ifeng.news.service'

@Module({
    controllers: [IfengNewsController],
    providers: [IfengNewsService]
})
export class IfengNewsModule {}
