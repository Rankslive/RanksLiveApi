import { Module } from '@nestjs/common'
import { ThreeSixKrController } from './three.six.kr.controller'
import { ThreeSixKrService } from './three.six.kr.service'

@Module({
    controllers: [ThreeSixKrController],
    providers: [ThreeSixKrService]
})
export class ThreeSixKrModule {}
