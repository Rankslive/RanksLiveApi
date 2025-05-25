import { Module } from '@nestjs/common'
import { MsnController } from './msn.controller'
import { MsnService } from './msn.service'

@Module({
    controllers: [MsnController],
    providers: [MsnService]
})
export class MsnModule {}
