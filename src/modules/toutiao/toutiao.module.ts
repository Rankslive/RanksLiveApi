import { Module } from '@nestjs/common'
import { ToutiaoController } from './toutiao.controller'
import { ToutiaoService } from './toutiao.service'

@Module({
    controllers: [ToutiaoController],
    providers: [ToutiaoService]
})
export class ToutiaoModule {}
