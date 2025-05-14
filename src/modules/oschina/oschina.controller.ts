import { Controller, Get, Param } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ApiDescription } from '@/common/decorator/api.description.decorator'
import { OschinaService } from '@/modules/oschina/oschina.service'
import { OschinaGroupParamDto } from '@/modules/oschina/oschina.dto'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'
import { SourceUrl } from '@/common/decorator/source.url.decorator'

@Controller('oschina')
@ApiTags('开源中国')
export class OschinaController {
    constructor(private readonly oschinaService: OschinaService) {}

    @Get('groups/:type')
    @ApiDescription('获取开源中国专区最新文章')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://www.oschina.net/groups/')
    async getGroupsNew(@Param() param: OschinaGroupParamDto) {
        const { type } = param
        return await this.oschinaService.getGroupsNewListByWeb(type)
    }

    @Get('rank/read')
    @ApiDescription('获取开源中国阅读榜单')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://www.oschina.net/readingList/')
    async getRankRead() {
        return await this.oschinaService.getRankRead()
    }
}
