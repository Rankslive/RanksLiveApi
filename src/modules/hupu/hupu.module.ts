import { Module } from '@nestjs/common'
import { HupuService } from './hupu.service'
import { HupuController } from './hupu.controller'

@Module({
	controllers: [HupuController],
	providers: [HupuService]
})
export class HupuModule {}
