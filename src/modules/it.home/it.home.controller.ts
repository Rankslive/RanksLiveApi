import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ItHomeService } from '@/modules/it.home/it.home.service'
import { ItHomeConstants } from '@/modules/it.home/constants/it.home.constants'
import { iTHomeParamDto } from '@/modules/it.home/it.home.dto'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'

@Controller('it.home')
@ApiTags('iT 之家')
export class ItHomeController {
    constructor(private readonly itHomeService: ItHomeService) {}

    @Get('rank/:rank/:type')
    @ApiOperation({ summary: '获取 it 之家榜单' })
    @ApiMaintainers('lonewolfyx')
    async getReadDayRank(@Param() param: iTHomeParamDto) {
        const { rank, type } = param
        return this.itHomeService.getRankList(ItHomeConstants[rank]['type'], type)
    }
}
