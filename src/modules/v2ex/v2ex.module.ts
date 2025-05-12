import { Module } from '@nestjs/common'
import { V2exController } from './v2ex.controller'
import { V2exService } from './v2ex.service'

@Module({
    controllers: [V2exController],
    providers: [V2exService]
})
export class V2exModule {}
