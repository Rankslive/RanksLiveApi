import { Controller, Get, Query } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { HistoryService } from '@/modules/history/history.service'
import { HistoryQueryDto } from '@/modules/history/history.dto'
import { isNumber } from 'radash'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'

@Controller('history')
@ApiTags('历史上的今天')
export class HistoryController {
    constructor(private readonly historyService: HistoryService) {}

    @Get()
    @ApiOperation({ summary: '获取历史上的今天' })
    @ApiMaintainers('lonewolfyx')
    async getHistory(@Query() query: HistoryQueryDto) {
        const monthStr = query.month.toString().padStart(2, '0')
        return await this.historyService.getHistory(monthStr)
    }
}
