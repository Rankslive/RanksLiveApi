import { Module } from '@nestjs/common'
import { OschinaController } from './oschina.controller'
import { OschinaService } from './oschina.service'

@Module({
	controllers: [OschinaController],
	providers: [OschinaService]
})
export class OschinaModule {}
