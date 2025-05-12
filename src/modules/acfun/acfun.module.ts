import { Module } from '@nestjs/common'
import { AcfunController } from './acfun.controller'
import { AcfunService } from './acfun.service'

@Module({
    controllers: [AcfunController],
    providers: [AcfunService]
})
export class AcfunModule {}
