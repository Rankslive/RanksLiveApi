import { Module } from '@nestjs/common'
import { CloudTencentController } from './cloud.tencent.controller'
import { CloudTencentService } from './cloud.tencent.service'

@Module({
    controllers: [CloudTencentController],
    providers: [CloudTencentService]
})
export class CloudTencentModule {}
