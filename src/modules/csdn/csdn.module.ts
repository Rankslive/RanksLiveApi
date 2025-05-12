import { Module } from '@nestjs/common'
import { CsdnService } from './csdn.service'
import { CsdnController } from './csdn.controller'

@Module({
    controllers: [CsdnController],
    providers: [CsdnService]
})
export class CsdnModule {}
