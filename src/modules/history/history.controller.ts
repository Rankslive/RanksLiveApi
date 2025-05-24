import { Controller, Get, Query } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { HistoryService } from '@/modules/history/history.service'
import { HistoryQueryDto } from '@/modules/history/history.dto'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'
import { SourceUrl } from '@/common/decorator/source.url.decorator'
import { ApiPlatform } from '@/common/decorator/api.platform.decorator'

@Controller('history')
@ApiPlatform('历史上的今天')
export class HistoryController {
    constructor(private readonly historyService: HistoryService) {}

    @Get()
    @ApiOperation({ summary: '获取历史上的今天' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://baike.baidu.com/calendar')
    async getHistory(@Query() query: HistoryQueryDto) {
        const monthStr = query.month.toString().padStart(2, '0')
        return await this.historyService.getHistory(monthStr)
    }
}
