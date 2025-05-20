import { Module } from '@nestjs/common'
import { AppleController } from './apple.controller'
import { AppleService } from './apple.service'
import { AppleMusicService } from './apple.music.service'

@Module({
    controllers: [AppleController],
    providers: [
        AppleService,
        AppleMusicService
    ]
})
export class AppleModule {}
