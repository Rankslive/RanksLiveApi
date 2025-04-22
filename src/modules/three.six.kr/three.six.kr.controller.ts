import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ThreeSixKrService } from '@/modules/three.six.kr/three.six.kr.service'
import { ThreeSixKrConstants } from '@/constants/three.six.kr.constants'

@Controller('36kr')
@ApiTags('36kr')
export class ThreeSixKrController {
    constructor(private readonly ThreeSixKrService: ThreeSixKrService) {
    }

    @Get('hot')
    @ApiOperation({summary:'获取 36 kr · 人气榜'})
    async getHotRank() {
        return await this.ThreeSixKrService.getHotRankList(ThreeSixKrConstants.hot.type)
    }

    @Get('video')
    @ApiOperation({summary:'获取 36 kr · 视频榜'})
    async getVideoRank() {
        return await this.ThreeSixKrService.getHotRankList(ThreeSixKrConstants.video.type)
    }

    @Get('comment')
    @ApiOperation({summary:'获取 36 kr · 热议榜'})
    async getCommentRank() {
        return await this.ThreeSixKrService.getHotRankList(ThreeSixKrConstants.comment.type)
    }

    @Get('collect')
    @ApiOperation({summary:'获取 36 kr · 收藏榜'})
    async getCollectRank() {
        return await this.ThreeSixKrService.getHotRankList(ThreeSixKrConstants.collect.type)
    }
}
