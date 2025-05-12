import { Module } from '@nestjs/common'
import { ThePaperController } from './the.paper.controller'
import { ThePaperService } from './the.paper.service'

@Module({
    controllers: [ThePaperController],
    providers: [ThePaperService]
})
export class ThePaperModule {}
