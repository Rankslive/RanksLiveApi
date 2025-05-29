import { Controller, Get, Query } from '@nestjs/common'
import { HistoryService } from './history.service'
import { ApiPlatform } from '../../common/decorator/api.platform.decorator'
import { ApiMaintainers } from '../../common/decorator/api.maintainers.decorator'
import { SourceUrl } from '../../common/decorator/source.url.decorator'
import { HistoryQueryDto } from './history.dto'
import { ApiDescription } from '../../common/decorator/api.description.decorator'

@Controller('history')
@ApiPlatform('历史上的今天')
export class HistoryController {
    constructor(private readonly historyService: HistoryService) {
    }

    @Get()
    @ApiDescription('获取历史上的今天')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://baike.baidu.com/calendar')
    async getHistory(@Query() query: HistoryQueryDto) {
        const monthStr = query.month.toString().padStart(2, '0')
        return await this.historyService.getHistory(monthStr)
    }
}
