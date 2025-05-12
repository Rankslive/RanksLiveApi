import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ThreeSixKrService } from '@/modules/three.six.kr/three.six.kr.service'
import { ThreeSixKrConstants } from '@/modules/three.six.kr/constants/three.six.kr.constants'
import { ThreeSixKrParamDto } from '@/modules/three.six.kr/three.six.kr.dto'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'

@Controller('36kr')
@ApiTags('36kr')
export class ThreeSixKrController {
    constructor(private readonly ThreeSixKrService: ThreeSixKrService) {}

    @Get(':type')
    @ApiOperation({ summary: '获取 36 kr 榜单' })
    @ApiMaintainers('lonewolfyx')
    async getHotRank(@Param() param: ThreeSixKrParamDto) {
        const { type } = param
        return await this.ThreeSixKrService.getHotRankList(ThreeSixKrConstants[type]['value'])
    }
}
