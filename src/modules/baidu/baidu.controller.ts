import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { BaiduService } from '@/modules/baidu/baidu.service'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'

@Controller('baidu')
@ApiTags('百度')
export class BaiduController {
    constructor(private BaiduService: BaiduService) {}

    @Get('hot')
    @ApiOperation({ summary: '获取百度热搜' })
    @ApiMaintainers('lonewolfyx')
    async getBaiduHot() {
        return await this.BaiduService.getBaiduHot('realtime')
    }
    @Get('tieba/discussion')
    @ApiOperation({ summary: '获取百度贴吧热议榜' })
    @ApiMaintainers('lonewolfyx')
    async getBaiDuTieBaDiscussion() {
        return await this.BaiduService.getBaiduTieBaDiscussionRank()
    }
}
