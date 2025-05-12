import { Module } from '@nestjs/common'
import { ItHomeController } from './it.home.controller'
import { ItHomeService } from './it.home.service'

@Module({
    controllers: [ItHomeController],
    providers: [ItHomeService]
})
export class ItHomeModule {}
