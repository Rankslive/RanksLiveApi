import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { ThreeSixKrService } from './three.six.kr.service'
import { ApiPlatform } from '../../common/decorator/api.platform.decorator'
import { ApiMaintainers } from '../../common/decorator/api.maintainers.decorator'
import { SourceUrl } from '../../common/decorator/source.url.decorator'
import { ThreeSixKrParamDto } from './three.six.kr.dto'
import { ThreeSixKrConstants } from './constants/three.six.kr.constants'

@Controller('36kr')
@ApiPlatform('36kr')
export class ThreeSixKrController {
    constructor(private readonly ThreeSixKrService: ThreeSixKrService) {}

    @Get(':type')
    @ApiOperation({ summary: '获取 36 kr 榜单' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://www.36kr.com/hot-list/catalog')
    async getHotRank(@Param() param: ThreeSixKrParamDto) {
        const { type } = param
        return await this.ThreeSixKrService.getHotRankList(ThreeSixKrConstants[type]['value'])
    }
}
