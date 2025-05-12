import { Module } from '@nestjs/common'
import { SspaiController } from './sspai.controller'
import { SspaiService } from './sspai.service'

@Module({
    controllers: [SspaiController],
    providers: [SspaiService]
})
export class SspaiModule {}
